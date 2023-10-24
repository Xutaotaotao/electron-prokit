import i18n from "i18next"; 
import { initReactI18next } from 'react-i18next'; 
import enUsTrans from "./en-us.json";
import zhCnTrans from "./zh-cn.json";

i18n   
.use(initReactI18next)
.init({
  resources: {
    en: {
      translation: enUsTrans,
    },
    zh: {
      translation: zhCnTrans,
    },
  },
  detection: {
    order: ['queryString', 'cookie'],
    caches: ['cookie']
  },
  fallbackLng: 'zh', 
  debug: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n