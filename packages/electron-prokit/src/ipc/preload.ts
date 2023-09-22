import type { IpcRendererEvent} from "electron";
import { useContextBridge, useIpcRenderer } from "../hooks";
const ipcRenderer = useIpcRenderer()
const contextBridge = useContextBridge()


type Callback = (event: IpcRendererEvent, args: any) => void


const renderMsgToMain = <T, U>(msg: T): Promise<U> => {
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

 const onRenderMsgToRender = (callback:Callback):void => {
  ipcRenderer.on("EPrenderMsgToRender", (event: IpcRendererEvent, args: any) => {
    callback(event, args);
  });
}

 function initExposeInMainWorld():void {
  contextBridge.exposeInMainWorld('electronProkit', {
    renderMsgToMain,
    onMsgFromMain,
    renderMsgToRender,
    onRenderMsgToRender
  })
}

export {
  renderMsgToMain,
  onMsgFromMain,
  renderMsgToRender,
  onRenderMsgToRender,
  initExposeInMainWorld
}