import { join,resolve } from "path";
import {
  app,
} from "electron";
import {createWindow} from 'electron-prokit';

const initWindowsAction = () => {
  const mainWindow = createWindow('main',{
    width: 960,
    height: 720,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      webSecurity: false,
      preload: join(__dirname, "../preload/index.cjs"),
    },
  })

  if (mainWindow) {
    if (import.meta.env.MODE === "dev") {
      if (import.meta.env.VITE_DEV_SERVER_URL) {
        mainWindow.loadURL(import.meta.env.VITE_DEV_SERVER_URL);
        mainWindow.webContents.openDevTools();
      }
    } else {
      mainWindow.loadFile(resolve(__dirname, "../render/index.html"));
    }
  }
}


app.whenReady().then(() => {
  initWindowsAction()
})
