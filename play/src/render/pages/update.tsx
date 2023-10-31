import { Button,Card, Modal, Space,Typography } from 'antd'
import { useTranslation } from "react-i18next";
import { offMsgFromMain, onMsgFromMain, sendMsgToMain } from "electron-prokit";
import { useEffect } from 'react';
const { Title } = Typography;


const Update = () => {

  const { t } = useTranslation();

  useEffect(() => {
    const handleMsg = (_event: unknown, args: string) => {
      if (args === 'updateDownloaded') {
        Modal.info({
          'title': '更新提示',
          'content': '新版本已经下载完成，去更新吧'
        })
      }
    };
  
    onMsgFromMain(handleMsg);
    
    return () => {
      offMsgFromMain(handleMsg);
    };
  }, []);

  return <Space direction="vertical" style={{width:'100%'}}>
    <Card title={t('Current version')} bordered={false}>
      <Title style={{ marginTop: 0 }} level={3}>
          1.0.0
      </Title>
    </Card>

    <Card title={t("Check for updates")} bordered={false}>
      <Button type='primary' onClick={() => {
        sendMsgToMain({key:'update'})
      }}>{t('Start')}</Button>
    </Card>
  </Space>
}

export default Update