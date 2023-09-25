---
outline: deep
title: FFI
description: electron-prokit ffi api
---

# Ffi

跨语言调用相关的 API 接口，`主进程`中使用。接入成本非常低，快捷、方便、速度快。

## 作用

主要是在Electron应用中调用`dll`或者`dylib`，使你可以跨语言调用一些底层插件。

## createEpffi

创建注册方法。

```ts
import { createEpffi } from "electron-prokit";
import path from "path";

// 当个方法/即dylib/dll中只有暴露一个方法
const { sum } = createEpffi({
  path: path.join(__dirname, "../../resources/dll/sum.dylib"),
  function: {
    functionName: "sum",
    returnType: "int",
    inputs: ["int", "int"],
  },
});

sum(100, 22)

// 多个方法/即dylib/dll中暴露了多个方法
const { mul,div } = createEpffi({
  path: path.join(__dirname, "../../resources/dll/mul_and_div.dylib"),
  function: [
    {
      functionName: "mul",
      returnType: "int",
      inputs: ["int", "int"],
    },
    {
      functionName: "div",
      returnType: "int",
      inputs: ["int", "int"],
    },
  ],
});

mul(100, 22);

div(100, 2);
```

## 数据类型

C type                        | JS type          | Bytes | Signedness | Note
----------------------------- | ---------------- | ----- | ---------- | ---------------------------
void                          | Undefined        | 0     |            | Only valid as a return type
int8, int8_t                  | Number (integer) | 1     | Signed     |
uint8, uint8_t                | Number (integer) | 1     | Unsigned   |
char                          | Number (integer) | 1     | Signed     |
uchar, unsigned char          | Number (integer) | 1     | Unsigned   |
char16, char16_t              | Number (integer) | 2     | Signed     |
int16, int16_t                | Number (integer) | 2     | Signed     |
uint16, uint16_t              | Number (integer) | 2     | Unsigned   |
short                         | Number (integer) | 2     | Signed     |
ushort, unsigned short        | Number (integer) | 2     | Unsigned   |
int32, int32_t                | Number (integer) | 4     | Signed     |
uint32, uint32_t              | Number (integer) | 4     | Unsigned   |
int                           | Number (integer) | 4     | Signed     |
uint, unsigned int            | Number (integer) | 4     | Unsigned   |
int64, int64_t                | Number (integer) | 8     | Signed     |
uint64, uint64_t              | Number (integer) | 8     | Unsigned   |
longlong, long long           | Number (integer) | 8     | Signed     |
ulonglong, unsigned long long | Number (integer) | 8     | Unsigned   |
float32                       | Number (float)   | 4     |            |
float64                       | Number (float)   | 8     |            |
float                         | Number (float)   | 4     |            |
double                        | Number (float)   | 8     |            |
bool             | Boolean          |            | Usually one byte
long             | Number (integer) | Signed     | 4 or 8 bytes depending on platform (LP64, LLP64)
ulong            | Number (integer) | Unsigned   | 4 or 8 bytes depending on platform (LP64, LLP64)
unsigned long    | Number (integer) | Unsigned   | 4 or 8 bytes depending on platform (LP64, LLP64)
intptr           | Number (integer) | Signed     | 4 or 8 bytes depending on register width
intptr_t         | Number (integer) | Signed     | 4 or 8 bytes depending on register width
uintptr          | Number (integer) | Unsigned   | 4 or 8 bytes depending on register width
uintptr_t        | Number (integer) | Unsigned   | 4 or 8 bytes depending on register width
str, string      | String           |            | JS strings are converted to and from UTF-8
str16, string16  | String           |            | JS strings are converted to and from UTF-16 (LE)
