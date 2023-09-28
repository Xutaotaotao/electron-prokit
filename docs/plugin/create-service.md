# create-service

Suitable for projects created with Vite. It creates the renderer, worker, main process and preload scripts required by Electron for you, allowing you to start an Electron project with hot updates with one click.

## Install dependencies

`yarn add @electron-prokit/create-service -D`

## Usage

```javascript
// dev.js
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

Add `"dev": "node ./scripts/dev.js"` to the scripts in `package.json`, `yarn run dev` to start the project. See <a href="https://xutaotaotao.github.io/electron-prokit/tutorials/create-vite-electron-service.html" target="_blank">Building an Electron Project Quickly with Vite</a> for details.

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
