---
outline: deep
title: Update
description: electron-prokit Update api
---

# Update

用于软件的检测更新。


## initUpadate

初始化更新操作，主进程使用。

```ts
import { initUpadate } from "electron-prokit";
const option = {
  forceDevUpdateConfig:true,
  autoDownload:true,
  updateUrl: 'http://172.17.194.13:8090', // can use live-server to mock the file server/https://www.npmjs.com/package/live-server
  updateDownloadedCallBack: () => {
    return sendMsgToRender('main','updateDownloaded')
  }
}
initUpadate(option)
```

**:speech_balloon: 参数**

```ts
interface UpadateOptions {
  log?:boolean | Logger // 是否打印或者打印的方法
  forceDevUpdateConfig?: boolean; // 是否dev环境强制升级
  autoDownload?: boolean; // 是否自动下载
  updateUrl: string; // 更新资源链接
  updateDownloadedCallBack: () => void; // 更新下载后的成功回调
}
```

## intsallUpdateApp

安装下载完成后的app。可配合`updateDownloadedCallBack`使用。

```ts
import { intsallUpdateApp } from "electron-prokit";
intsallUpdateApp()
```

