# schedule

定时任务管理器相关的 API 接口。轻松定时任务管理器的生命周期，从创建到销毁。

## registerSchedule

注册任务。

参数：

- schedule：任务选项，

```ts
interface RegisterScheduleOption {
  name: string; // 任务名/唯一值
  fun: Function; // 需要执行的方法
  interval: number; // 间隔时间 / 单位ms
}
```

例子：

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

## runSchedule

运行任务。

参数：

- name：任务名称，类型`string`
- initRun：是否初始化的时候就执行方法，类型`boolean`，默认为`true`

例子：

```ts
import { runSchedule } from "electron-prokit";

runSchedule("runScheduleTest");
```

## stopSchedule

停止任务。

参数：

- name：任务名称，类型`string`

例子：

```ts
import { stopSchedule } from "electron-prokit";

stopSchedule("runScheduleTest");
```

## clearSchedule

清除任务。

参数：

- name：任务名称，类型`string`

例子：

```ts
import { clearSchedule } from "electron-prokit";

clearSchedule("runScheduleTest");
```

## getSchedule

获取任务实例。

参数：

- name：任务名称，类型`string`

返回值：整个任务。

```ts
{
  name:string;
  fun: Function;
  interval: number;
  isRunning?: boolean;
  instance?: any
}
```

例子：

```ts
import { getSchedule } from "electron-prokit";

getSchedule("runScheduleTest");
```

## hasSchedule

判断是否存在任务。

参数：

- name：任务名称，类型`string`

例子：

```ts
import { hasSchedule } from "electron-prokit";

hasSchedule("runScheduleTest");
```

## isRunningSchedule

判断任务是否运行。

参数：

- name：任务名称，类型`string`

例子：

```ts
import { isRunningSchedule } from "electron-prokit";

isRunningSchedule("runScheduleTest");
```

## clearAllSchedule

清除所有任务。

例子：

```ts
import { clearAllSchedule } from "electron-prokit";

clearAllSchedule();
```
