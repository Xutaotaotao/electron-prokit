import { useBrowserWindow } from "../hooks";

const windows = new Map<string, Electron.BrowserWindow>();

function createWindow(
  name: string,
  options: Electron.BrowserWindowConstructorOptions
): Electron.CrossProcessExports.BrowserWindow {
  if (hasWindow(name)) {
    console.warn("has same name window");
    return getWindow(name);
  } else {
    const win = useBrowserWindow(options);
    windows.set(name, win);
    return win;
  }
}

function getWindow(name: string): Electron.CrossProcessExports.BrowserWindow {
  return windows.get(name);
}

function destroyWindow(name: string): void {
  const win = getWindow(name);
  if (win) {
    win.destroy();
    windows.delete(name);
  }
}

function getAllWindows(): Array<Electron.CrossProcessExports.BrowserWindow> {
  return Array.from(windows.values());
}

function hasWindow(name: string): boolean {
  return windows.has(name);
}

function clearWindows(): void {
  for (const key in windows) {
    destroyWindow(key)
  }
  windows.clear();
}

export {
  createWindow,
  getWindow,
  destroyWindow,
  getAllWindows,
  hasWindow,
  clearWindows,
};
