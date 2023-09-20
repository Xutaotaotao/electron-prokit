import { Button, Divider, Space } from 'antd'
import {http} from 'electron-prokit'

const Http = () => {

  const httpTest = () => {
    http({
      url:'https://jsonplaceholder.typicode.com/posts/1',
      method:'get'
    }).then(res => {
      console.log(res)
    })
  }

  const httpMainTest = () => {
    window.electronProkit.renderMsgToMain<Msg, number>({key:'testGetHttp'}).then((res) => {
      console.log(res)
    })
  }

  return <div>
    <Divider>渲染进程请求</Divider>
    <Space direction="vertical">
    <Button type='primary' onClick={() => httpTest()}>发送一个请求</Button>
    </Space>

    <Divider>渲染进程发送一个消息让主进程发起Http请求</Divider>
    <Space direction="vertical">
    <Button type='primary' onClick={() => httpMainTest()}>发送一个消息让主进程请求</Button>
    </Space>
  </div>
}

export default Http