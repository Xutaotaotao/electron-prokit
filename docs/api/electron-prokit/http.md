---
outline: deep
---

# HTTP

Network communication-related API interfaces. Support rendering processes, main processes, task processes, and can be called from anywhere.

## Example

Initiate a GET request.

```ts
import { http } from "electron-prokit";

http({
  url: "https://jsonplaceholder.typicode.com/posts/1",
  method: "get",
})
  .catch(function (error) {
    // error handle
    console.log(error);
  })
  .finally(function () {
    // will always execute
  });
```

## Request configuration

These are configuration options that can be used when creating a request. Only the 'url' is mandatory. If no 'method' is specified, the request will default to using the GET method.

```ts
{
  // `url` is the server URL for the request
  url: '/user',

  // `method` is the method used when creating the request
  method: 'get', // Default value

  // Custom request headers
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` are the URL parameters sent with the request
  // Must be a simple object or URLSearchParams object
  params: {
    ID: 12345
  },

  // `data` is the data sent as the request body
  data: {
    firstName: 'Fred'
  },

  // `timeout` specifies the timeout in milliseconds for the request.
  // If the request takes longer than the `timeout` value, it will be aborted
  timeout: 1000, // Default value is `0` (no timeout)

  // Error handling
  handleError: function(error) {
    console.log()
  },

  // Logging handling / boolean type or function or empty
  // boolean means printing to console, function can be used to define a custom function
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
    // Handle request errors
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
    // Handle response errors
    return Promise.reject(error);
  }
);

```
