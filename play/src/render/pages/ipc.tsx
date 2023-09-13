import {sendMsgToMain} from 'electron-prokit'
import {Button} from 'antd'

console.log(sendMsgToMain)

const Ipc = () => {
  const sendMsgTo = (s) => {}
  return <div>
    <Button onClick={() => sendMsgTo ('sendMsgToMain Hello')}>发送信息到主进程</Button>
  </div>
}

export default Ipc