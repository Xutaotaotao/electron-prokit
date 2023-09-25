---
outline: deep
title: Db
description: electron-prokit Db api
---

# Db

数据存储管理相关的 API 接口。

## 作用

轻松管理本地数据，读写方便。

## initDb

初始化数据库。

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

**:speech_balloon: 参数**

```ts
initDb = (file = defaultFile): Promise<boolean>
```

- file：数据存储文件位置，默认为`join(app.getPath("appData"), "db.json")`。

## writeDb

写数据。

```ts
import { writeDb } from "electron-prokit";

writeDb("test", { name: "Hello", age: 11 });
```

**:speech_balloon: 参数**

```ts
writeDb = async (key: string, data: any): Promise<void>
```

- key：数据存储 key
- data：数据存储 data

## readDb

读数据。

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

**:speech_balloon: 参数**

```ts
readDb = async (key: string, data: any): Promise<any>
```

- key：数据存储 key

## clearDb

清除整个数据库。

```ts
import { clearDb } from "electron-prokit";

clearDb();
```

**:speech_balloon: 参数**

```ts
clearDb = async ():Promise<void>
```
