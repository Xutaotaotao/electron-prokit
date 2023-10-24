import { Button, Card,Space, } from 'antd'
import { http,sendMsgToMain } from 'electron-prokit'

const Http = () => {

  const httpTest = () => {
    http({
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      method: 'get'
    }).then(res => {
      console.log(res)
    })
  }

  const httpMainTest = () => {
    sendMsgToMain<Msg, number>({ key: 'testGetHttp' }).then((res) => {
      console.log(res)
    })
  }

  return <Space direction="vertical" style={{width:'100%'}}>
    <Card title="渲染进程请求" bordered={false}>
      <Button type='primary' onClick={() => httpTest()}>发送一个请求</Button>
    </Card>
    <Card title="渲染进程发送一个消息让主进程发起Http请求" bordered={false}>
      <Button type='primary' onClick={() => httpMainTest()}>发送一个消息让主进程请求</Button>
    </Card>
  </Space>
}

export default Http