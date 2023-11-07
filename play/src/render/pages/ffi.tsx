import { Button, Card, Space } from "antd";
import { sendMsgToMain } from "electron-prokit";
import { useState } from "react";
import { useTranslation } from "react-i18next";


const Ffi = () => {
  const { t } = useTranslation();

  const [msgFromFfiSum, setMsgFromFfiSum] = useState<number>();
  const [msgFromFfiMul, setMsgFromFfiMul] = useState<number>();
  const [msgFromFfiDiv, setMsgFromFfiDiv] = useState<number>();

  const renderMsgToMain = (msg: Msg) => {
    sendMsgToMain<Msg, number>(msg).then((result) => {
      if (msg.key === "nativeSum") {
        setMsgFromFfiSum(result);
      }
      if (msg.key === "nativeMul") {
        setMsgFromFfiMul(result);
      }
      if (msg.key === "nativeDiv") {
        setMsgFromFfiDiv(result);
      }
    });
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Card title={t('Call a single method registered by ffi')} bordered={false}>
        <Space direction="vertical">
          <Button
            type="primary"
            onClick={() => renderMsgToMain({ key: "nativeSum" })}
          >
            {t('Call the sum of ffi')}
          </Button>
          <div>{t('Here is the return value of the call')}：{msgFromFfiSum}</div>
        </Space>
      </Card>

      <Card title={t('Call multiple methods registered by ffi')} bordered={false}>
        <Space direction="vertical">
          <div>
            <Space direction="vertical">
              <Button
                type="primary"
                onClick={() => renderMsgToMain({ key: "nativeMul" })}
              >
                {t('Call the mul of ffi')}
              </Button>
              <div>{t('Here is the return value of the call')}：{msgFromFfiMul}</div>
            </Space>
          </div>

          <div style={{ marginTop: 20 }}>
            <Space direction="vertical">
              <Button
                type="primary"
                onClick={() => renderMsgToMain({ key: "nativeDiv" })}
              >
                 {t('Call the div of ffi')}
              </Button>
              <div>{t('Here is the return value of the call')}：{msgFromFfiDiv}</div>
            </Space>
          </div>
        </Space>
      </Card>
    </Space>
  );
};

export default Ffi;
