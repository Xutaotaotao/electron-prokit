import { ipcMain } from "electron";

export function recivedMsgFormRender(callBack:Function):void {
  ipcMain.on('sendMsg',(event: Electron.IpcMainEvent, args:any) => {
    callBack(event,args)
  })
  ipcMain.on('syncSendMsg',(event: Electron.IpcMainEvent, args:any) => {
    callBack(event,args)
  })
  ipcMain.handle('promiseSendMsg',(event: Electron.IpcMainEvent, args:any) => {
    callBack(event,args)
  })
}