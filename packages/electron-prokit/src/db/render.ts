import type { ClearDbFunc, InitDbFunc, ReadDbFunc, WriteDbFunc } from "./type";

export const initDb:InitDbFunc = (file?:string) => {
  return window.electronProkit.initDb(file);
};

export const  writeDb:WriteDbFunc = (key, data) => {
  return window.electronProkit.writeDb(key, data);
};

export const readDb:ReadDbFunc = (key) => {
  return window.electronProkit.readDb(key);
};

export const clearDb:ClearDbFunc = () => {
  return window.electronProkit.clearDb();
};
