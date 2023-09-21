# db

数据存储管理相关的 API 接口，主进程中使用。

## initDb

初始化数据库。

参数：

- file：数据存储文件位置，默认为`join(app.getPath("appData"), "db.json")`。

例子：

```ts
import { initDb } from "electron-prokit";

initDb().then((res) => {
  console.error(res)
}).catch((err) => {
  console.error(err)
})

```

## writeDb

写数据。

参数：

- key：数据存储key
- data：数据存储data

例子：

```ts
import { writeDb } from "electron-prokit";

writeDb('test',{name:'Hello',age:11})

```

## readDb

读数据。

参数：

- key：数据存储key

例子：

```ts
import { readDb } from "electron-prokit";

readDb('test').then((res) => {
  console.error(res)
}).catch((err) => {
  console.error(err)
})

```

## clearDb

清除整个数据库。

例子：

```ts
import { clearDb } from "electron-prokit";

clearDb()

```

