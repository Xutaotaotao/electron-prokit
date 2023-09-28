---
outline: deep
title: FFI
description: electron-prokit ffi api
---

# Ffi

API interfaces related to cross-language calls, used in the `main process`. It offers a low integration cost and is fast, convenient, and efficient.

## Purpose

The primary purpose of FFI is to call dll or dylib in your Electron application, allowing you to make cross-language calls to some low-level plugins.

## createEpffi

Create registered methods.

```ts
import { createEpffi } from "electron-prokit";
import path from "path";

// Single method, i.e., dylib/dll exposes only one method
const { sum } = createEpffi({
  path: path.join(__dirname, "../../resources/dll/sum.dylib"),
  function: {
    functionName: "sum",
    returnType: "int",
    inputs: ["int", "int"],
  },
});

sum(100, 22)

// Multiple methods, i.e., dylib/dll exposes multiple methods
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

## Data Types

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
