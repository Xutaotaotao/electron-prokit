import { Button, Card, Space } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  onMsgFromMain,
  sendMsgToMain,
  sendMsgToOtherRender,
} from "electron-prokit";

const Ipc = () => {
  const { t } = useTranslation();

  const [msgFromRenderMsgToMain, setMsgFromRenderMsgToMain] =
    useState<string>("");
  const [msgFromMain, setMsgFromMain] = useState("");

  useEffect(() => {
    onMsgFromMain((_event: unknown, args: string) => {
      setMsgFromMain(args);
    });
  }, []);

  const renderMsgToMainHandle = (msg: string) => {
    sendMsgToMain<string, string>(msg).then((result) => {
      setMsgFromRenderMsgToMain(result);
    });
  };

  const renderMsgToRenderHandle = (windowName: string, msg: string) => {
    sendMsgToOtherRender(windowName, msg);
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Card title={t("Send information to main process")} bordered={false}>
        <Space direction="vertical">
          <Button
            type="primary"
            onClick={() => renderMsgToMainHandle("sendMsgToMain Hello")}
          >
            {t("Send")}
          </Button>
          <div>
            {t("Here is the response information of the main process")}：
            {msgFromRenderMsgToMain}
          </div>
        </Space>
      </Card>

      <Card title={t("Receive messages from main process")} bordered={false}>
        <Space direction="vertical">
          <div>
            {t(
              "Click sendMsgToRender in the native menu bar to see the effect"
            )}
          </div>
          <div>
            {t("Here is the response information of the main process")}：
            {msgFromMain}
          </div>
        </Space>
      </Card>

      <Card title={t('Send messages between rendering processes')} bordered={false}>
        <Space direction="vertical">
          <Button
            type="primary"
            onClick={() => renderMsgToRenderHandle("work", "Hello Work")}
          >
            {t("Send")}
          </Button>
          <div>{t('You can view the messages sent by the rendering process through the work process console')}</div>
        </Space>
      </Card>
    </Space>
  );
};

export default Ipc;
