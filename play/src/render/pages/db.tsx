import { Button, Card, Space } from 'antd'
import { readDb, writeDb } from 'electron-prokit'
import { useTranslation } from "react-i18next";


const Db = () => {  
  const { t } = useTranslation();

  const writeDbHandle = () => {
    writeDb('electron-prokit', { hello: 'im electron-prokit' })
  }

  const readDbHandle = () => {
    readDb('electron-prokit').then((res: any) => {
      console.log(res)
    })
  }

  return <Space direction="vertical" style={{ width: '100%' }}>
    <Card title={t('Write data to db')} bordered={false}>
    <Button type='primary' onClick={() => writeDbHandle()}>{t('Write data to db')}</Button>
    </Card>

    <Card title={t('Read db data')} bordered={false}>
    <Button type='primary' onClick={() => readDbHandle()}>{t('Read db data')}</Button>
    </Card>

  </Space>
}

export default Db