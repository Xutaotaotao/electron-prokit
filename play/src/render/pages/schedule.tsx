import { Button, Divider, Space } from 'antd'
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

  return <div>
    <Divider>注册一个任务并运行</Divider>
    <Space direction="vertical">
    <Button type='primary' onClick={() => runScheduleTest()}>注册并运行一个任务</Button>
    </Space>
    <Divider>停止一个任务</Divider>
    <Space direction="vertical">
    <Button type='primary' onClick={() => stopSchedule('runScheduleTest')}>停止一个任务</Button>
    </Space>
  </div>
}

export default Schedule