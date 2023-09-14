/// <reference types="vite/client" />
export {};

interface WindowElectronProkit {
  renderMsgToMain(msg: unknown): Promise<void>; 
}
declare global {
  interface Window {
    electronProkit: WindowElectronProkit
  }
}