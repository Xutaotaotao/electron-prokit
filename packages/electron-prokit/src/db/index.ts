import type {LowSync} from 'lowdb'
import { useDbFile, useLowdb } from "../hooks";
let db: LowSync<any> | null = null;

const defaultFile = useDbFile();

export const initDb = (file = defaultFile): Promise<boolean> => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    if (db) {
      resolve(true);
    } else {
      try {
        const lowdb = await useLowdb(file);
        await lowdb.read();
        db = lowdb;
        resolve(true);
      } catch (err) {
        reject(err);
      }
    }
  });
};

// todo data type constrains 
export const writeDb = async (key: string, data: any): Promise<void> => {
  if (!db) {
    await initDb();
  }
  await db.read();
  const oldData = db.data || {}
  db.data = {
    ...oldData,
    [key]: data,
  };
  await db.write();
};

export const readDb = async (key: string): Promise<any> => {
  if (!db) {
    await initDb();
  }
  await db.read();
  const res = db.data?.[key];
  return res;
};

export const clearDb = async (): Promise<void> => {
  if (!db) {
    return;
  }
  db.data = {};
  await db.write();
};
