
export const renderMsgToMain = <T, U>(msg: T): Promise<U> => {
  return window.electronProkit.renderMsgToMain(msg)
}

export const onMsgFromMain = (callback:any):void => {
  return window.electronProkit.onMsgFromMain(callback)
}

export const renderMsgToRender = (windowName:string,msg:any):void => {
  window.electronProkit.renderMsgToRender(windowName,msg)
}

export const onRenderMsgToRender = (callback:any):void => {
  return window.electronProkit.onRenderMsgToRender(callback)
}