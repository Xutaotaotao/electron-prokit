# ipc

进程间通信相关的 API 接口，promise 风格。

## renderMsgToMain

渲染进程发送信息到主进程

- 主进程

```ts
onMsgFormRender((_e: Electron.IpcMainEvent, args: unknown) => {
  return `Main have get data is ${args}`;
});
```

- preload 脚本

```ts
import { creactDefaultExposeInMainWorld } from "electron-prokit";

creactDefaultExposeInMainWorld();
```

- 渲染进程

```tsx
import {Button} from 'antd'

const Ipc = () => {
  const renderMsgToMain = (msg:string) => {
    window.electronProkit.renderMsgToMain(msg).then(result => {
      console.log(result)
    })
  }
  return <div>
    <Button onClick={() => renderMsgToMain ('sendMsgToMain Hello')}>发送信息到主进程</Button>
  </div>
}

export default Ipc
```

## mainMsgToRender

主进程发送信息到渲染进程

## renderMsgToRender

不同渲染进程间发送信息
