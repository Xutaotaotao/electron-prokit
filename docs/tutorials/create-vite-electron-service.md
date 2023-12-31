# Building an Electron Project Quickly with Vite and React

## Create a Vite+React project

Use the official Vite guide to create a vite+react project.

`yarn create vite`

Select `React`, choose `Typescript + SWC`.

![alt Create](/tutorials/create-vite-electron-service1.png)

## Modify the project structure

Under the `src` directory, create `main`, `render`, `preload`, and `work` directories, then move all the original content under src to the render directory, and change the import of script in `index.html` to `<script type="module" src="/src/render/main.tsx"></script>`

![alt Create](/tutorials/create-vite-electron-service2.png)

- `main` is the main process related code directory
- `render` is the renderer process related code directory
- `preload` is the preload script service code directory
- `work` is the worker process related code directory

This outlines the core engineering directories of an electron project.

Then we need to create an `index.ts` entry file under render, preload, and work respectively, to facilitate Vite to start these services later.

## Add configuration file

Create a configuration file at the root

- `ep.config.ts`

```ts
import { builtinModules } from "module";
import { fileURLToPath } from "url";
import { cwd } from "process";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import electronPath from "electron";
import type { UserConfig } from "vite";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const sharedResolve = {
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
};

interface Config {
  main: UserConfig;
  preload: UserConfig;
  render: UserConfig;
  work: UserConfig;
  electronPath:any;
}

const config: Config = {
  // main process config
  main: {
    root: cwd(),
    resolve: sharedResolve,
    build: {
      outDir: path.resolve(__dirname, "dist/main"),
      minify: false,
      lib: {
        entry: path.resolve(__dirname, "src/main/index.ts"),
        formats: ["cjs"],
      },
      rollupOptions: {
        external: ["electron", "koffi", ...builtinModules],
        output: {
          entryFileNames: "[name].cjs",
        },
      },
      emptyOutDir: true,
      chunkSizeWarningLimit: 2048,
    },
  },
  // preload config
  preload: {
    root: cwd(),
    resolve: sharedResolve,
    build: {
      outDir: path.resolve(__dirname, "dist/preload"),
      minify: false,
      lib: {
        entry: path.resolve(__dirname, "src/preload/index.ts"),
        formats: ["cjs"],
      },
      rollupOptions: {
        external: ["electron", ...builtinModules],
        output: {
          entryFileNames: "[name].cjs",
        },
      },
      emptyOutDir: true,
      chunkSizeWarningLimit: 2048,
    },
  },
  // render process config
  render: {
    root: cwd(),
    base: "./",
    resolve: sharedResolve,
    build: {
      outDir: path.resolve(__dirname, "../dist/render"),
      minify: true,
      assetsInlineLimit: 1048576,
      emptyOutDir: true,
      chunkSizeWarningLimit: 2048,
      rollupOptions: {
        external: [...builtinModules, "electron"],
      },
    },
    plugins: [react()],
  },
  // works process config
  work: {
    root: path.resolve(__dirname, "src/work"),
    envDir: cwd(),
    resolve: sharedResolve,
    build: {
      outDir: path.resolve(__dirname, "dist/work"),
      assetsDir: ".",
      minify: false,
      lib: {
        entry: path.resolve(__dirname, "src/work/index.ts"),
        formats: ["cjs"],
      },
      rollupOptions: {
        external: ["electron", ...builtinModules],
        output: {
          entryFileNames: "[name].cjs",
        },
      },
      emptyOutDir: true,
      chunkSizeWarningLimit: 2048,
    },
  },
  electronPath,
};

export default config;

```

## Write main process code

Install `electron` and `electron-prokit`

`yarn add electron electron-prokit -D`

- `src/main/index.ts`

```ts
import { join, resolve } from "path";
import { app } from "electron";
import { createWindow } from "electron-prokit";

const initWindowsAction = () => {
  const mainWindow = createWindow("main", {
    width: 960,
    height: 720,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      webSecurity: false,
      preload: join(__dirname, "../preload/index.cjs"),
    },
  });

  if (mainWindow) {
    if (import.meta.env.MODE === "dev") {
      if (import.meta.env.VITE_DEV_SERVER_URL) {
        mainWindow.loadURL(import.meta.env.VITE_DEV_SERVER_URL);
        mainWindow.webContents.openDevTools();
      }
    } else {
      mainWindow.loadFile(resolve(__dirname, "../render/index.html"));
    }
  }
};

app.whenReady().then(() => {
  initWindowsAction();
});
```

## Integrate custom project startup scripts

With the Vite configuration files, we can customize dev scripts to start local electron projects.

Create a scripts directory at the root, and add the dev.ts file.

Install `@electron-prokit/create-service`.

`yarn add @electron-prokit/create-service -D`

-`scripts/dev.ts`

```javascript
import path from "path";
import electronPath from "electron";
import { fileURLToPath } from "url";
import createViteElectronService from "@electron-prokit/create-service";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

createViteElectronService({
  renderConfigFile: path.resolve(__dirname, "../vite/render.js"),
  preloadConfigFile: path.resolve(__dirname, "../vite/preload.js"),
  workConfigFile: path.resolve(__dirname, "../vite/work.js"),
  mainConfigFile: path.resolve(__dirname, "../vite/main.js"),
  electronPath,
});
```

Add 
```bash
 "dev": "node --experimental-specifier-resolution=node --loader ts-node/esm ./scripts/dev.ts"
```

to the `scripts` option in `package.json`


Add `"main": "dist/main/index.cjs"` entry in package.json.

## Start the project

After the above steps, you can start the Electron project with one click.

`yarn run dev`

![alt demo](/tutorials/create-vite-electron-service3.png)
