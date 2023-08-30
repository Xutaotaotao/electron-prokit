(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('electron')) :
  typeof define === 'function' && define.amd ? define(['exports', 'electron'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["electron-prokit"] = {}, global.electron));
})(this, (function (exports, electron) { 'use strict';

  const windows = new Map();
  function createWindow(name, options) {
      if (hasWindow(name)) {
          console.warn('has same name window');
          return getWindow(name);
      }
      else {
          const win = new electron.BrowserWindow(options);
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

  exports.clearWindows = clearWindows;
  exports.createWindow = createWindow;
  exports.destroyWindow = destroyWindow;
  exports.getAllWindows = getAllWindows;
  exports.getWindow = getWindow;
  exports.hasWindow = hasWindow;

}));
