# create-service

适用于 Vite 创建的项目，一次性为你创建好 Electron 需要的渲染进程、任务进程、主进程以及 Preload 脚本，可以一键启动 Electron 项目且支持热更新。

## 安装依赖

`yarn add @electron-prokit/create-service -D`

## 使用

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

在 `package.json` 中的 `scripts` 添加
```
 "dev": "node --experimental-specifier-resolution=node --loader ts-node/esm ./scripts/dev.ts"
```

`yarn run dev` 即可启动项目。

详细教程可参考[如何用 Vite 快速构建一个 Electron 的项目](/zh/tutorials/create-vite-electron-service)

## API

`createViteElectronService` 参数为一个对象，对象属性包含下面几个:

| 属性名          |             含义             |   类型 |                              默认值 |
| --------------- | :--------------------------: | -----: | ----------------------------------: |
| `render`        |      渲染进程 Vite 配置      | string |                                     |
| `preload`       |      preload Vite 配置       | string |                                     |
| `work`          |      任务进程 Vite 配置      | string |                                     |
| `main`          |       主进程 Vite 配置       | string |                                     |
| `sharedOptions` | 各个 Vite 服务的通用的配置项 | object | `{mode: "dev",build:{watch: {},},}` |
| `electronPath`  |        electron 路径         | string |                                     |
