import { initIpc, onMsgFromRender } from "electron-prokit";
import { sum, mul,div } from "./ffi";
import { testGetHttp } from "./http";

const main = () => {
  initIpc();
  onMsgFromRender(async (_e: Electron.IpcMainEvent, args: Msg) => {
    if (args.key === 'testGetHttp') {
      const data = await testGetHttp()
      return data
    }
    if (args.key === 'nativeSum') {
      return sum(100, 22);
    }
    if (args.key === 'nativeMul') {
      return mul(100, 22);
    }
    if (args.key === 'nativeDiv') {
      return div(100, 2);
    }
    return `Main have get data is ${args}`;
  });
};

export default main;
