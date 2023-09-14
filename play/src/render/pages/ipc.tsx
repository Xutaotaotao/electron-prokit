import {Button,Divider,Space} from 'antd'
import { useEffect, useState } from 'react'


const Ipc = () => {

  const [msgFormRenderMsgToMain,setMsgFormRenderMsgToMain] = useState<string>('')
  const [msgFormMain,setMsgFormMain] = useState('')

  useEffect(() => {
    window.electronProkit.onMsgFormMain((_event:unknown, args:string) => {
      setMsgFormMain(args)
    })
  },[])

  const renderMsgToMain = (msg:string) => {
    window.electronProkit.renderMsgToMain<string,string>(msg).then(result => {
      setMsgFormRenderMsgToMain(result)
    })
  }
  return <div>
    <Divider>发送信息到主进程</Divider>
    <Space direction="vertical">
    <Button type='primary' onClick={() => renderMsgToMain ('sendMsgToMain Hello')}>发送信息到主进程</Button>
    <div>这里是主进程的应答信息：{msgFormRenderMsgToMain}</div>
    </Space>
    
    <Divider>从主进程接收消息</Divider>
    <div>这里是主进程传过来的信息：{msgFormMain}</div>
  </div>
}

export default Ipc