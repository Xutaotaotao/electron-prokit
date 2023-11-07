
import type { ComponentClass, FunctionComponent } from 'react';
import { CloudSyncOutlined,ClusterOutlined,DatabaseOutlined,FilterOutlined,HomeOutlined,UsbOutlined,WifiOutlined } from '@ant-design/icons';


export interface Menu {
  path:string;
  icon: string | FunctionComponent<any> | ComponentClass<any, any>;
  name:string;
}

export const menus:Array<Menu> = [
  {path:'/',icon: HomeOutlined,name:'home' },
  {path:'/ipc',icon: ClusterOutlined,name:"ipc" },
  {path:'/http',icon: WifiOutlined,name:"http" },
  {path:'/ffi',icon: UsbOutlined,name:"ffi" },
  {path:'/schedule',icon: FilterOutlined,name:"schedule" },
  {path:'/db',icon: DatabaseOutlined,name:"db" },
  {path:'/update',icon: CloudSyncOutlined,name:"update" },
]
