import type { LowSync } from "lowdb/lib";
import { isMain, isPreload, isWork,  } from "../env";


export function useBrowserWindow(
  options: Electron.BrowserWindowConstructorOptions
): Electron.BrowserWindow | undefined {
  if (isMain) {
    const { BrowserWindow } = require("electron");
    return new BrowserWindow(options);
  }
  return undefined; 
}

export function useIpcMain(): Electron.IpcMain | undefined {
  if (isMain) {
    return require("electron").ipcMain;
  }
  return undefined;
}

export function useIpcRenderer():  Electron.IpcRenderer | undefined {
  if (isPreload || isWork) {
    return require("electron").ipcRenderer;
  }
  return undefined; 
}

export function useContextBridge(): Electron.ContextBridge | undefined {
  if (isPreload || isWork) {
    return require("electron").contextBridge;
  }
  return undefined; 
}

export function useKoffi ():any {
  if (isMain) {
    return require("koffi")
  }
}

export function useDbFile ():string {
  if (isMain) {
    const { join } = require('path');
    const {app} = require('electron')
    const defaultFile = join(app.getPath("userData"), "db.json");
    return defaultFile
  }
  return 'db.json'
}

export async function useLowdb (file:string):Promise<LowSync<unknown>> {
  if (isMain) {
    const { LowSync, JSONFileSync } = await import("lowdb");
    const adapter = new JSONFileSync(file);
    const lowdb = new LowSync(adapter);
    return lowdb
  }
  return Promise.resolve(undefined as unknown as LowSync<unknown>)
}