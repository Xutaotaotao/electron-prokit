import type { IpcRendererEvent} from "electron";
import { contextBridge, ipcRenderer } from "electron";

type Callback = (event: IpcRendererEvent, args: any) => void


const renderMsgToMain = (msg:any) => {
  return ipcRenderer.invoke('EPrenderMsgToMain',msg)
}

const onMsgFromMain = (callback:Callback):void => {
  ipcRenderer.on("EPmainMsgToRender", (event: IpcRendererEvent, args: any) => {
    callback(event, args);
  });
}

const renderMsgToRender = (windowName:string,msg:any):void => {
  ipcRenderer.send('EPrenderMsgToRender',{
    windowName,
    msg
  })
}

export const onRenderMsgToRender = (callback:Callback):void => {
  ipcRenderer.on("EPrenderMsgToRender", (event: IpcRendererEvent, args: any) => {
    callback(event, args);
  });
}

export function initExposeInMainWorld():void {
  contextBridge.exposeInMainWorld('electronProkit', {
    renderMsgToMain,
    onMsgFromMain,
    renderMsgToRender,
    onRenderMsgToRender
  })
}