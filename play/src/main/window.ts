import { join, resolve } from "path";
import {
  createWindow,
} from "electron-prokit";

const initMainWin = () => {
  const mainWindow = createWindow("main", {
    width: 960,
    height: 720,
    webPreferences: {
      preload: join(__dirname, "../preload/index.cjs"),
    },
  });

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

const initWorkWin = () => {
  const workWindow = createWindow("work", {
    show: false,
    webPreferences: {
      preload: join(__dirname, "../preload/index.cjs"),
    },
  });
  workWindow.hide();
  if (import.meta.env.MODE === "dev") {
    workWindow.webContents.openDevTools();
  }
  workWindow.loadFile(resolve(__dirname, "../work/index.html"));
}

const main = () => {
  initMainWin()
  setTimeout(() => {
    initWorkWin()
  },3000)
  
};

export default main