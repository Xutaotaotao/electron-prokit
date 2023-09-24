import {Button,Divider,Space,Tag} from 'antd'
import { useEffect, useState } from 'react'
import {sendMsgToMain,sendMsgToOtherRender,onMsgFromMain} from 'electron-prokit'


const Ipc = () => {

  const [msgFromRenderMsgToMain,setMsgFromRenderMsgToMain] = useState<string>('')
  const [msgFromMain,setMsgFromMain] = useState('')

  useEffect(() => {
    onMsgFromMain((_event:unknown, args:string) => {
      setMsgFromMain(args)
    })
  },[])

  const renderMsgToMainHandle = (msg:string) => {
    sendMsgToMain<string,string>(msg).then(result => {
      setMsgFromRenderMsgToMain(result)
    })
  }

  const renderMsgToRenderHandle = (windowName:string,msg:string) => {
    sendMsgToOtherRender(windowName,msg)
  }

  return <div>
    <Divider>发送信息到主进程</Divider>
    <Space direction="vertical">
    <Button type='primary' onClick={() => renderMsgToMainHandle ('sendMsgToMain Hello')}>发送信息到主进程</Button>
    <div>这里是主进程的应答信息：{msgFromRenderMsgToMain}</div>
    </Space>
    
    <Divider>从主进程接收消息</Divider>
    <Space direction="vertical">
      <div>点击菜单栏中的 <Tag >发送消息给render</Tag>即可看到效果</div>
      <div>这里是主进程传过来的信息：{msgFromMain}</div>
    </Space>
    <Divider>渲染进程间发送消息</Divider>
    <Space direction="vertical">
      <Button type='primary' onClick={() => renderMsgToRenderHandle ('work','Hello Work')}>发送信息到work进程</Button>
      <div>可以通过work进程的控制台查看渲染进程发送的消息</div>
    </Space>

  </div>
}

export default Ipc