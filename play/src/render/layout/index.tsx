import React, { useContext, useEffect, useReducer, useRef, useState } from "react";
import type { MenuProps } from "antd";
import { Avatar, Button, Layout, Menu, Space, Typography, theme } from "antd";
import { Link, useLocation, useOutlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { readDb, writeDb } from "electron-prokit";
import Icon, { TranslationOutlined } from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import GlobalContext from '../context/global'
import i18n from "../locales";
import { menus } from "./menu";

const { Header, Content, Sider } = Layout;
const { Text } = Typography;

const Root: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [currentMenuKey, setCurrentMenuKey] = useState("/");
  const { t } = useTranslation();
  const componentList = useRef(new Map());
  const outLet = useOutlet();
  const { pathname } = useLocation();
  const forceUpdate = useReducer((bool: any) => !bool, true)[1];
  const [currentLang, setCurrentLang] = useState<string>("zh");
  const {changeTheme,themeData} = useContext(GlobalContext)


  const menuOnSelect: MenuProps["onSelect"] = (a) => {
    setCurrentMenuKey(a.key);
  };

  const currentMenuName = (key?: string) => {
    const item = menus.find((menu) => menu.path === key);
    if (item?.name) {
      return t(item?.name);
    } else {
      return "Electron Prokit";
    }
  };

  const changeLang = (lang?: string) => {
    if (lang) {
      setCurrentLang(lang);
      i18n.changeLanguage(lang);
      writeDb("lang", lang);
    } else {
      if (currentLang === "zh") {
        setCurrentLang("en");
        i18n.changeLanguage("en");
        writeDb("lang", "en");
      } else {
        setCurrentLang("zh");
        i18n.changeLanguage("zh");
        writeDb("lang", "zh");
      }
    }
  };

  const DarkSvg = () => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      focusable="false"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM17 15C17.476 15 17.9408 14.9525 18.3901 14.862C17.296 17.3011 14.8464 19 12 19C8.13401 19 5 15.866 5 12C5 8.60996 7.40983 5.78277 10.6099 5.13803C10.218 6.01173 10 6.98041 10 8C10 11.866 13.134 15 17 15Z"
      ></path>
    </svg>
  );

  const DarkIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={DarkSvg} {...props} />
  );

  const LightSvg = () => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      focusable="false"
      aria-hidden="true"
    >
      <path
        d="M10.5 1.5C10.5 0.671573 11.1716 0 12 0C12.8284 0 13.5 0.671573 13.5 1.5V2.5C13.5 3.32843 12.8284 4 12 4C11.1716 4 10.5 3.32843 10.5 2.5V1.5Z"
        fill="currentColor"
      ></path>
      <path
        d="M10.5 21.5C10.5 20.6716 11.1716 20 12 20C12.8284 20 13.5 20.6716 13.5 21.5V22.5C13.5 23.3284 12.8284 24 12 24C11.1716 24 10.5 23.3284 10.5 22.5V21.5Z"
        fill="currentColor"
      ></path>
      <path
        d="M24 12C24 11.1716 23.3284 10.5 22.5 10.5H21.5C20.6716 10.5 20 11.1716 20 12C20 12.8284 20.6716 13.5 21.5 13.5H22.5C23.3284 13.5 24 12.8284 24 12Z"
        fill="currentColor"
      ></path>
      <path
        d="M2.5 10.5C3.32843 10.5 4 11.1716 4 12C4 12.8284 3.32843 13.5 2.5 13.5H1.5C0.671573 13.5 0 12.8284 0 12C0 11.1716 0.671573 10.5 1.5 10.5H2.5Z"
        fill="currentColor"
      ></path>
      <path
        d="M20.4853 3.51472C19.8995 2.92893 18.9497 2.92893 18.364 3.51472L17.6569 4.22182C17.0711 4.80761 17.0711 5.75736 17.6569 6.34314C18.2426 6.92893 19.1924 6.92893 19.7782 6.34314L20.4853 5.63604C21.0711 5.05025 21.0711 4.1005 20.4853 3.51472Z"
        fill="currentColor"
      ></path>
      <path
        d="M4.22181 17.6569C4.8076 17.0711 5.75734 17.0711 6.34313 17.6569C6.92892 18.2426 6.92892 19.1924 6.34313 19.7782L5.63602 20.4853C5.05024 21.0711 4.10049 21.0711 3.5147 20.4853C2.92892 19.8995 2.92892 18.9497 3.5147 18.364L4.22181 17.6569Z"
        fill="currentColor"
      ></path>
      <path
        d="M3.5147 3.51472C2.92891 4.1005 2.92891 5.05025 3.5147 5.63604L4.22181 6.34315C4.80759 6.92893 5.75734 6.92893 6.34313 6.34315C6.92891 5.75736 6.92891 4.80761 6.34313 4.22183L5.63602 3.51472C5.05023 2.92893 4.10049 2.92893 3.5147 3.51472Z"
        fill="currentColor"
      ></path>
      <path
        d="M17.6569 19.7782C17.0711 19.1924 17.0711 18.2426 17.6569 17.6569C18.2426 17.0711 19.1924 17.0711 19.7782 17.6569L20.4853 18.364C21.0711 18.9497 21.0711 19.8995 20.4853 20.4853C19.8995 21.0711 18.9497 21.0711 18.364 20.4853L17.6569 19.7782Z"
        fill="currentColor"
      ></path>
      <path
        d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
        fill="currentColor"
      ></path>
    </svg>
  );

  const LightIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={LightSvg} {...props} />
  );


  const changeThemeAction = () => {
    if (themeData === 'darkAlgorithm') {
      changeTheme('defaultAlgorithm') 
    } else {
      changeTheme('darkAlgorithm') 
    }
  }

  useEffect(() => {
    if (!componentList.current.has(pathname)) {
      componentList.current.set(pathname, outLet);
      forceUpdate();
    }
  }, [pathname]);

  useEffect(() => {
    readDb("lang").then((res) => {
      if (res) {
        changeLang(res);
      }
    });
  }, []);

  return (
    <Layout>
      <Sider
        theme="light"
        style={{ borderInlineEnd: "1px solid rgba(5,5,5,0.06)" }}
      >
        <div style={{ padding: 10 }}>
          <Avatar
            size={"large"}
            style={{
              backgroundColor: "#fde3cf",
              color: "#f56a00",
              marginRight: "10px",
            }}
          >
            P
          </Avatar>
          <Text>Prokit</Text>
        </div>
        <Menu
          theme="light"
          mode="inline"
          style={{ borderInlineEnd: "none" }}
          onSelect={menuOnSelect}
          selectedKeys={[currentMenuKey]}
          items={menus.map((menu) => ({
            key: menu.path,
            icon: React.createElement(menu.icon),
            label: <Link to={menu.path}>{t(menu.name)}</Link>,
          }))}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "0 10px",
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>{currentMenuName(currentMenuKey)}</div>
          <Space>
          <Button icon={<TranslationOutlined />} onClick={() => changeLang()}>
            {currentLang === "zh" ? "En" : "中"}
          </Button>
          <Button icon={themeData === 'darkAlgorithm' ? <LightIcon /> : <DarkIcon />} onClick={() => changeThemeAction()}>
          </Button>
          </Space>
          
        </Header>
        <Content>
          <div style={{ padding: 10, height: "100%" }}>
            {Array.from(componentList.current).map(([key, component]) => (
              <div
                key={key}
                style={{
                  display: pathname === key ? "block" : "none",
                  width: "100%",
                  height: "100%",
                }}
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
