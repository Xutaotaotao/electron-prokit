import { Button,Card, Space } from 'antd'
import {registerSchedule,runSchedule,stopSchedule} from 'electron-prokit'
import { useTranslation } from "react-i18next";


const Schedule = () => {
  const { t } = useTranslation();

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
    <Card title={t('Register a task and run it')} bordered={false}>
     <Button type='primary' onClick={() => runScheduleTest()}>{t('Start')}</Button>
    </Card>

    <Card title={t("Stop a task")} bordered={false}>
      <Button type='primary' onClick={() => stopSchedule('runScheduleTest')}>{t('Stop')}</Button>
    </Card>
  </Space>
}

export default Schedule