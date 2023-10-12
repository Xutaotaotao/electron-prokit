import { useIpcMain } from "./hooks";
import { clearDb, initDb, readDb, writeDb } from "./db/main";
import { getWindow } from "./window";

const ipcMain = useIpcMain();

function initIpcMainDb(): void {
  ipcMain.handle(
    "EPinitDb",
    (event: Electron.IpcMainEvent, args: IpcDBArgs) => {
      if (args.fun === "initDb") {
        return initDb(args.file);
      }
      if (args.fun === "writeDb") {
        return writeDb(args.key, args.data);
      }
      if (args.fun === "readDb") {
        return readDb(args.key);
      }
      if (args.fun === "clearDb") {
        return clearDb();
      }
    }
  );
}

function initOnRenderMsgToRender(): void {
  ipcMain.on(
    "EPrenderMsgToRender",
    (event: Electron.IpcMainEvent, args: any) => {
      const windowInstance = getWindow(args.windowName);
      if (windowInstance) {
        windowInstance.webContents.send("EPrenderMsgToRender", args.msg);
      } else {
        throw new Error("not find windowInstance");
      }
    }
  );
}

export function initIpc(): void {
  initOnRenderMsgToRender();
  initIpcMainDb();
}
