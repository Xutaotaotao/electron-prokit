---
outline: deep
title: Http
description: electron-prokit http api
---

# Http

网络通信相关的 API 接口。支持`渲染进程`、`主进程`、`任务进程`，可以随处调用。

## 作用

Http的主要作用是发起网络请求，实现与服务端接口的交互。

## 用例

发起一个 Get 请求

```ts
import { http } from "electron-prokit";

http({
  url: "https://jsonplaceholder.typicode.com/posts/1",
  method: "get",
})
  .catch(function (error) {
    // 处理错误情况
    console.log(error);
  })
  .finally(function () {
    // 总是会执行
  });
```

## 请求配置

这些是创建请求时可以用的配置选项。只有 url 是必需的。如果没有指定 method，请求将默认使用 GET 方法。

```ts
{
  // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // 默认值

  // 自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是与请求一起发送的 URL 参数
  // 必须是一个简单对象或 URLSearchParams 对象
  params: {
    ID: 12345
  },

  // `data` 是作为请求体被发送的数据
  data: {
    firstName: 'Fred'
  },

  // `timeout` 指定请求超时的毫秒数。
  // 如果请求时间超过 `timeout` 的值，则请求会被中断
  timeout: 1000, // 默认值是 `0` (永不超时)

  // 错误处理
  handleError:function (error) {
    console.log()
  }

  // 日志处理 / boolean类型 或者 function 或者 空
  // boolean 就是打印console, function 可以用自己的自定义函数
  log: true
}
```

## 拦截器

```ts
// 添加请求拦截器
http.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
```
