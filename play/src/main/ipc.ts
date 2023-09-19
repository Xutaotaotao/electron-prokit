import {
  initIpc,
  onMsgFromRender
} from "electron-prokit";

const main = () => {
  initIpc();
  onMsgFromRender((_e: Electron.IpcMainEvent, args: unknown) => {
    return `Main have get data is ${args}`;
  });
}

export default main