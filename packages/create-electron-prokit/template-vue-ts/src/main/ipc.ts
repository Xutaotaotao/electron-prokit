import {initIpc,onMsgFromRender } from "electron-prokit";
import { shell } from 'electron';

const main = ():void => {
  initIpc();
  onMsgFromRender(async (_e: Electron.IpcMainEvent, args: Msg) => {
    if (args.key === 'openUrl') {
      shell.openExternal(args.data.url)
      return true
    }
    return `Main have get data is ${args}`;
  });
};

export default main;
