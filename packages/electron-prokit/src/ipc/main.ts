import { ipcMain } from "electron";

export function onMsgFormRender(callBack:Function):void {
  ipcMain.handle('renderMsgToMain',(event: Electron.IpcMainEvent, args:any) => {
    return callBack(event,args)
  })
}