export {};
interface WindowElectronProkit {
  renderMsgToMain<T, U>(msg: T): Promise<U>;
  onMsgFormMain(callBack): void;
  onRenderMsgToRender(callBack): void;
}
declare global {
  interface Window {
    electronProkit: WindowElectronProkit
  }
}