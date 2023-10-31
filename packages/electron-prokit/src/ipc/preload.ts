import type { IpcRendererEvent } from "electron";
import { useIpcRenderer } from "../hooks";
const ipcRenderer = useIpcRenderer();


type Callback = (event: IpcRendererEvent, args: any) => void;

const renderMsgToMain = <T, U>(msg: T): Promise<U> => {
  return ipcRenderer.invoke("EPrenderMsgToMain", msg);
};

const onMsgFromMain = (callback: Callback): void => {
   ipcRenderer.on("EPmainMsgToRender", (event: IpcRendererEvent, args: any) => {
    callback(event, args);
  });
};

const offMsgFromMain = (callback: Callback): void => {
  ipcRenderer.removeListener("EPmainMsgToRender", callback);
};

const renderMsgToRender = (windowName: string, msg: any): void => {
  ipcRenderer.send("EPrenderMsgToRender", {
    windowName,
    msg,
  });
};

const onRenderMsgToRender = (callback: Callback): void => {
  ipcRenderer.on(
    "EPrenderMsgToRender",
    (event: IpcRendererEvent, args: any) => {
      callback(event, args);
    }
  );
};

export {
  renderMsgToMain,
  onMsgFromMain,
  offMsgFromMain,
  renderMsgToRender,
  onRenderMsgToRender,
};
