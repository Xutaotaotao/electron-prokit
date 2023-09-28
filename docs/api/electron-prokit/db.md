---
outline: deep
title: Db
description: electron-prokit Db api
---

# Db

API interfaces related to data storage management.Use in `Main Process`.

## Purpose

Easily manage local data with convenient read and write operations.


## API Usage

### initDb

Initialize the database.

```ts
import { initDb } from "electron-prokit";

initDb()
  .then((res) => {
    console.error(res);
  })
  .catch((err) => {
    console.error(err);
  });
```

**:speech_balloon: Parameters**

```ts
initDb = (file = defaultFile): Promise<boolean>
```

- file：The location of the data storage file, defaulting to`join(app.getPath("appData"), "db.json")`。

### writeDb

Write data.

```ts
import { writeDb } from "electron-prokit";

writeDb("test", { name: "Hello", age: 11 });
```

**:speech_balloon: Parameters**

```ts
writeDb = async (key: string, data: any): Promise<void>
```

- key: Data storage key
- data: Data to be stored

### readDb

Read data.

```ts
import { readDb } from "electron-prokit";

readDb("test")
  .then((res) => {
    console.error(res);
  })
  .catch((err) => {
    console.error(err);
  });
```

**:speech_balloon: Parameters**

```ts
readDb = async (key: string, data: any): Promise<any>
```

- key: Data storage key

### clearDb

Clear the entire database.

```ts
import { clearDb } from "electron-prokit";

clearDb();
```

**:speech_balloon: Parameters**

```ts
clearDb = async ():Promise<void>
```
