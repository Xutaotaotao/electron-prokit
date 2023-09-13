import { contextBridge, ipcRenderer } from "electron";

const sendMsg = (msg:any):void => {
  ipcRenderer.send('sendMsg',msg)
}

const syncSendMsg = (msg:any):void => {
  ipcRenderer.sendSync('syncSendMsg',msg)
}

const promiseSendMsg = (msg:any):void => {
  ipcRenderer.invoke('promiseSendMsg',msg)
}

export function creactDefaultExposeInMainWorld():void {
  contextBridge.exposeInMainWorld('electronProkit', {
    sendMsg,
    syncSendMsg,
    promiseSendMsg
  })
}