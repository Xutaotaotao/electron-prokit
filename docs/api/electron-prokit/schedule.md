---
outline: deep
title: Schedule
description: electron-prokit schedule api
---

# Schedule

API interfaces related to task scheduling. Supports `renderer processes`, `main process`, and `preload` and can be called from anywhere.

## Purpose

Easily manage the lifecycle of scheduled tasks, from creation to termination.

## API Usage

### registerSchedule

Register a task.

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

**:speech_balloon: Parameters**

```ts
registerSchedule (schedule:RegisterScheduleOption):Schedule
```
- schedule：Task options

```ts
interface RegisterScheduleOption {
  name: string; // Task name/unique identifier
  fun: Function; // Method to be executed
  interval: number; // Interval time / in ms
  [key: string]: any; // Other options
}

interface Schedule extends RegisterScheduleOption {
  isRunning?: boolean;
  instance?: any;
}
```

### runSchedule

Run a task.

```ts
import { runSchedule } from "electron-prokit";

runSchedule("runScheduleTest");
```

**:speech_balloon: Parameters**

```ts
runSchedule(name: string,initRun=true):void
```

- name：Task name, type `string`
- initRun： Whether to execute the method during initialization, type `boolean`, default is `true`

### stopSchedule

Stop a task.

```ts
import { stopSchedule } from "electron-prokit";

stopSchedule("runScheduleTest");
```

**:speech_balloon: Parameters**


```ts
stopSchedule(name:string):void
```

- name：Task name, type `string`


### clearSchedule

Clear a task.

```ts
import { clearSchedule } from "electron-prokit";

clearSchedule("runScheduleTest");
```

**:speech_balloon: Parameters**

```ts
clearSchedule(name:string):void
```

- name：Task name, type `string`


### getSchedule

Get a task instance.

```ts
import { getSchedule } from "electron-prokit";

getSchedule("runScheduleTest");
```

**:speech_balloon: Parameters**

```ts
getSchedule(name: string): Schedule
```

- name：Task name, type `string`

### hasSchedule

Check if a task exists.

```ts
import { hasSchedule } from "electron-prokit";

hasSchedule("runScheduleTest");
```

**:speech_balloon: Parameters**

```ts
hasSchedule (name:string):boolean
```

- name：Task name, type `string`

### isRunningSchedule

Check if a task is running.

```ts
import { isRunningSchedule } from "electron-prokit";

isRunningSchedule("runScheduleTest");
```

**:speech_balloon: Parameters**

```ts
isRunningSchedule(name:string) : boolean
```

- name：Task name, type `string`

### clearAllSchedule

Clear all tasks.

```ts
import { clearAllSchedule } from "electron-prokit";

clearAllSchedule();
```

**:speech_balloon: Parameters**

```ts
clearAllSchedule ():void
```

