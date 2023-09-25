---
outline: deep
title: Window
description: electron-prokit window api
---

# Window

窗口相关的 API 接口。管理整个窗口的生命周期，从创建到销毁。

## 作用

提供窗口的创建、获取、销毁等操作。使得窗口的生命周期可以被统一管理。

## API 概览

| 函数名        | 使用环境 |                 描述 |
| ------------- | :------: | -------------------: |
| createWindow  |  主进程  |             创建窗口 |
| getWindow     |  主进程  |         获取窗口实例 |
| destroyWindow |  主进程  |             销毁窗口 |
| getAllWindows |  主进程  |         获取所有窗口 |
| hasWindow     |  主进程  | 是否有对应的窗口实例 |
| clearWindows  |  主进程  |       清除所有的窗口 |

## API 使用

### createWindow

创建窗口。

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

**:speech_balloon: 参数**

```ts
createWindow(
  name: string,
  options: Electron.BrowserWindowConstructorOptions
): Electron.CrossProcessExports.BrowserWindow
```

- name: 窗口名称，类型`string`，唯一标志，如果窗口名称重复就无法创建新的窗口
- options: 窗口选项，类型`Electron.BrowserWindowConstructorOptions`

### getWindow

获取窗口实例。

```ts
// 主进程
import { getWindow } from "electron-prokit";
const workWindow = getWindow('getWindow')
```
**:speech_balloon: 参数**
```ts
getWindow(name: string): Electron.CrossProcessExports.BrowserWindow
```

- name: 窗口名称，类型`string`

### destroyWindow

销毁窗口实例。

```ts
// 主进程
import { destroyWindow } from "electron-prokit";
destroyWindow('getWindow')
```

**:speech_balloon: 参数**
```ts
destroyWindow(name: string): void
```

- name: 窗口名称，类型`string`

### getAllWindows

获取所有窗口实例。

```ts
// 主进程
import { getAllWindows } from "electron-prokit";
getAllWindows()
```

**:speech_balloon: 参数**
```ts
getAllWindows(): Array<Electron.CrossProcessExports.BrowserWindow>
```

### hasWindow

是否有某个窗口。

```ts
// 主进程
import { hasWindow } from "electron-prokit";
const hasWorkWindow =  hasWindow('work')
```

**:speech_balloon: 参数**

```ts
hasWindow(name: string): boolean
```

- name: 窗口名称，类型`string`

### clearWindows

清除所有的窗口。

```ts
// 主进程
import { clearWindows } from "electron-prokit";
clearWindows()
```

**:speech_balloon: 参数**

```ts
clearWindows(): void
```
