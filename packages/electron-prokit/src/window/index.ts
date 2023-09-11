import { BrowserWindow } from 'electron'

const windows = new Map<string, BrowserWindow>();

export function createWindow(name: string, options: Electron.BrowserWindowConstructorOptions):Electron.CrossProcessExports.BrowserWindow | undefined{
  if (hasWindow(name)) {
    console.warn('has same name window')
    return getWindow(name);
  } else {
    const win = new BrowserWindow(options);
    windows.set(name, win);
    return win;
  }
}

export function getWindow(name: string) {
  return windows.get(name);
} 

export function destroyWindow(name: string) {
  const win = getWindow(name);
  if (win) {
    win.destroy();
    windows.delete(name);
  }
}

export function getAllWindows() {
  return Array.from(windows.values());
}

export function hasWindow(name: string) {
  return windows.has(name); 
}

export function clearWindows() {
  windows.clear();
}