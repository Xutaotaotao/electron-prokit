import { Button, Card, Space, Tag } from 'antd'
import { useEffect, useState } from 'react'
import { onMsgFromMain, sendMsgToMain, sendMsgToOtherRender } from 'electron-prokit'


const Ipc = () => {

  const [msgFromRenderMsgToMain, setMsgFromRenderMsgToMain] = useState<string>('')
  const [msgFromMain, setMsgFromMain] = useState('')

  useEffect(() => {
    onMsgFromMain((_event: unknown, args: string) => {
      setMsgFromMain(args)
    })
  }, [])

  const renderMsgToMainHandle = (msg: string) => {
    sendMsgToMain<string, string>(msg).then(result => {
      setMsgFromRenderMsgToMain(result)
    })
  }

  const renderMsgToRenderHandle = (windowName: string, msg: string) => {
    sendMsgToOtherRender(windowName, msg)
  }

  return <Space direction="vertical" style={{width:'100%'}}>
    <Card title="发送信息到主进程" bordered={false}>
      <Button type='primary' onClick={() => renderMsgToMainHandle('sendMsgToMain Hello')}>发送信息到主进程</Button>
      <div>这里是主进程的应答信息：{msgFromRenderMsgToMain}</div>
    </Card>

    <Card title="从主进程接收消息" bordered={false}>
      <Space direction="vertical">
        <div>点击菜单栏中的 <Tag >发送消息给render</Tag>即可看到效果</div>
        <div>这里是主进程传过来的信息：{msgFromMain}</div>
      </Space>
    </Card>

    <Card title="渲染进程间发送消息" bordered={false}>
      <Space direction="vertical">
        <Button type='primary' onClick={() => renderMsgToRenderHandle('work', 'Hello Work')}>发送信息到work进程</Button>
        <div>可以通过work进程的控制台查看渲染进程发送的消息</div>
      </Space>
    </Card>

  </Space>
}

export default Ipc