import { ipcMain } from "electron";
import { getWindow } from "../window"

type Callback = (event: Electron.IpcMainEvent, args: any) => void

export function onMsgFormRender(callBack:Callback):void {
  ipcMain.handle('EPrenderMsgToMain',(event: Electron.IpcMainEvent, args:any) => {
    return callBack(event,args)
  })
}

export function mainMsgToRender(name:string,msg:unknown):void {
  const windowInstance = getWindow(name)
  if (windowInstance) {
    windowInstance.webContents.send('EPmainMsgToRender',msg)
  } else {
    throw new Error('not find windowInstance')
  }
}

export function initOnRenderMsgToRender ():void {
  ipcMain.on('EPrenderMsgToRender',(event:Electron.IpcMainEvent,args:any) => {
    const windowInstance = getWindow(args.windowName)
    if (windowInstance) {
      windowInstance.webContents.send('EPrenderMsgToRender',args.msg)
    } else {
      throw new Error('not find windowInstance')
    }
 })
}

export function initIpc () {
  initOnRenderMsgToRender()
}