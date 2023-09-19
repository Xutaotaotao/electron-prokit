import { join, resolve } from "path";
import { app, Menu } from "electron";
import {
  createWindow,
  mainMsgToRender,
} from "electron-prokit";

const main = () => {
  const mainWindow = createWindow("main", {
    width: 960,
    height: 720,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      webSecurity: false,
      preload: join(__dirname, "../preload/index.cjs"),
    },
  });

  const menu = Menu.buildFromTemplate([
    {
      label: app.name,
      submenu: [
        {
          click: () => mainMsgToRender("main", "msg from main"),
          label: "发送消息给render",
        },
      ],
    },
  ]);

  Menu.setApplicationMenu(menu);

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

  const workWindow = createWindow("work", {
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      webSecurity: false,
      preload: join(__dirname, "../work/index.cjs"),
    },
  });

  workWindow.hide();

  if (import.meta.env.MODE === "dev") {
    workWindow.webContents.openDevTools();
  }

  workWindow.loadFile(resolve(__dirname, "../work/index.html"));
};

export default main