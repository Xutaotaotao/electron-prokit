import { IpcRendererEvent, contextBridge, ipcRenderer } from "electron";

type Callback = (event: IpcRendererEvent, ...args: any[]) => void


const renderMsgToMain = (msg:any) => {
  return ipcRenderer.invoke('renderMsgToMain',msg)
}

const onMsgFormMain = (callback:Callback) => {
  ipcRenderer.on("mainMsgToRender", (event: IpcRendererEvent, args: any) => {
    callback(event, args);
  });
}

export function creactDefaultExposeInMainWorld():void {
  contextBridge.exposeInMainWorld('electronProkit', {
    renderMsgToMain,
    onMsgFormMain,
  })
}