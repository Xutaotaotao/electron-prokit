import { BrowserWindow } from 'electron';

const windows = new Map();
function createWindow(name, options) {
    if (hasWindow(name)) {
        console.warn('has same name window');
        return getWindow(name);
    }
    else {
        const win = new BrowserWindow(options);
        windows.set(name, win);
        return win;
    }
}
function getWindow(name) {
    return windows.get(name);
}
function destroyWindow(name) {
    const win = getWindow(name);
    if (win) {
        win.destroy();
        windows.delete(name);
    }
}
function getAllWindows() {
    return Array.from(windows.values());
}
function hasWindow(name) {
    return windows.has(name);
}
function clearWindows() {
    windows.clear();
}

export { clearWindows, createWindow, destroyWindow, getAllWindows, getWindow, hasWindow };
