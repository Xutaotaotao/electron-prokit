/// <reference types="vite/client" />
export {};

interface WindowElectronProkit {
  renderMsgToMain<T, U>(msg: T): Promise<U>;
  onMsgFromMain(callBack): void;
  onRenderMsgToRender(callBack): void;
  renderMsgToRender(windowName:string,msg:unknown):void
}
declare global {
  interface Window {
    electronProkit: WindowElectronProkit
  }
}