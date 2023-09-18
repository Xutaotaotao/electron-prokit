import React, { ComponentClass, FunctionComponent, useState } from 'react';
import type { MenuProps } from 'antd';
import { UploadOutlined,WifiOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Outlet,Link } from "react-router-dom";

interface Menu {
  path:string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: string | FunctionComponent<any> | ComponentClass<any, any>;
  name:string;
}

const { Header, Content, Footer, Sider } = Layout;

const Root: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [currentMenuKey,setCurrentMenuKey] = useState('Electron Prokit')

  const menus:Array<Menu> = [
    {path:'ipc',icon: UploadOutlined,name:'跨进程通信' },
    {path:'http',icon: WifiOutlined,name:'网络请求' }
  ]

  const menuOnSelect:MenuProps['onSelect'] = (a) => {
    setCurrentMenuKey(a.key)
  }

  const currentMenuName = (key:string) => {
    const item = menus.find(menu => menu.path === key)
    return item?.name || 'Electron Prokit'
  }

  return (
    <Layout>
      <Sider
        theme='light'
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          onSelect={menuOnSelect}
          items={menus.map(
            (menu) => ({
              key: menu.path,
              icon: React.createElement(menu.icon),
              label:  <Link to={menu.path}>{menu.path}</Link>
            }),
          )}
        />
      </Sider>
      <Layout>
        <Header style={{ paddingLeft: 10, background: colorBgContainer }}> {currentMenuName(currentMenuKey)} </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Electron Prokit ©2023 Created by Taotao</Footer>
      </Layout>
    </Layout>
  );
};

export default Root;