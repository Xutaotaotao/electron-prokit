import { isMain, isPreload, isWork } from "../env";

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

export function useDbFile ():string {
  if (isMain) {
    const { join } = require('node:path');
    const {app} = require('electron')
    const defaultFile = join(app.getPath("appData"), "db.json");
    return defaultFile
  }
  return 'db.json'
}

export function useLowdb (file:string):any {
  if (isMain) {
    const { Low } = require("lowdb");
    const { JSONFile } = require("lowdb/node");
    const adapter = new JSONFile(file);
    const defaultData = {};
    const lowdb = new Low(adapter, defaultData);
    return lowdb
  }

}