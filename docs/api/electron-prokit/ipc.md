---
outline: deep
---
# ipc

进程间通信相关的 API 接口。

## 准备

在这里我们需要做一些IPC初始化工作。

### initIpc

初始化 IPC，如果需要使用相应的通信服务，需要初始化

- 主进程

```ts
import { initIpc } from "electron-prokit";
initIpc();
```

### initExposeInMainWorld

- preload 脚本

```ts
import { initExposeInMainWorld } from "electron-prokit";

initExposeInMainWorld();
```

## 渲染进程发送信息到主进程

### onMsgFromRender

- 主进程

```ts
import { onMsgFromRender } from "electron-prokit";
onMsgFromRender((_e: Electron.IpcMainEvent, args: unknown) => {
  return `Main have get data is ${args}`;
});
```
### renderMsgToMain
- 渲染进程

```tsx
import { Button } from "antd";

const Ipc = () => {
  const renderMsgToMain = (msg: string) => {
    window.electronProkit.renderMsgToMain(msg).then((result) => {
      console.log(result);
    });
  };
  return (
    <div>
      <Button onClick={() => renderMsgToMain("sendMsgToMain Hello")}>
        发送信息到主进程
      </Button>
    </div>
  );
};

export default Ipc;
```

## 主进程发送信息到渲染进程

### mainMsgToRender
- 主进程

```ts
import { mainMsgToRender } from "electron-prokit";
mainMsgToRender("main", "msg from main");
```
### onMsgFromMain
- 渲染进程

```ts
window.electronProkit.onMsgFromMain((_event: unknown, args: string) => {
  console.log(args);
});
```

## 不同渲染进程间发送信息

### renderMsgToRender
- 渲染进程

```tsx
const renderMsgToRender = (windowName: string, msg: string) => {
  window.electronProkit.renderMsgToRender(windowName, msg);
};

<Button type="primary" onClick={() => renderMsgToRender("work", "Hello Work")}>
  发送信息到work进程
</Button>;
```

### onRenderMsgToRender
- 另外一个渲染进程

```ts
import {onRenderMsgToRender} from 'electron-prokit'

onRenderMsgToRender((e,arg) => {
  console.log(e,arg)
})
```

:::warning 注意
这里的另外一个渲染进程是一个隐藏的渲染进程。如果你需要一个显示的渲染进程，可以像主渲染进程创建的模式去[创建一个主渲染进程窗口](/api/electron-prokit/window.html#createwindow)
:::

隐藏渲染进程创建方式如下：

```ts
const workWindow = createWindow("work", {
    show: false,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      preload: join(__dirname, "../work/index.cjs"), // 注意这里的preload
    },
  });

  workWindow.hide();

  if (import.meta.env.MODE === "dev") {
    workWindow.webContents.openDevTools();
  }

  workWindow.loadFile(resolve(__dirname, "../work/index.html"));
```