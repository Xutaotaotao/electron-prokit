(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["create-electron-prokit"] = factory());
})(this, (function () { 'use strict';

  const createElectronProkit = (hello) => {
      console.log('creatElectronProkit', hello);
  };

  return createElectronProkit;

}));
