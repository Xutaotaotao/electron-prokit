import {
  http
} from "electron-prokit";

export const testGetHttp = () => {
  return http({
    url:'https://jsonplaceholder.typicode.com/posts/1',
    method:'get',
    log:true
  })
}

