/// <reference types="vite/client" />
export {};
1
interface WindowElectronProkit {
  renderMsgToMain<T, U>(msg: T): Promise<U>;
  onMsgFormMain(callBack): void 
}
declare global {
  interface Window {
    electronProkit: WindowElectronProkit
  }
}