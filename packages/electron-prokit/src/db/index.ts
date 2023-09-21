import { useDbFile, useLowdb } from "../hooks";
let db: any = null;

const defaultFile = useDbFile()

export const initDb = (file = defaultFile): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (db) {
      resolve(true);
    } else {
      try {
        const lowdb = useLowdb(file)
        lowdb
          .read()
          .then(() => {
            db = lowdb;
            resolve(true);
          })
          .catch((err) => {
            reject(err);
          });
      } catch (err) {
        reject(err);
      }
    }
  });
};

export const writeDb = async (key: string, data: any): Promise<void> => {
  if (!db) {
    await initDb();
  }
  db.data[key] = data;
  await db.write();
};

export const readDb = async (key:string):Promise<any> =>  {
  if (!db) {
    return null
  }
  await db.read()
  const res = db.data[key];
  return res
};

export const clearDb = async ():Promise<void> => {
  if (!db) {
    return
  }
  db.data = {}
  await db.write();
};
