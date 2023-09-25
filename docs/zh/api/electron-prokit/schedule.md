---
outline: deep
title: Schedule
description: electron-prokit schedule api
---

# Schedule

定时任务管理器相关的 API 接口。支持`渲染进程`、`主进程`、`任务进程`，可以随处调用。

## 作用

轻松管理定时任务的生命周期，从创建到销毁。

## API 使用

### registerSchedule

注册任务。

```ts
import { registerSchedule } from "electron-prokit";
registerSchedule({
  name: "runScheduleTest",
  fun: () => {
    console.log("registerSchedule");
  },
  interval: 3000,
});
```

**:speech_balloon: 参数**

```ts
registerSchedule (schedule:RegisterScheduleOption):Schedule
```
- schedule：任务选项

```ts
interface RegisterScheduleOption {
  name: string; // 任务名/唯一值
  fun: Function; // 需要执行的方法
  interval: number; // 间隔时间 / 单位ms
  [key: string]: any; // 其他选项
}

interface Schedule extends RegisterScheduleOption {
  isRunning?: boolean;
  instance?: any
}
```

### runSchedule

运行任务。

```ts
import { runSchedule } from "electron-prokit";

runSchedule("runScheduleTest");
```

**:speech_balloon: 参数**

```ts
runSchedule(name: string,initRun=true):void
```

- name：任务名称，类型`string`
- initRun：是否初始化的时候就执行方法，类型`boolean`，默认为`true`

### stopSchedule

停止任务。

```ts
import { stopSchedule } from "electron-prokit";

stopSchedule("runScheduleTest");
```

**:speech_balloon: 参数**


```ts
stopSchedule(name:string):void
```

- name：任务名称，类型`string`


### clearSchedule

清除任务。

```ts
import { clearSchedule } from "electron-prokit";

clearSchedule("runScheduleTest");
```

**:speech_balloon: 参数**

```ts
clearSchedule(name:string):void
```

- name：任务名称，类型`string`


### getSchedule

获取任务实例。

```ts
import { getSchedule } from "electron-prokit";

getSchedule("runScheduleTest");
```

**:speech_balloon: 参数**

```ts
getSchedule(name: string): Schedule
```

- name：任务名称，类型`string`


例子：

### hasSchedule

判断是否存在任务。

```ts
import { hasSchedule } from "electron-prokit";

hasSchedule("runScheduleTest");
```

**:speech_balloon: 参数**

```ts
hasSchedule (name:string):boolean
```

- name：任务名称，类型`string`

### isRunningSchedule

判断任务是否运行。

```ts
import { isRunningSchedule } from "electron-prokit";

isRunningSchedule("runScheduleTest");
```

**:speech_balloon: 参数**

```ts
isRunningSchedule(name:string) : boolean
```

- name：任务名称，类型`string`

### clearAllSchedule

清除所有任务。

```ts
import { clearAllSchedule } from "electron-prokit";

clearAllSchedule();
```

**:speech_balloon: 参数**

```ts
clearAllSchedule ():void
```

