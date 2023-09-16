import { Button, Divider, Space } from 'antd'
import {http} from 'electron-prokit/src/http'

const Http = () => {

  const httpTest = () => {
    http({
      url:'https://jsonplaceholder.typicode.com/posts/1',
      method:'get'
    }).then(res => {
      console.log(res)
    })
  }

  return <div>
    <Divider>渲染进程请求</Divider>
    <Space direction="vertical">
    <Button type='primary' onClick={() => httpTest()}>发送一个请求</Button>
    </Space>
  </div>
}

export default Http