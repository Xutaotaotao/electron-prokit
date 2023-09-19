const isMain:boolean = import.meta.env.VITE_CURRENT_RUN_MODE === "main";
const isRender:boolean = import.meta.env.VITE_CURRENT_RUN_MODE === "render";
const isPreload:boolean  = import.meta.env.VITE_CURRENT_RUN_MODE === "preload";
const isWork: boolean = import.meta.env.VITE_CURRENT_RUN_MODE === "work";


export function useBrowserWindow(
  options: Electron.BrowserWindowConstructorOptions
): Electron.BrowserWindow | undefined {
  if (isMain) {
    const { BrowserWindow } = require("electron");
    return new BrowserWindow(options);
  }
}

export function useIpcMain(): Electron.IpcMain | undefined {
  if (isMain) {
    return require("electron").ipcMain;
  }
}

export function useIpcRenderer():  Electron.IpcRenderer | undefined {
  if (isPreload || isWork) {
    return require("electron").ipcRenderer;
  }
}

export function useContextBridge(): Electron.ContextBridge | undefined {
  if (isPreload || isWork) {
    return require("electron").contextBridge;
  }
}

export function useKoffi ():any {
  if (isMain) {
    return require("koffi")
  }
}
