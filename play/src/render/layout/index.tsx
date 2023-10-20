import React, { useEffect, useReducer, useRef,useState } from "react";
import type { MenuProps } from "antd";
import { Button, Layout, Menu,theme } from "antd";
import { Link, useLocation, useOutlet } from "react-router-dom";
import { menus } from "./menu";

const { Header, Content, Sider } = Layout;

const Root: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [currentMenuKey, setCurrentMenuKey] = useState("/");

  const componentList = useRef(new Map());
  const outLet = useOutlet();
  const { pathname } = useLocation();
  const forceUpdate = useReducer((bool: any) => !bool, true)[1]; 

  const menuOnSelect: MenuProps["onSelect"] = (a) => {
    setCurrentMenuKey(a.key);
  };

  const currentMenuName = (key: string) => {
    const item = menus.find((menu) => menu.path === key);
    return item?.name || "Electron Prokit";
  };

  useEffect(() => {
    if (!componentList.current.has(pathname)) {
      componentList.current.set(pathname, outLet);
      forceUpdate()
    }
  }, [pathname]);

  return (
    <Layout>
      <Sider theme="light">
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          onSelect={menuOnSelect}
          selectedKeys={[currentMenuKey]}
          items={menus.map((menu) => ({
            key: menu.path,
            icon: React.createElement(menu.icon),
            label: <Link to={menu.path}>{menu.name}</Link>,
          }))}
        />
      </Sider>
      <Layout>
        <Header style={{ paddingLeft: 10, background: colorBgContainer, display:'flex',justifyContent:'space-between',alignItems:'center' }}>
          <div>{currentMenuName(currentMenuKey)}</div>
          <Button>中文</Button>
        </Header>
        <Content style={{ margin: "10px 16px 0" }}>
          <div style={{ padding: 10, minHeight: 360 }}>
            {Array.from(componentList.current).map(([key, component]) => (
              <div
                key={key}
                style={{ display: pathname === key ? "block" : "none",width:'100%',height:'100%' }}
              >
                {component}
              </div>
            ))}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Root;
