import { Button, Card,Space, } from 'antd'
import { http,sendMsgToMain } from 'electron-prokit'
import { useTranslation } from "react-i18next";


const Http = () => {

  const { t } = useTranslation();

  const httpTest = () => {
    http({
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      method: 'get'
    }).then(res => {
      console.log(res)
    })
  }

  const httpMainTest = () => {
    sendMsgToMain<Msg, number>({ key: 'testGetHttp' }).then((res) => {
      console.log(res)
    })
  }

  return <Space direction="vertical" style={{width:'100%'}}>
    <Card title={t('The render process initiates a request')} bordered={false}>
      <Button type='primary' onClick={() => httpTest()}>{t('Initiates a request')}</Button>
    </Card>
    <Card title={t("The render process sends a message to the main process to initiate an http request")} bordered={false}>
      <Button type='primary' onClick={() => httpMainTest()}>{t('Initiates a request')}</Button>
    </Card>
  </Space>
}

export default Http