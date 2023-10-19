import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { Link, Outlet } from "react-router-dom";
import {menus} from './menu'


const { Header, Content, Sider } = Layout;

const Root: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [currentMenuKey,setCurrentMenuKey] = useState('Electron Prokit')


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
        <Content style={{ margin: '10px 16px 0' }}>
          <div style={{ padding: 10, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Root;