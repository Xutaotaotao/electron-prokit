import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/electron-prokit/',
  title: "Electron-Prokit",
  description: "Use electron like a pro",
  head: [
    ['link', 
      { rel: 'icon', href: '/favicon.ico' }
    ],
    [
      'meta',
      {name: 'referrer',content: 'no-referrer'},
    ],
    ['meta', { name: 'cache-control', content:'max-age=0, s-maxage=3600'}]
  ],
  themeConfig: {
    logo: '/headlogo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指引', link: '/guide/', activeMatch: '/guide/' },
      { text: 'API', link: '/api/', activeMatch: '/api/' },
      { text: '插件', link: '/plugin/', activeMatch: '/plugin/' },
      { text: '教程', link: '/tutorials/', activeMatch: '/tutorials/'}
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            {
              text: '开始',
              link: '/guide/',
            },
          ]
        },
      ],
      '/api/': [
        {
          text: 'API',
          items: [
            {
              text: 'API 总览',
              link: '/api/',
            },
            {
              text: 'window 窗口',
              link: '/api/electron-prokit/window',
            },
            {
              text: 'ipc 进程通信',
              link: '/api/electron-prokit/ipc',
            },
            {
              text: 'http 网络',
              link: '/api/electron-prokit/http',
            },
            {
              text: 'ffi 跨语言调用',
              link: '/api/electron-prokit/ffi',
            },
            {
              text: 'schedule 任务管理',
              link: '/api/electron-prokit/schedule',
            }
          ]
        },
      ],
      '/plugin/':[
        {
          text: '插件',
          items: [
            {
              text: '插件 总览',
              link: '/plugin/',
            },
            {
              text: 'create-vite-electron-service',
              link: '/plugin/create-vite-electron-service',
            },
          ]
        }
      ],
      '/tutorials/': [
        {
          text: '教程',
          items: [
            {
              text: '教程总览',
              link: '/tutorials/',
            },
            {
              text: ' 用Vite快速构建一个Electron项目',
              link: '/tutorials/create-vite-electron-service',
            }
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Xutaotaotao/electron-prokit' }
    ]
  }
})
