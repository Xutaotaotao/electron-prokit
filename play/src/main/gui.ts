import { join } from "path";
import { Menu, Tray, nativeImage } from "electron";
import { sendMsgToRender, showWindow } from "electron-prokit";
import { getResourcesPath } from "../util";

let menu: Electron.Menu;
let tray: Electron.Tray;

const initMenu = () => {
  menu = Menu.buildFromTemplate([
    {
      label: "Electron Prokit",
      click: () => {
        showWindow();
      },
    },
    {
      type: "separator",
    },
    {
      label: "sendMsgToRender",
      click: () => sendMsgToRender("main", "msg from main"),
    },
  ]);

  Menu.setApplicationMenu(menu);
};

const initTray = () => {
  if (process.platform === "darwin") {
    try {
      const iconPath = nativeImage.createFromPath(
        join(__dirname, getResourcesPath("resources/icon/icon.png"))
      );
      tray = new Tray(iconPath);
      tray.setContextMenu(menu);
      tray.on("click", () => {
        showWindow();
      });
    } catch (err) {
      console.error(err);
    }
  } else {
    try {
      const iconPath = nativeImage.createFromPath(
        join(__dirname, getResourcesPath("resources/icon/icon.ico"))
      );
      tray = new Tray(iconPath);
      tray.setContextMenu(menu);
      tray.on("click", () => {
        showWindow();
      });
    } catch (err) {
      console.error(err);
    }
  }
};

const main = () => {
  initMenu();
  initTray();
};

export default main;
