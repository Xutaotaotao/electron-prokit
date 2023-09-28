import { Button, Divider, Space } from 'antd'
import {sendMsgToMain} from 'electron-prokit'

const Db = () => {

  const initDbHandle = () => {
    sendMsgToMain({key:'initDb'}).then(res => {
      console.log(res)
    })
  }

  const writeDbHandle = () => {
    sendMsgToMain({key:'writeDb',data:{
      key:'electron-prokit',
      value:{
        name: 'electron-prokit',
        des: 'this is a electron kit'
      }
    }}).then(res => {
      console.log(res)
    })
  }

  const readDbHandle = () => {
    sendMsgToMain({key:'readDb',data:{
      key:'electron-prokit',
    }}).then(res => {
      console.log(res)
    })
  }

  return <div>
    <Divider>初始化DB</Divider>
    <Space direction="vertical">
    <Button type='primary' onClick={() => initDbHandle()}>初始化DB</Button>
    </Space>
    <Divider>写数据</Divider>
    <Space direction="vertical">
    <Button type='primary' onClick={() => writeDbHandle()}>写数据</Button>
    </Space>
    <Divider>读数据</Divider>
    <Space direction="vertical">
    <Button type='primary' onClick={() => readDbHandle()}>读取electron-prokit</Button>
    </Space>
  </div>
}

export default Db