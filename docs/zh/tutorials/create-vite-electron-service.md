# 用 Vite 快速构建一个 Electron 项目

## 创建一个 Vite+React 的项目

用 Vite 官方的指引创建一个 vite+react 的项目。

`yarn create vite`

选择 React，选择 Typescript + SWC。

![alt 创建](/tutorials/create-vite-electron-service1.png)

## 修改项目结构

我们在`src`目录下创建`main`、`render`、`preload`、`work`四个目录，然后将 src 下原有的所有内容移动到`render`目录下，然后改变`index.html`中`script`的引入`<script type="module" src="/src/render/main.tsx"></script>`

![alt 创建](/tutorials/create-vite-electron-service2.png)

- `main` 是主进程相关的工程代码目录
- `render` 是渲染进程相关的工程代码目录
- `preload` 是预加载相关脚本服务的工程代码目录
- `work` 是任务进程相关的工程代码目录

这样就把一个 electron 的核心工程目录梳理划分出来了。

然后我们需要在`render`、`preload`、`work`下分别创建一个`index.ts`入口文件，方便后续用 Vite 去启动这些服务。

## 添加 Vite 工程配置文件

这一步我们在根目录下创建一个`vite`文件夹。然后把`main`、`render`、`preload`、`work`几个服务的配置文件创建在这个目录下。

- `main.js`

```javascript
import { builtinModules } from "module";
import { fileURLToPath } from "url";
import { cwd } from "node:process";
import path from "path";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const config = {
  root: cwd(),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "../dist/main"),
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "../src/main/index.ts"),
      formats: ["cjs"],
    },
    rollupOptions: {
      external: ["electron", ...builtinModules],
      output: {
        entryFileNames: "[name].cjs",
      },
    },
    emptyOutDir: true,
    brotliSize: false,
    chunkSizeWarningLimit: 2048,
  },
};
export default config;
```

- `render.js`

```javascript
import react from "@vitejs/plugin-react-swc";
import { builtinModules } from "module";
import { fileURLToPath } from "url";
import { cwd } from "node:process";
import path from "path";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const config = {
  root: cwd(),
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "../dist/render"),
    minify: true,
    assetsInlineLimit: 1048576,
    emptyOutDir: true,
    brotliSize: false,
    chunkSizeWarningLimit: 2048,
    rollupOptions: {
      external: [...builtinModules],
    },
  },
  plugins: [react()],
};
export default config;
```

- `preload.js`

```javascript
import { builtinModules } from "module";
import { fileURLToPath } from "url";
import { cwd } from "node:process";
import path from "path";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const config = {
  root: cwd(),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "../dist/preload"),
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "../src/preload/index.ts"),
      formats: ["cjs"],
    },
    rollupOptions: {
      external: ["electron", ...builtinModules],
      output: {
        entryFileNames: "[name].cjs",
      },
    },
    emptyOutDir: true,
    brotliSize: false,
    chunkSizeWarningLimit: 2048,
  },
};
export default config;
```

- `work.js`

```javascript
import { builtinModules } from "module";
import { fileURLToPath } from "url";
import path from "path";
import { cwd } from "node:process";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const config = {
  root: path.resolve(__dirname, "../src/work"),
  envDir: cwd(),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "../dist/work"),
    assetsDir: ".",
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "../src/work/index.ts"),
      formats: ["cjs"],
    },
    rollupOptions: {
      external: ["electron", ...builtinModules],
      output: {
        entryFileNames: "[name].cjs",
      },
    },
    emptyOutDir: true,
    brotliSize: false,
    chunkSizeWarningLimit: 2048,
  },
};
export default config;
```

在上面的配置文件中，除了`render.js`有点不一样，其他几个配置文件基本一样，入口文件有区别。

## 主进程代码编写

安装`electron-prokit`

`yarn add electron-prokit -D`

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

## 集成自定义项目启动脚本

有了 Vite 配置文件之后，我们就可以自定义开发脚本来启动本地的 electron 项目了。

在根目录下创建`scripts`目录，添加`dev.js`文件。

安装`electron`和`@electron-prokit/create-service`

`yarn add electron @electron-prokit/create-service -D`

-`dev.js`

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

在 `package.json` 中的`scripts`选项添加 `"dev": "node ./scripts/dev.js"`,`package.json` 中添加入口"main": "dist/main/index.cjs"。

## 启动项目

经过上面的步骤，就可以一键启动 Electron 项目了。

`yarn run dev`

![alt demo](/tutorials/create-vite-electron-service3.png)
