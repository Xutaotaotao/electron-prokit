
import type { ComponentClass, FunctionComponent } from 'react';
import { DatabaseOutlined,FilterOutlined,HomeOutlined,UploadOutlined,UsbOutlined,WifiOutlined } from '@ant-design/icons';
import i18n from '../locales'


export interface Menu {
  path:string;
  icon: string | FunctionComponent<any> | ComponentClass<any, any>;
  name:string;
}

export const menus:Array<Menu> = [
  {path:'/',icon: HomeOutlined,name:i18n.t('home') },
  {path:'ipc',icon: UploadOutlined,name:i18n.t("ipc") },
  {path:'http',icon: WifiOutlined,name:i18n.t("http") },
  {path:'ffi',icon: UsbOutlined,name:i18n.t("ffi") },
  {path:'schedule',icon: FilterOutlined,name:i18n.t("schedule") },
  {path:'db',icon: DatabaseOutlined,name:i18n.t("db") },
]
