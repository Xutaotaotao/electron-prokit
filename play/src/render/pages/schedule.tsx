import { Button,Card, Space } from 'antd'
import {registerSchedule,runSchedule,stopSchedule} from 'electron-prokit'

const Schedule = () => {

  const runScheduleTest = () => {
    registerSchedule({
      name:'runScheduleTest',
      fun: () => {
        console.log('registerSchedule')
      },
      interval: 3000
    })
    runSchedule('runScheduleTest')
  }

  return <Space direction="vertical" style={{width:'100%'}}>
    <Card title="注册一个任务并运行" bordered={false}>
     <Button type='primary' onClick={() => runScheduleTest()}>注册并运行一个任务</Button>
    </Card>

    <Card title="停止一个任务" bordered={false}>
      <Button type='primary' onClick={() => stopSchedule('runScheduleTest')}>停止一个任务</Button>
    </Card>
  </Space>
}

export default Schedule