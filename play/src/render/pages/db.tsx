import { Button, Divider, Space } from 'antd'
import {initDb,readDb,writeDb} from 'electron-prokit'

const Db = () => {

  const initDbHandle = () => {
    initDb().then((res:boolean) => {
      console.log(res)
    })
  }

  const writeDbHandle = () => {
    writeDb('electron-prokit',{hello:'im electron-prokit'})
  }

  const readDbHandle = () => {
    readDb('electron-prokit').then((res:any) => {
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