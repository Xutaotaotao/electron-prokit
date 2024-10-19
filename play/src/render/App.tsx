import { useEffect, useState } from "react";
import { ConfigProvider, theme } from "antd";
import { readDb, sendMsgToMain, writeDb } from "electron-prokit";
import GlobalContext from "./context/global.ts";
import "./App.css";
import AppRouter  from "./router";

function App() {

  const [themeData,setThemeData] = useState('defaultAlgorithm')

  const changeTheme = (val: 'darkAlgorithm' | 'defaultAlgorithm') => {
    setThemeData(val)
    writeDb('theme',val)
    sendMsgToMain({key:'changeTheme',data:val === 'darkAlgorithm' ? 'dark' : 'light'})
  }

  useEffect(() => {
    readDb('theme').then(res => {
      if (res) {
        setThemeData(res)
        sendMsgToMain({key:'changeTheme',data:res === 'darkAlgorithm' ? 'dark' : 'light'})
      } else {
        setThemeData('defaultAlgorithm')
        sendMsgToMain({key:'changeTheme',data:'light'})
      }
    }).catch(() => {
      setThemeData('defaultAlgorithm')
      sendMsgToMain({key:'changeTheme',data:'light'})
    })
  },[])

  return <ConfigProvider theme={{ algorithm: themeData === 'darkAlgorithm' ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
    <GlobalContext.Provider value={{
      changeTheme,
      themeData
    }}>
      <AppRouter />
    </GlobalContext.Provider>
  </ConfigProvider>;
}

export default App;
