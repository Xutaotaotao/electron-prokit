# Schedule

API interfaces related to a scheduled task manager. Easily manage the lifecycle of scheduled tasks, from creation to destruction.

## registerSchedule

Register a task.

Parameters:

- schedule: Task options,

```ts
interface RegisterScheduleOption {
  name: string; // Task name/unique value
  fun: Function; // Method to be executed
  interval: number; // Interval time / in ms
}
```

Example:

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

Run a task.

Parameters:

- name: Task name, type string
initRun: Whether to execute the method during initialization, type `boolean`, default is `true`

Example:

```ts
import { runSchedule } from "electron-prokit";

runSchedule("runScheduleTest");
```

## stopSchedule

Stop a task.

Parameters:

- name: Task name, type `string`

Example:

```ts
import { stopSchedule } from "electron-prokit";

stopSchedule("runScheduleTest");
```

## clearSchedule

Clear a task.

Parameters:

- name: Task name, type `string`

Example:

```ts
import { clearSchedule } from "electron-prokit";

clearSchedule("runScheduleTest");
```

## getSchedule

Get a task instance.

Parameters:

- name: Task name, type `string`

Return value: The entire task.

```ts
{
  name:string;
  fun: Function;
  interval: number;
  isRunning?: boolean;
  instance?: any
}
```

Example:

```ts
import { getSchedule } from "electron-prokit";

getSchedule("runScheduleTest");
```

## hasSchedule

Determine if a task exists.

Parameters:

- name: Task name, type `string`

Example:

```ts
import { hasSchedule } from "electron-prokit";

hasSchedule("runScheduleTest");
```

## isRunningSchedule

Determine if a task is running.

- Parameters:

name: Task name, type `string`

Example:

```ts
import { isRunningSchedule } from "electron-prokit";

isRunningSchedule("runScheduleTest");
```

## clearAllSchedule

Clear all tasks.

Example:

```ts
import { clearAllSchedule } from "electron-prokit";

clearAllSchedule();
```
