
import { ComponentClass, FunctionComponent } from 'react';
import { UploadOutlined,WifiOutlined,UsbOutlined,FilterOutlined,DatabaseOutlined } from '@ant-design/icons';


export interface Menu {
  path:string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: string | FunctionComponent<any> | ComponentClass<any, any>;
  name:string;
}

export const menus:Array<Menu> = [
  {path:'ipc',icon: UploadOutlined,name:'跨进程通信' },
  {path:'http',icon: WifiOutlined,name:'网络请求' },
  {path:'ffi',icon: UsbOutlined,name:'跨语言调用' },
  {path:'schedule',icon: FilterOutlined,name:'任务管理' },
  {path:'db',icon: DatabaseOutlined,name:'本地数据管理' },
]
