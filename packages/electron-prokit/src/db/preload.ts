import { useIpcRenderer } from "../hooks";

const ipcRenderer = useIpcRenderer();

export const initDb = (file?:string): Promise<boolean> => {
  return ipcRenderer.invoke("EPinitDb", {
    fun:'initDb',
    file
  });
}

export const writeDb = (key: string, data: any):Promise<void> => {
  return ipcRenderer.invoke("EPinitDb", {
    fun:'writeDb',
    key,
    data
  });
}

export const readDb = (key: string):Promise<any> => {
  return ipcRenderer.invoke("EPinitDb", {
    fun:'readDb',
    key,
  });
}


export const clearDb = (key: string):Promise<void> => {
  return ipcRenderer.invoke("EPinitDb", {
    fun:'clearDb',
  });
}