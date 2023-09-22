---
outline: deep
---
# IPC

API Interfaces for Inter-Process Communication (IPC). This includes various messaging modes for communication, such as sending messages from the render process to the main process, sending messages from the main process to render processes, and intercommunication between different render processes.

## Preparation

We need to perform some IPC initialization tasks here.

### initIpc

Initialize IPC. If you need to use the corresponding communication service, it needs to be initialized.

- Main Process

```ts
import { initIpc } from "electron-prokit";
initIpc();
```
### initExposeInMainWorld

This is mainly about registering corresponding methods in contextBridge. Otherwise, you won't be able to use the respective callback methods in the render process.

- Preload Script
```ts
import { initExposeInMainWorld } from "electron-prokit";
initExposeInMainWorld();
```
## Sending Messages from Render Process to Main Process

### onMsgFromRender

- Main Process

```ts
import { onMsgFromRender } from "electron-prokit";
onMsgFromRender((_e: Electron.IpcMainEvent, args: unknown) => {
  return `Main has received data: ${args}`;
});
```

### renderMsgToMain
- Render Process
```tsx
import { Button } from "antd";
import { renderMsgToMain } from "electron-prokit";

const Ipc = () => {
  const renderMsgToMainHandle = (msg: string) => {
    renderMsgToMain(msg).then((result) => {
      console.log(result);
    });
  };
  return (
    <div>
      <Button onClick={() => renderMsgToMainHandle("sendMsgToMain Hello")}>
        Send Message to Main Process
      </Button>
    </div>
  );
};

export default Ipc;

```

## Sending Messages from Main Process to Render Process

### mainMsgToRender

```ts
import { mainMsgToRender } from "electron-prokit";
mainMsgToRender("main", "Message from Main Process");
```

### onMsgFromMain

- Render Process
```ts
import {onMsgFromMain} from 'electron-prokit'

onMsgFromMain((_event: unknown, args: string) => {
  console.log(args);
});
```

## Sending Messages Between Different Render Processes

- Render Process

```tsx
import {renderMsgToRender} from 'electron-prokit'

const renderMsgToRenderHandle = (windowName: string, msg: string) => {
  renderMsgToRender(windowName, msg);
};

<Button type="primary" onClick={() => renderMsgToRenderHandle("work", "Hello Work")}>
  Send Message to Work Process
</Button>;
```

### onRenderMsgToRender
- Another Render Process

```ts
import {onRenderMsgToRender} from 'electron-prokit'

onRenderMsgToRender((e,arg) => {
  console.log(e,arg)
})
```

:::warning  Note
The other render process mentioned here is a hidden render process. If you need a visible render process, you can create one like creating a main render process window[Create a Main Render Process Window](/api/electron-prokit/window.html#createwindow)
:::

Here's how to create a hidden render process:

```ts
const workWindow = createWindow("work", {
    show: false,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      preload: join(__dirname, "../work/index.cjs"), // Note the preload here
    },
  });

  workWindow.hide();

  if (import.meta.env.MODE === "dev") {
    workWindow.webContents.openDevTools();
  }

  workWindow.loadFile(resolve(__dirname, "../work/index.html"));
```