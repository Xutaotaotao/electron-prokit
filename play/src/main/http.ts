import {
  http
} from "electron-prokit";

export const testGetHttp = () => {
  http({
    url:'https://jsonplaceholder.typicode.com/posts/1',
    method:'get',
    log:true
  })
}

