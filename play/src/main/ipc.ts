import { initIpc, onMsgFromRender } from "electron-prokit";
import { sum, mul,div } from "./ffi";

const main = () => {
  initIpc();
  onMsgFromRender((_e: Electron.IpcMainEvent, args: any) => {
    switch (args.key) {
      case "nativeSum":
        return sum(100, 22);
      case "nativeMul":
        return mul(100, 22);
      case "nativeDiv":
        return div(100, 2);
      default:
        break;
    }
    return `Main have get data is ${args}`;
  });
};

export default main;
