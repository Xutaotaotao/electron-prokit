---
outline: deep
---

# ipc

## 介绍

进程间通信相关的 API 接口。主要包括渲染进程发送信息到主进程、主进程发送信息到渲染进程、不同渲染进程间发送信息几种消息通信模式。

::: danger 重要！！！
为了让很多 API 可以在主进程、渲染进程、preload 预加载脚本中无差别的使用，框架抹平了相应的很多差异，所以如果要顺利的使用框架里面的 API，IPC 初始化非常重要。
:::

## 准备

在这里我们需要做一些 IPC 初始化工作。如果不做下面两步，无法顺利的使用相应的 API。

### 初始化

初始化 IPC，如果需要使用相应的通信服务，需要初始化。

- 主进程

```ts
import { initIpc } from "electron-prokit";
initIpc();
```

### 暴露注册函数

主要是需要在`contextBridge`注册对应的方法，不然无法在渲染进程使用相应的回调方法。

- preload 脚本

```ts
import { initExposeInMainWorld } from "electron-prokit";

initExposeInMainWorld();
```

## API 列表

### initIpc

初始化 IPC。

#### 支持环境

- 主进程

#### 使用

```ts
import { initIpc } from "electron-prokit";
initIpc();
```


### onMsgFromRender

主进程监听渲染进程发过来的消息。

#### 支持环境
- 主进程

#### 使用

```ts
import { onMsgFromRender } from "electron-prokit";
onMsgFromRender((event,args) => {
  console.log(event,args)
});
```
#### 参数
- callBack: 回调方法
```ts
type Callback = (event: Electron.IpcMainEvent, args: any) => void;
```

### sendMsgToRender

主进程发送消息给渲染进程。

#### 支持环境
- 主进程

#### 使用

```ts
import { sendMsgToRender } from "electron-prokit";
sendMsgToRender('test','hello test');
```

#### 参数
- windowName: 发送消息的窗口名， `string`
- msg:消息内容， `any`

### initExposeInMainWorld

暴露注册函数。

#### 支持环境
- preload

### onMsgFromMain
监听主进程传递过来的消息。

####  支持环境
- 渲染进程
- preload
### onMsgFormOtherRender

监听其他渲染进程传递过来的消息。

####  支持环境
- 渲染进程
- preload

### sendMsgToMain

发送消息给主进程。

####  支持环境
- 渲染进程
- preload

### sendMsgToOtherRender

发送消息给目标渲染进程。

####  支持环境
- 渲染进程
- preload

