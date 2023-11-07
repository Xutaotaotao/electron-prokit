---
outline: deep
title: Update
description: electron-prokit Update api
---

# Update

Used for software detection updates.


## initUpadate

Initialize the update operation, the main process is used.

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

**:speech_balloon: Parameters**

```ts
interface UpadateOptions {
  log?:boolean | Logger // Whether to print or print
  forceDevUpdateConfig?: boolean; // Whether the DEV environment is forced to upgrade
  autoDownload?: boolean; // Whether to download automatically
  updateUrl: string; // Update resource link
  updateDownloadedCallBack: () => void; // Update download successfully callBack
}
```

## intsallUpdateApp

Install the download app.It can be used with `updatedownloadedCallback`.

```ts
import { intsallUpdateApp } from "electron-prokit";
intsallUpdateApp()
```

