# window

窗口相关的API接口

## createWindow

创建窗口。

参数：
- name: 窗口名称，类型`string`，唯一标志，如果窗口名称重复就无法创建新的窗口
- options: 窗口选项，类型`Electron.BrowserWindowConstructorOptions`

例子：
```ts
import { join,resolve } from "path";
import {
  app,
} from "electron";
import {createWindow} from 'electron-prokit';

const initWindowsAction = () => {
  const mainWindow = createWindow('main',{
    width: 960,
    height: 720,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      webSecurity: false,
      preload: join(__dirname, "../preload/index.cjs"),
    },
  })

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
}


app.whenReady().then(() => {
  initWindowsAction()
})

```
## getWindow
获取窗口实例。

参数：
- name: 窗口名称，类型`string`

## destroyWindow
销毁窗口实例。

参数：
- name: 窗口名称，类型`string`

## getAllWindows
获取所有窗口实例。

## hasWindow
是否有某个窗口。

参数：
- name: 窗口名称，类型`string`

## clearWindows
是否有某个窗口。

参数：
- name: 窗口名称，类型`string`