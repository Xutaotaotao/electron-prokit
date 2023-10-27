import { spawn } from 'child_process';
import type { ChildProcess } from 'child_process';
import { build, createServer } from 'vite';
import type { UserConfig, ViteDevServer } from 'vite';


let spawnProcess: ChildProcess | null = null;

interface ServerOptions {
  sharedOptions?: {
    mode: 'dev';
    build: {
      watch: {};
    };
  };
  config: any;
}

const renderDev = {
  async createRenderServer(serverOptions: ServerOptions) {
    const { sharedOptions, config } = serverOptions;

    process.env.VITE_CURRENT_RUN_MODE = 'render';

    const options = {
      configFile: false,
      ...sharedOptions,
      ...config,
    };

    const server = await createServer(options);
    await server.listen();
    server.printUrls();

    return server;
  },
};

const preloadDev = {
  async createRenderServer(viteDevServer: ViteDevServer, serverOptions: ServerOptions) {
    const { sharedOptions, config } = serverOptions;

    process.env.VITE_CURRENT_RUN_MODE = 'preload';

    const options = {
      configFile: false,
      ...sharedOptions,
      ...config,
    };

    return build({
      ...options,
      plugins: [
        {
          name: 'reload-page-on-preload-package-change',
          writeBundle() {
            viteDevServer.ws.send({
              type: 'full-reload',
            });
          },
        },
      ],
    });
  },
};

const workDev = {
  async createRenderServer(viteDevServer: ViteDevServer, serverOptions: ServerOptions) {
    process.env.VITE_CURRENT_RUN_MODE = 'work';

    const { sharedOptions, config } = serverOptions;

    const options = {
      configFile: false,
      ...sharedOptions,
      ...config,
    };

    return build({
      ...options,
      plugins: [
        {
          name: 'reload-page-on-work-package-change',
          writeBundle() {
            viteDevServer.ws.send({
              type: 'full-reload',
            });
          },
        },
      ],
    });
  },
};

const mainDev = {
  async createMainServer(renderDevServer: ViteDevServer, serverOptions: ServerOptions, electronPath: string) {
    const { sharedOptions, config } = serverOptions;

    const protocol = `http${renderDevServer.config.server.https ? 's' : ''}:`;
    const host = renderDevServer.config.server.host || 'localhost';
    const port = renderDevServer.config.server.port;

    process.env.VITE_DEV_SERVER_URL = `${protocol}//${host}:${port}/`;
    process.env.VITE_CURRENT_RUN_MODE = 'main';

    const options = {
      configFile: false,
      ...sharedOptions,
      ...config,
    };

    return build({
      ...options,
      plugins: [
        {
          name: 'reload-app-on-main-package-change',
          writeBundle() {
            if (spawnProcess != null) {
              spawnProcess.kill('SIGINT');
              spawnProcess = null;
            }

            spawnProcess = spawn(String(electronPath), ['.']);

            if (spawnProcess) {
              spawnProcess.stdout!.on('data', (d: any) => {
                const data = d.toString().trim();
                console.log(data);
              });
              spawnProcess.stderr!.on('data', (err: Error) => {
                console.error(`stderr: ${err}`);
              });
            }

            process.on('SIGINT', () => {
              if (spawnProcess) {
                spawnProcess.kill();
                spawnProcess = null;
              }
              process.exit();
            });
          },
        },
      ],
    });
  },
};

interface CreateViteElectronServiceOptions {
  render: UserConfig;
  preload: UserConfig;
  work?: UserConfig;
  main: UserConfig;
  electronPath: any;
  sharedOptions?: {
    mode: 'dev';
    build: {
      watch: {};
    };
  };
}

const createViteElectronService = async (options: CreateViteElectronServiceOptions) => {
  const {
    render,
    preload,
    work,
    main,
    electronPath,
    sharedOptions = {
      mode: 'dev',
      build: {
        watch: {},
      },
    },
  } = options;

  try {
    const renderDevServer = await renderDev.createRenderServer({ config: render, sharedOptions });
    await preloadDev.createRenderServer(renderDevServer, { config: preload, sharedOptions });
    if (work) {
      await workDev.createRenderServer(renderDevServer, { config: work, sharedOptions });
    }
    await mainDev.createMainServer(renderDevServer, { config: main, sharedOptions }, electronPath);
  } catch (err) {
    console.error(err);
  }
};

export default createViteElectronService;