---
outline: deep
title: Ipc
description: electron-prokit ipc api
---

# Ipc

IPC (Inter-Process Communication) is an essential feature of Electron. It allows message communication between the main process and renderer processes, as well as between different renderer processes. The framework provides some encapsulation related to IPC in this module, making it easier for users to use communication methods.

## Purpose

The main purpose of IPC is to transmit data and messages between the main process and renderer processes, facilitating communication between different processes. Common use cases include:

- The main process needs to control renderer processes.
- Renderer processes need to call methods in the main process.
- Communication is required between renderer processes on different pages.

## Initialization

To use the IPC module's related APIs correctly, some initialization is required.

::: danger Important！！！
To ensure that as many APIs as possible can be used without differences in the main process, renderer processes, and preload scripts, the framework has flattened many differences. So, initializing IPC is essential for the smooth use of the framework's APIs.
:::

**Main Process**

```ts
// Initialization
import { initIpc } from "electron-prokit";
initIpc();
```

**Preload Script**

```ts
// Expose registration function
import { initExposeInMainWorld } from "electron-prokit";
initExposeInMainWorld();
```

## API Overview

| Function Name                |     Usage Context     |                   Description |
| --------------------- | :--------------: | ---------------------: |
| initIpc               |      Main      |             Initialize IPC |
| onMsgFromRender       |      Main      |       Receive messages from renderer processes |
| sendMsgToRender       |      Main      |     Send messages to renderer processes |
| initExposeInMainWorld |     Preload      |           Expose registration function |
| onMsgFromMain         | Renderer/Preload |         Receive messages from the main process |
| sendMsgToMain         | Renderer/Preload |       Send messages to the main process |
| onMsgFromOtherRender  | Renderer/Preload |   Receive messages from other renderer processes |
| sendMsgToOtherRender  | Renderer/Preload | Send messages to other renderer processes |

## API Usage

### initIpc

Initialize IPC, and it needs to be called in the main process.

```ts
// Main Process
import { initIpc } from "electron-prokit";
initIpc();
```

### onMsgFromRender

Listen to messages sent by renderer processes in the main process.

```ts
// Main Process
import { onMsgFromRender } from "electron-prokit";
onMsgFromRender((event, args) => {
  console.log(event, args);
});
```

**:speech_balloon: Parameters**

```ts
onMsgFromRender(callback: (event: Electron.IpcMainEvent, args: any) => void)
```

- callback:A callback function that includes two parameters

  - event: ipcMain event object
  - args: Parameters sent by the renderer process

### sendMsgToRender

The main process sends messages to renderer processes.

```ts
// Main Process
import { sendMsgToRender } from "electron-prokit";
sendMsgToRender("mainWin", "Hello");
```

**:speech_balloon: Parameters**

```ts
sendMsgToRender(windowName: string, msg: any)
```

- windowName: The name of the target window for sending the message
- msg: The content of the message to be sent

### initExposeInMainWorld

Expose registration functions in the Preload script.

```ts
// Preload 
import { initExposeInMainWorld } from "electron-prokit";
initExposeInMainWorld();
```

### onMsgFromMain

Listen to messages sent by the main process.。

```ts
// Render or Preload 
import { onMsgFromMain } from "electron-prokit";
onMsgFromMain((event, args) => {
  console.log(event, args);
});
```

**:speech_balloon: Parameters**

```ts
onMsgFromMain(callback: (event: Electron.IpcRendererEvent, args: any) => void)
```

- callback:A callback function that includes two parameters
  - event: ipcRenderer event object
  - args: Parameters sent by the main process

### sendMsgToMain

Send messages to the main process.

```ts
// Render or Preload 
import { sendMsgToMain } from "electron-prokit";
sendMsgToMain("Hello main").then((res) => {
  console.log(res);
});
```

**:speech_balloon: Parameters**

```ts
sendMsgToMain(msg: any)
```

- msg: The content of the message to be sent.

### onMsgFromOtherRender

Listen to messages sent by other renderer processes.

```ts
// Render or Preload 
import { onMsgFromOtherRender } from "electron-prokit";
onMsgFromMain((event, args) => {
  console.log(event, args);
});
```

**:speech_balloon: Parameters**

```ts
onMsgFromOtherRender(callback: (event: Electron.IpcRendererEvent, args: any) => void)
```

- callback:A callback function that includes two parameters
  - event: ipcRenderer event object
  - args: Parameters sent by the main process

### sendMsgToOtherRender

Send messages to other renderer processes.

```ts
// Render or Preload 
import { sendMsgToOtherRender } from "electron-prokit";
sendMsgToOtherRender("work", "Hello work");
```
**:speech_balloon: Parameters**

```ts
sendMsgToOtherRender(windowName:string,msg:any)
```

- windowName: The name of the target window for sending the message
- msg: The content of the message to be sent

## Example

[Click to view example source code](https://github.com/Xutaotaotao/electron-prokit/blob/main/play/src/render/pages/ipc.tsx)
