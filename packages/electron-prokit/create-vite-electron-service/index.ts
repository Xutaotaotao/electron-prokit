#!/usr/bin/node
import electronPath from "electron";
import { spawn } from "child_process";
import { createServer, build, ViteDevServer } from "vite";

interface createServerOptions {
  configFile:string,
  sharedOptions: SharedOptions
}

interface RenderDev {
  server?: ViteDevServer;
  createRenderServer(serverOptions:createServerOptions): Promise<ViteDevServer>;
}


const renderDev:RenderDev = {
  async createRenderServer(serverOptions:createServerOptions) {
    const {sharedOptions,configFile} = serverOptions
    process.env.VITE_CURRENT_RUN_MODE = "render";
    const options = {
      ...sharedOptions,
      configFile,
    };
    this.server = await createServer(options);
    await this.server.listen();
    this.server.printUrls();
    return this.server;
  },
};

const preloadDev = {
  async createRenderServer(viteDevServer:ViteDevServer,serverOptions:createServerOptions) {
    const {sharedOptions,configFile} = serverOptions
    process.env.VITE_CURRENT_RUN_MODE = "preload";
    const options = {
      ...sharedOptions,
      configFile,
    };
    return build({
      ...options,
      plugins: [
        {
          name: "reload-page-on-preload-package-change",
          writeBundle() {
            viteDevServer.ws.send({
              type: "full-reload",
            });
          },
        },
      ],
    });
  },
};


const workDev = {
  async createRenderServer(viteDevServer:ViteDevServer,serverOptions:createServerOptions) {
    process.env.VITE_CURRENT_RUN_MODE = "work";
    const {sharedOptions,configFile} = serverOptions
    const options = {
      ...sharedOptions,
      configFile,
    };
    return build({
      ...options,
      plugins: [
        {
          name: "reload-page-on-work-package-change",
          writeBundle() {
            viteDevServer.ws.send({
              type: "full-reload",
            });
          },
        },
      ],
    });
  },
};

let spawnProcess:any = null;

const mainDev = {
  async createMainServer(renderDevServer:ViteDevServer,serverOptions:createServerOptions) {
    const {sharedOptions,configFile} = serverOptions
    const protocol = `http${renderDevServer.config.server.https ? "s" : ""}:`;
    const host = renderDevServer.config.server.host || "localhost";
    const port = renderDevServer.config.server.port;
    process.env.VITE_DEV_SERVER_URL = `${protocol}//${host}:${port}/`;
    process.env.VITE_CURRENT_RUN_MODE = "main";
    const options = {
      ...sharedOptions,
      configFile,
    };
    return build({
      ...options,
      plugins: [
        {
          name: "reload-app-on-main-package-change",
          writeBundle() {
            if (spawnProcess !== null) {
              spawnProcess.kill("SIGINT");
              spawnProcess = null;
            }

            spawnProcess = spawn(String(electronPath), ["."]);

            spawnProcess.stdout.on("data", (d:any) => {
              const data = d.toString().trim();
              console.log(data);
            });

            spawnProcess.stderr.on("data", (data:any) => {
              console.error(`stderr: ${data}`);
            });

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

interface SharedOptions {
  mode: 'dev' | 'prod';
  build: {
    watch?: any; 
  }
}

interface CreateViteElectronServiceOptions {
  renderConfigFile:string;
  preloadConfigFile:string;
  workConfigFile:string;
  mainConfigFile:string;
  sharedOptions?:SharedOptions
}


const createViteElectronService = async (options:CreateViteElectronServiceOptions) => {
  const {
    renderConfigFile,
    preloadConfigFile,
    workConfigFile,
    mainConfigFile,
    sharedOptions = {
      mode: "dev",
      build: {
        watch: {},
      },
    }
  } = options
  try {
    const renderDevServer = await renderDev.createRenderServer({configFile:renderConfigFile,sharedOptions});
    await preloadDev.createRenderServer(renderDevServer,{configFile:preloadConfigFile,sharedOptions});
    await workDev.createRenderServer(renderDevServer,{configFile:workConfigFile,sharedOptions});
    await mainDev.createMainServer(renderDevServer,{configFile:mainConfigFile,sharedOptions});
  } catch (err) {
    console.error(err);
  }
};

export default createViteElectronService
