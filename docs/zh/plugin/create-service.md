# create-service

适用于 Vite 创建的项目，一次性为你创建好 Electron 需要的渲染进程、任务进程、主进程以及 Preload 脚本，可以一键启动 Electron 项目且支持热更新。

## 安装依赖
`yarn add @electron-prokit/create-service -D`

## 使用
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

利用上面的脚本在 package.json 中的 scripts 添加`"dev": "node ./scripts/dev.js"`,`npm run dev` 即可启动项目。详细教程可参考[如何用 Vite 快速构建一个 Electron 的项目](/zh/tutorials/create-vite-electron-service)

## API

`createViteElectronService` 参数为一个对象，对象属性包含下面几个:

| 属性名              |             含义             |   类型 |                              默认值 |
| ------------------- | :--------------------------: | -----: | ----------------------------------: |
| `renderConfigFile`  |    渲染进程 Vite 配置文件    | string |                                     |
| `preloadConfigFile` |    preload Vite 配置文件     | string |                                     |
| `workConfigFile`    |    任务进程 Vite 配置文件    | string |                                     |
| `mainConfigFile`    |     主进程 Vite 配置文件     | string |                                     |
| `sharedOptions`     | 各个 Vite 服务的通用的配置项 | object | `{mode: "dev",build:{watch: {},},}` |
| `electronPath`      |        electron 路径         | string |                                     |
