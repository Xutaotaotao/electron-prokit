import { app } from "electron";
import initWindow from './window'
import initIpc from './ipc'

app.whenReady().then(() => {
  initWindow()
  initIpc()
});
