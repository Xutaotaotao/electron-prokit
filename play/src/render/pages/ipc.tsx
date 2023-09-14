import {Button} from 'antd'

const Ipc = () => {
  const renderMsgToMain = (msg:string) => {
    window.electronProkit.renderMsgToMain(msg).then(result => {
      console.log(result)
    })
  }
  return <div>
    <Button onClick={() => renderMsgToMain ('sendMsgToMain Hello')}>发送信息到主进程</Button>
  </div>
}

export default Ipc