export {};
interface WindowElectronProkit {
  renderMsgToMain<T, U>(msg: T): Promise<U>;
  onMsgFromMain(callBack): void;
  onRenderMsgToRender(callBack): void;
}
declare global {
  interface Window {
    electronProkit: WindowElectronProkit
  }
}