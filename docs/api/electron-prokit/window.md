---
outline: deep
title: Window
description: electron-prokit window api
---

# Window

API interfaces related to windows. It manages the entire lifecycle of windows, from creation to destruction.

## Purpose

It provides operations for creating, retrieving, and destroying windows. This allows for unified management of window lifecycles.

## API Overview

| Function Name        | Usage Context |                 Description |
| ------------- | :------: | -------------------: |
| createWindow  |  Main  |             Create a window |
| getWindow     |  Main  |         Get a window instance |
| destroyWindow |  Main  |             Destroy a window |
| getAllWindows |  Main  |         Get all windows |
| hasWindow     |  Main  | Check if a window instance exists |
| clearWindows  |  Main  |       Clear all windows |

## API Usage

### createWindow

Create a window.

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

**:speech_balloon: Parameters**

```ts
createWindow(
  name: string,
  options: Electron.BrowserWindowConstructorOptions
): Electron.CrossProcessExports.BrowserWindow
```

- name: Window name, type `string`, a unique identifier. You cannot create a new window if the window name is duplicated.
- options: Window options, type `Electron.BrowserWindowConstructorOptions`

### getWindow

Get a window instance.

```ts
// Main Process
import { getWindow } from "electron-prokit";
const workWindow = getWindow('getWindow')
```
**:speech_balloon: Parameters**
```ts
getWindow(name: string): Electron.CrossProcessExports.BrowserWindow
```

- name: Window name, type `string`

### destroyWindow

Destroy a window instance.

```ts
// Main Process
import { destroyWindow } from "electron-prokit";
destroyWindow('getWindow')
```

**:speech_balloon: Parameters**
```ts
destroyWindow(name: string): void
```

- name: Window name, type `string`

### getAllWindows

Get all windows.

```ts
// Main Process
import { getAllWindows } from "electron-prokit";
getAllWindows()
```

**:speech_balloon: Parameters**
```ts
getAllWindows(): Array<Electron.CrossProcessExports.BrowserWindow>
```

### hasWindow

Check if a window exists.

```ts
// Main Process
import { hasWindow } from "electron-prokit";
const hasWorkWindow =  hasWindow('work')
```

**:speech_balloon: Parameters**

```ts
hasWindow(name: string): boolean
```

- name: Window name, type`string`

### clearWindows

Clear all windows.

```ts
// Main Process
import { clearWindows } from "electron-prokit";
clearWindows()
```

**:speech_balloon: Parameters**

```ts
clearWindows(): void
```
