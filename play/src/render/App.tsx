import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import { ConfigProvider, theme } from "antd";
import { readDb, writeDb } from "electron-prokit";
import GlobalContext from "./context/global.ts";
import "./App.css";
import router from "./router";

function App() {

  const [themeData,setThemeData] = useState('defaultAlgorithm')

  const changeTheme = (val: 'darkAlgorithm' | 'defaultAlgorithm') => {
    setThemeData(val)
    writeDb('theme',val)
  }

  useEffect(() => {
    readDb('theme').then(res => {
      if (res) {
        setThemeData(res)
      } else {
        setThemeData('defaultAlgorithm')
      }
    }).catch(() => {
      setThemeData('defaultAlgorithm')
    })
  },[])

  return <ConfigProvider theme={{ algorithm: themeData === 'darkAlgorithm' ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
    <GlobalContext.Provider value={{
      changeTheme,
      themeData
    }}>
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  </ConfigProvider>;
}

export default App;
