---
outline: deep
title: Http
description: electron-prokit http api
---

# Http

API interfaces related to network communication. Supports `renderer processes`, `main process`, and `preload` and can be called from anywhere.

## Purpose

The primary purpose of Http is to initiate network requests to interact with server interfaces.

## Example

Initiate a GET request.

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

## Request Configuration

These are the configuration options that can be used when creating a request. Only the URL is required. If the method is not specified, the request will default to using the GET method.

```ts
{
  // `url` is the server URL used for the request
  url: '/user',

  // `method` is the method used when creating the request
  method: 'get', // Default value

  // Custom request headers
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` are URL parameters sent along with the request
  // Must be a simple object or URLSearchParams object
  params: {
    ID: 12345
  },

  // `data` is the data sent as the request body
  data: {
    firstName: 'Fred'
  },

  // `timeout` specifies the timeout for the request in milliseconds.
  // If the request takes longer than the `timeout` value, the request will be aborted
  timeout: 1000, // Default is `0` (no timeout)

  // Error handling
  handleError: function (error) {
    console.log()
  }

  // Logging handling / boolean type, function, or empty
  // boolean means print to console, function allows custom logging
  log: true
}

```

## Interceptors

```ts
// Add a request interceptor
http.interceptors.request.use(
  function (config) {
    // Do something before sending the request
    return config;
  },
  function (error) {
    // Do something with the request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Do something with the response data
    return response;
  },
  function (error) {
    // Do something with the response error
    return Promise.reject(error);
  }
);

```
