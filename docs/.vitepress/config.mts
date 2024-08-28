import { DefaultTheme, defineConfig } from "vitepress";

const zhThemeConfig: DefaultTheme.Config | undefined = {
  logo: "/headlogo.svg",
  nav: [
    { text: "指引", link: "/zh/guide/", activeMatch: "/guide/" },
    { text: "API", link: "/zh/api/", activeMatch: "/api/" },
    { text: "插件", link: "/zh/plugin/", activeMatch: "/plugin/" },
    { text: "教程", link: "/zh/tutorials/", activeMatch: "/tutorials/" },
    { text: '友情链接', items:[
      { text: "前端徐徐", link: 'https://taotaoxu.com' },
      { text: '悟空壁纸', link: 'https://github.com/Xutaotaotao/wukong-wallpaper' },
      { text: 'FindAll', link: 'https://findallteam.github.io' },
      { text: 'XTools', link: 'https://taotaoxu.com/XTools' },
      { text: 'GetInstalledApps', link: 'https://github.com/Xutaotaotao/get-installed-apps' },
    ]}
  ],

  sidebar: {
    "/zh/guide/": [
      {
        text: "指引",
        items: [
          {
            text: "简介",
            link: "/zh/guide/",
          },
          {
            text: "快速开始",
            link: "/zh/guide/start",
          },
        ],
      },
    ],
    "/zh/api/": [
      {
        text: "API",
        items: [
          {
            text: "API 总览",
            link: "/zh/api/",
          },
          {
            text: "ipc 进程通信",
            link: "/zh/api/electron-prokit/ipc",
          },
          {
            text: "window 窗口",
            link: "/zh/api/electron-prokit/window",
          },
          {
            text: "http 网络",
            link: "/zh/api/electron-prokit/http",
          },
          {
            text: "ffi 跨语言调用",
            link: "/zh/api/electron-prokit/ffi",
          },
          {
            text: "schedule 任务管理",
            link: "/zh/api/electron-prokit/schedule",
          },
          {
            text: "db 数据库管理",
            link: "/zh/api/electron-prokit/db",
          },
          {
            text: "update 更新管理",
            link: "/zh/api/electron-prokit/update",
          },
        ],
      },
    ],
    "/zh/plugin/": [
      {
        text: "插件",
        items: [
          {
            text: "插件 总览",
            link: "/zh/plugin/",
          },
          {
            text: "create-service",
            link: "/zh/plugin/create-service",
          },
        ],
      },
    ],
    "/zh/tutorials/": [
      {
        text: "教程",
        items: [
          {
            text: "教程总览",
            link: "/zh/tutorials/",
          },
          {
            text: " 用Vite+React快速构建一个Electron项目",
            link: "/zh/tutorials/create-vite-electron-service",
          },
          {
            text: " 用Vite+Vue3快速构建一个Electron项目",
            link: "/zh/tutorials/create-vite-electron-service-vue",
          },
        ],
      },
    ],
  },

  socialLinks: [
    {
      icon: "github",
      link: "https://github.com/Xutaotaotao/electron-prokit",
    },
  ],
};

const themeConfig: DefaultTheme.Config | undefined = {
  logo: "/headlogo.svg",
  nav: [
    { text: "Guide", link: "/guide/", activeMatch: "/guide/" },
    { text: "API", link: "/api/", activeMatch: "/api/" },
    { text: "Plugin", link: "/plugin/", activeMatch: "/plugin/" },
    { text: "Tutorials", link: "/tutorials/", activeMatch: "/tutorials/" },
    { text: 'Friendly links', items:[
      { text: "Xuxu's Blog ", link: 'https://taotaoxu.com' },
      { text: 'FindAll', link: 'https://findallteam.github.io' },
      { text: 'XTools', link: 'https://taotaoxu.com/XTools' },
      { text: 'GetInstalledApps', link: 'https://github.com/Xutaotaotao/get-installed-apps' },
      { text: 'WukongWallpaper', link: 'https://github.com/Xutaotaotao/wukong-wallpaper' },
    ]}
  ],

  sidebar: {
    "/guide/": [
      {
        text: "Guide",
        items: [
          {
            text: "Introduction",
            link: "/guide/",
          },
          {
            text: "Start",
            link: "/guide/start",
          },
        ],
      },
    ],
    "/api/": [
      {
        text: "API",
        items: [
          {
            text: "All API",
            link: "/api/",
          },
          {
            text: "ipc",
            link: "/api/electron-prokit/ipc",
          },
          {
            text: "window",
            link: "/api/electron-prokit/window",
          },
          {
            text: "http",
            link: "/api/electron-prokit/http",
          },
          {
            text: "ffi",
            link: "/api/electron-prokit/ffi",
          },
          {
            text: "schedule",
            link: "/api/electron-prokit/schedule",
          },
          {
            text: "db",
            link: "/api/electron-prokit/db",
          },
          {
            text: "update",
            link: "/api/electron-prokit/update",
          },
        ],
      },
    ],
    "/plugin/": [
      {
        text: "Plugin",
        items: [
          {
            text: "All plugins",
            link: "/plugin/",
          },
          {
            text: "create-service",
            link: "/plugin/create-service",
          },
        ],
      },
    ],
    "/tutorials/": [
      {
        text: "Tutorials",
        items: [
          {
            text: "All tutorials",
            link: "/tutorials/",
          },
          {
            text: "Build an Electron Project Quickly with Vite and React",
            link: "/tutorials/create-vite-electron-service",
          },
          {
            text: "Build an Electron Project Quickly with Vite and Vue3",
            link: "/tutorials/create-vite-electron-service-vue",
          },
        ],
      },
    ],
  },

  socialLinks: [
    {
      icon: "github",
      link: "https://github.com/Xutaotaotao/electron-prokit",
    },
  ],
};

export default defineConfig({
  base: "/electron-prokit/",
  title: "Electron-Prokit",
  description: "Use electron like a pro",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "referrer", content: "no-referrer" }],
    ["meta", { name: "cache-control", content: "max-age=0, s-maxage=3600" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "electron-prokit,Electron-Prokit,Electron Prokit,electron prokit,electron,prokit,electron tool, electron 开发,electron 工具",
      },
    ],
  ],
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig,
    },
    zh: {
      label: "简体中文",
      lang: "zh",
      link: "/zh/",
      themeConfig: zhThemeConfig,
    },
  },
  vite: {
    server: {
      port:8090
    }
  }
});
