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
      {name: 'referrer',content: 'no-referrer'}
    ]
  ],
  themeConfig: {
    logo: '/headlogo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指引', link: '/guide/', activeMatch: '/guide/' },
      { text: 'API', link: '/api/', activeMatch: '/api/' },
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
              text: 'create-vite-electron-service',
              link: '/api/create-vite-electron-service',
            },
            {
              text: 'electron-prokit',
              items: [
                {
                  text: 'window',
                  link: '/api/electron-prokit/window',
                }
              ]
            }
          ]
        },
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
