export {};
interface WindowElectronProkit {
  renderMsgToMain<T, U>(msg: T): Promise<U>;
  onMsgFromMain(callBack): void;
  renderMsgToRender(windowName:string,msg:any):void;
  onRenderMsgToRender(callBack): void;
  
  initDb(file:string):Promise<boolean>;
  writeDb(key: string, data: any):Promise<void>;
  readDb(key: string):Promise<any>;
  clearDb():void;
}
declare global {
  interface Window {
    electronProkit: WindowElectronProkit
  }
}