import {nativeTheme} from 'electron'
import { initIpc,initUpadate,onMsgFromRender, sendMsgToRender } from "electron-prokit";
import { divide, mul,sum } from "./ffi";
import { testGetHttp } from "./http";

const option = {
  forceDevUpdateConfig:true,
  autoDownload:true,
  updateUrl: 'http://172.17.194.13:8090',
  updateDownloadedCallBack: () => {
    return sendMsgToRender('main','updateDownloaded')
  }
}

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
      return divide(100, 5);
    }
    if (args.key === 'changeTheme') {
      nativeTheme.themeSource = args.data
    }
    if (args.key === 'update') {
      console.log('update')
      initUpadate(option)
    }
    return `Main have get data is ${args}`;
  });
};

export default main;
