import { Button, Card, Space } from 'antd'
import { initDb, readDb, writeDb } from 'electron-prokit'

const Db = () => {

  const initDbHandle = () => {
    initDb().then((res: boolean) => {
      console.log(res)
    })
  }

  const writeDbHandle = () => {
    writeDb('electron-prokit', { hello: 'im electron-prokit' })
  }

  const readDbHandle = () => {
    readDb('electron-prokit').then((res: any) => {
      console.log(res)
    })
  }

  return <Space direction="vertical" style={{ width: '100%' }}>

    <Card title="初始化DB" bordered={false}>
      <Button type='primary' onClick={() => initDbHandle()}>初始化DB</Button>
    </Card>

    <Card title="写数据" bordered={false}>
    <Button type='primary' onClick={() => writeDbHandle()}>写数据</Button>
    </Card>

    <Card title="读数据" bordered={false}>
    <Button type='primary' onClick={() => readDbHandle()}>读取electron-prokit</Button>
    </Card>

  </Space>
}

export default Db