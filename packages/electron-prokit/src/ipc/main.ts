import { ipcMain } from "electron";
import { getWindow } from "../window"

type Callback = (event: Electron.IpcMainEvent, args: any) => void

export function onMsgFormRender(callBack:Callback):void {
  ipcMain.handle('renderMsgToMain',(event: Electron.IpcMainEvent, args:any) => {
    return callBack(event,args)
  })
}

export function mainMsgToRender(name:string,msg:unknown):void {
  const windowInstance = getWindow(name)
  if (windowInstance) {
    windowInstance.webContents.send('mainMsgToRender',msg)
  } else {
    throw new Error('not find windowInstance')
  }
}