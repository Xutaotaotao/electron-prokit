export const initDb = (file?: string) => {
  return window.electronProkit.initDb(file);
};

export const writeDb = (key: string, data: any) => {
  return window.electronProkit.writeDb(key, data);
};

export const readDb = (key: string) => {
  return window.electronProkit.readDb(key);
};

export const clearDb = () => {
  return window.electronProkit.clearDb();
};
