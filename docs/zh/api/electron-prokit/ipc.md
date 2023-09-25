---
outline: deep
title: Ipc
description: electron-prokit ipc api
---

# Ipc

IPC(Inter-Process Communication)是 Electron 的一个重要特性,它允许主进程与渲染进程之间,以及不同渲染进程之间的消息通信。框架在这个模块做了一些 IPC 相关的封装，让使用者更加方便使用相关的通信方法。

## 作用

IPC 的主要作用是在主进程和渲染进程之间传递数据和消息,实现不同进程间的通信。常见的使用场景包括:

- 主进程需要控制渲染进程
- 渲染进程需要调用主进程的方法
- 不同页面的渲染进程间需要通信

## 初始化

为了正常使用 IPC 模块相关的 API,需要做一些初始化工作。

::: danger 重要！！！
为了让尽可能多的 API 可以在主进程、渲染进程、preload 预加载脚本中无差别的使用，框架抹平了很多差异，所以如果要顺利的使用框架里面的 API，IPC 初始化非常重要。
:::

**主进程**

```ts
// 初始化
import { initIpc } from "electron-prokit";
initIpc();
```

**preload 脚本**

```ts
// 暴露注册函数
import { initExposeInMainWorld } from "electron-prokit";
initExposeInMainWorld();
```

## API 概览

| 函数名                |     使用环境     |                   描述 |
| --------------------- | :--------------: | ---------------------: |
| initIpc               |      主进程      |             初始化 IPC |
| onMsgFromRender       |      主进程      |       接收渲染进程消息 |
| sendMsgToRender       |      主进程      |     发送消息给渲染进程 |
| initExposeInMainWorld |     Preload      |           暴露注册函数 |
| onMsgFromMain         | 渲染进程/Preload |         接收主进程消息 |
| sendMsgToMain         | 渲染进程/Preload |       发送消息给主进程 |
| onMsgFromOtherRender  | 渲染进程/Preload |   接收其他渲染进程消息 |
| sendMsgToOtherRender  | 渲染进程/Preload | 发送消息给其他渲染进程 |

## API 使用

### initIpc

初始化 IPC,需要在主进程中调用。

```ts
// 主进程
import { initIpc } from "electron-prokit";
initIpc();
```

### onMsgFromRender

在主进程中监听渲染进程发送来的消息。

```ts
// 主进程
import { onMsgFromRender } from "electron-prokit";
onMsgFromRender((event, args) => {
  console.log(event, args);
});
```

**:speech_balloon: 参数**

```ts
onMsgFromRender(callback: (event: Electron.IpcMainEvent, args: any) => void)
```

- callback:回调函数,包含两个参数

  - event: ipcMain 事件对象
  - args: 渲染进程发送来的参数

### sendMsgToRender

主进程发送消息给渲染进程。

```ts
// 主进程
import { sendMsgToRender } from "electron-prokit";
sendMsgToRender("mainWin", "Hello");
```

**:speech_balloon: 参数**

```ts
sendMsgToRender(windowName: string, msg: any)
```

- windowName: 发送消息的目标窗口名称
- msg: 发送的消息内容

### initExposeInMainWorld

在 Preload 脚本中暴露注册函数。

```ts
// Preload 脚本
import { initExposeInMainWorld } from "electron-prokit";
initExposeInMainWorld();
```

### onMsgFromMain

监听主进程发送过来的消息。

```ts
// 渲染进程或 Preload 脚本
import { onMsgFromMain } from "electron-prokit";
onMsgFromMain((event, args) => {
  console.log(event, args);
});
```

**:speech_balloon: 参数**

```ts
onMsgFromMain(callback: (event: Electron.IpcRendererEvent, args: any) => void)
```

- callback:回调函数,包含两个参数
  - event: ipcRenderer 事件对象
  - args: 主进程发送来的参数

### sendMsgToMain

发送消息给主进程。

```ts
// 渲染进程或 Preload 脚本
import { sendMsgToMain } from "electron-prokit";
sendMsgToMain("Hello main").then((res) => {
  console.log(res);
});
```

**:speech_balloon: 参数**

```ts
sendMsgToMain(msg: any)
```

- msg: 发送的消息内容

### onMsgFromOtherRender

监听其他渲染进程发送的消息。

```ts
// 渲染进程或 Preload 脚本
import { onMsgFromOtherRender } from "electron-prokit";
onMsgFromMain((event, args) => {
  console.log(event, args);
});
```

**:speech_balloon: 参数**

```ts
onMsgFromOtherRender(callback: (event: Electron.IpcRendererEvent, args: any) => void)
```

- callback:回调函数,包含两个参数
  - event: ipcRenderer 事件对象
  - args: 主进程发送来的参数

### sendMsgToOtherRender

发送消息给其他渲染进程。

```ts
// 渲染进程或 Preload 脚本
import { sendMsgToOtherRender } from "electron-prokit";
sendMsgToOtherRender("work", "Hello work");
```
**:speech_balloon: 参数**

```ts
sendMsgToOtherRender(windowName:string,msg:any)
```

- windowName: 发送消息的目标窗口名称
- msg: 发送的消息内容

## 示例

[点击查看示例源码](https://github.com/Xutaotaotao/electron-prokit/blob/main/play/src/render/pages/ipc.tsx)

![alt ipc](/api/ipc-demo.png)