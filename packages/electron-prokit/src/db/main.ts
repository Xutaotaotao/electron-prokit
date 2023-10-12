import type {LowSync} from 'lowdb'
import { useDbFile, useLowdb } from "../hooks";
import type { ClearDbFunc, InitDbFunc, ReadDbFunc, WriteDbFunc } from './type';

let db: LowSync<any> | null = null;

const defaultFile = useDbFile();

export const initDb:InitDbFunc = (file = defaultFile) => {
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
export const writeDb:WriteDbFunc = async (key, data) => {
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

export const readDb:ReadDbFunc = async (key) => {
  if (!db) {
    await initDb();
  }
  await db.read();
  const res = db.data?.[key];
  return res;
};

export const clearDb:ClearDbFunc = async () => {
  if (!db) {
    return;
  }
  db.data = {};
  await db.write();
};
