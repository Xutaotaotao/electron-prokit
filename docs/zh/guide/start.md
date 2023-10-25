# 开始

## 总览

Electron-Prokit是一个Electron应用开发框架，其中涵盖了Electron应用开发的全流程，适用于Vite相关生态。

::: tip 项目初始化
提供配置化的项目模板、Vue + React框架选择和代码规范预设。
:::

::: tip 开发
调试、热更新等解决方案，大量API及工具供你选择。
:::

::: tip 构建打包
提供配置文件，一键打包多个平台的应用。
:::

不管是开发初学者还是经验丰富的开发者,都可以利用Prokit提升生产力,快速交付高质量的Electron应用。

## 搭建第一个Electron-Prokit项目

::: warning  兼容性注意
Electron-Prokit 需要 Node.js 版本 14.18+，16+。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本。
:::

直接使用脚手架快捷创建项目，脚手架结合了electron-prokit相关生态，推荐使用此方式。

使用 NPM:

```bash
npm create electron-prokit myapp
```

使用 Yarn:

```bash
yarn create electron-prokit myapp
```

其中`myapp`为你的项目名,然后按照提示操作即可！


## 演练

```bash
git clone https://github.com/Xutaotaotao/electron-prokit.git

cd electron-prokit

pnpm i 

pnpm run dev

```