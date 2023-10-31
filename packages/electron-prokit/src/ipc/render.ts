import type { IpcRendererEvent} from "electron";

type Callback = (event: IpcRendererEvent, args: any) => void

export const renderMsgToMain = <T, U>(msg: T): Promise<U> => {
  return window.electronProkit.renderMsgToMain(msg)
}

export const onMsgFromMain = (callback:Callback):void => {
  return window.electronProkit.onMsgFromMain(callback)
}

export const offMsgFromMain = (callback:Callback):void => {
  return window.electronProkit.offMsgFromMain(callback)
}

export const renderMsgToRender = (windowName:string,msg:any):void => {
  window.electronProkit.renderMsgToRender(windowName,msg)
}

export const onRenderMsgToRender = (callback:Callback):void => {
  return window.electronProkit.onRenderMsgToRender(callback)
}