import { app } from "electron";
import initWindow from './window'
import initIpc from './ipc'
// import initGui from './gui'

app.whenReady().then(() => {
  initWindow()
  initIpc()
  // initGui()
});
