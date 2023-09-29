# Building an Electron Project Quickly with Vite and Vue3

## Create a Vite+Vue3 project

Use the official Vite guide to create a vite+react project.

`yarn create vite`

Select `Vue`,.

![alt Create](/tutorials/create-vite-electron-service-vue.png)

## Modify the project structure

Under the `src` directory, create `main`, `render`, `preload`, and `work` directories, then move all the original content under src to the render directory, and change the import of script in `index.html` to `<script type="module" src="/src/render/main.ts"></script>`


- `main` is the main process related code directory
- `render` is the renderer process related code directory
- `preload` is the preload script service code directory
- `work` is the worker process related code directory

This outlines the core engineering directories of an electron project.

Then we need to create an `index.ts` entry file under render, preload, and work respectively, to facilitate Vite to start these services later.

## Add Vite project configuration files

In this step we create a vite folder at the root. Then create the configuration files for the main, render, preload, and work services under this directory.

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
import vue from '@vitejs/plugin-vue'
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
  plugins: [vue()],
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

In the above configuration files, except `render.js` is a bit different, the other configuration files are basically the same, just different entry files.

## Write main process code

Install `electron` & `electron-prokit`

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

Create a scripts directory at the root, and add the dev.js file.

Install  `@electron-prokit/create-service`.

`yarn add @electron-prokit/create-service -D`

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

Add `"dev": "node ./scripts/dev.js"` to the scripts option in `package.json`, and add `"main": "dist/main/index.cjs"` entry in package.json.

## Start the project

After the above steps, you can start the Electron project with one click.

`yarn run dev`

![alt demo](/tutorials/create-vite-electron-service-vue-2.png)
