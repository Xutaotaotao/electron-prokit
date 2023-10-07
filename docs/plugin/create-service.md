# create-service

Suitable for projects created with Vite. It creates the renderer, worker, main process and preload scripts required by Electron for you, allowing you to start an Electron project with hot updates with one click.

## Install dependencies

`yarn add @electron-prokit/create-service -D`

## Usage

```ts
// scripts/dev.ts
import createViteElectronService from "@electron-prokit/create-service";
import config from "../ep.config";
createViteElectronService({
  render: config.render,
  preload: config.preload,
  work: config.work,
  main: config.main,
  electronPath: config.electronPath,
});
```

```ts
// ep.config.ts
import { builtinModules } from "module";
import { fileURLToPath } from "url";
import { cwd } from "process";
import path from "path";
import vue from "@vitejs/plugin-vue";
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
  electronPath: any;
}

const config: Config = {
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
    plugins: [vue()],
  },
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


Add 

```
 "dev": "node --experimental-specifier-resolution=node --loader ts-node/esm ./scripts/dev.ts"
```

 to the `scripts` in `package.json`.

`yarn run dev` to start the project. 

See <a href="https://xutaotaotao.github.io/electron-prokit/tutorials/create-vite-electron-service.html" target="_blank">Building an Electron Project Quickly with Vite</a> for details.

## API

The parameter of `createViteElectronService` is an object with the following properties:

| Property            |               Meaning                |   Type |                       Default Value |
| ------------------- | :----------------------------------: | -----: | ----------------------------------: |
| `renderConfigFile`  |  Renderer process Vite config file   | string |                                     |
| `preloadConfigFile` |   Preload script Vite config file    | string |                                     |
| `workConfigFile`    |   Worker process Vite config file    | string |                                     |
| `mainConfigFile`    |    Main process Vite config file     | string |                                     |
| `sharedOptions`     | Common options for each Vite service | object | `{mode: "dev",build:{watch: {},},}` |
| `electronPath`      |           Path to electron           | string |                                     |
