import { Button,Card, Modal, Space,Typography } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";
import { onMsgFromMain, sendMsgToMain } from "electron-prokit";
import { useEffect } from 'react';
const { Title } = Typography;


const Update = () => {

  const { t } = useTranslation();
  const [modal, contextHolder] = Modal.useModal();

  useEffect(() => {
    onMsgFromMain((_event: unknown, args: string) => {
      if (args === 'updateDownloaded') {
        modal.confirm({
          title: t('Hint'),
          icon: <ExclamationCircleOutlined />,
          content: t('The latest version has been downloaded. Do you want to update it'),
          okText: t('Confirm'),
          cancelText: t('Cancel'),
          onOk: () => {
            sendMsgToMain({key:'intsallUpdateApp'})
          }
        });
      }
    })
  },[])

  return <>
    <Space direction="vertical" style={{width:'100%'}}>
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
   {contextHolder}
  </> 
}

export default Update