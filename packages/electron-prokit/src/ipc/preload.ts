import { contextBridge, ipcRenderer } from "electron";

const renderMsgToMain = (msg:any) => {
  return ipcRenderer.invoke('renderMsgToMain',msg)
}

export function creactDefaultExposeInMainWorld():void {
  contextBridge.exposeInMainWorld('electronProkit', {
    renderMsgToMain
  })
}