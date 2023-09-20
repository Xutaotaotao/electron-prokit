import { Button, Divider, Space } from "antd";
import { useState } from "react";

const Ffi = () => {
  const [msgFromFfiSum, setMsgFromFfiSum] = useState<number>();
  const [msgFromFfiMul, setMsgFromFfiMul] = useState<number>();
  const [msgFromFfiDiv, setMsgFromFfiDiv] = useState<number>();

  const renderMsgToMain = (msg: any) => {
    window.electronProkit.renderMsgToMain<any, number>(msg).then((result) => {
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
    <div>
      <Divider>调用ffi注册的单个sum方法</Divider>
      <Space direction="vertical">
        <Button
          type="primary"
          onClick={() => renderMsgToMain({ key: "nativeSum" })}
        >
          调用ffi的sum
        </Button>
        <div>这里ffi的sum的返回值：{msgFromFfiSum}</div>
      </Space>
      <Divider>调用ffi注册的多个方法：mul和div</Divider>
      <Space direction="vertical">
        <div>
          <Space direction="vertical">
            <Button
              type="primary"
              onClick={() => renderMsgToMain({ key: "nativeMul" })}
            >
              调用ffi的mul
            </Button>
            <div>这里ffi的mul的返回值：{msgFromFfiMul}</div>
          </Space>
        </div>

        <div style={{marginTop:20}}>
          <Space direction="vertical">
            <Button
              type="primary"
              onClick={() => renderMsgToMain({ key: "nativeDiv" })}
            >
              调用ffi的div
            </Button>
            <div>这里ffi的div的返回值：{msgFromFfiDiv}</div>
          </Space>
        </div>
      </Space>
    </div>
  );
};

export default Ffi;
