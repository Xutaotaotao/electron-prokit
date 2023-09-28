import { initDb, initIpc,onMsgFromRender,readDb,writeDb } from "electron-prokit";
import { div, mul,sum } from "./ffi";
import { testGetHttp } from "./http";

const main = ():void => {
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
    if (args.key === 'initDb') {
      const initDbResult = await initDb()
      return initDbResult
    }
    if (args.key === 'writeDb') {
      const initDbResult = await writeDb(args.data.key,args.data.value)
      return initDbResult
    }
    if (args.key === 'readDb') {
      const initDbResult = await readDb(args.data.key)
      return initDbResult
    }
    return `Main have get data is ${args}`;
  });
};

export default main;
