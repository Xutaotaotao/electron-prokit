import { useIpcRenderer } from "../hooks";
import type { ClearDbFunc, InitDbFunc, ReadDbFunc, WriteDbFunc } from "./type";

const ipcRenderer = useIpcRenderer();

export const initDb:InitDbFunc = (file?:string) => {
  return ipcRenderer?.invoke("EPinitDb", {
    fun:'initDb',
    file
  });
}

export const writeDb:WriteDbFunc = (key, data) => {
  return ipcRenderer?.invoke("EPinitDb", {
    fun:'writeDb',
    key,
    data
  });
}

export const readDb:ReadDbFunc = (key) => {
  return ipcRenderer?.invoke("EPinitDb", {
    fun:'readDb',
    key,
  });
}


export const clearDb:ClearDbFunc = () => {
  return ipcRenderer?.invoke("EPinitDb", {
    fun:'clearDb',
  });
}