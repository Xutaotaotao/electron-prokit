# 快速开始

## 总览

**electron-prokit**是一款基于 Electron 的桌面软件开发框架，让你拥有极致的桌面开发体验，适用于Vite相关生态。

主要由三个部分组成：

::: tip 脚手架
提供配置化的项目模板，让你快速开发Electron项目。
:::

::: tip 核心API
框架实现的核心功能，提供一些electron生态的解决方案。
:::

::: tip 插件
为框架提供额外支撑的插件，让使用者开发更加方便。
:::


不管是开发初学者还是经验丰富的开发者，都可以利用electron-prokit提升生产力，快速交付高质量的Electron应用。

你可以在[简介](./index)部分深入了解该项目的设计理念。

## 搭建第一个electron-prokit项目

::: warning  兼容性注意
electron-prokit 需要 Node.js 版本 18+。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本。
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

其中`myapp`为你的项目名，然后按照提示操作即可！

## 配置 electron-prokit

根目录配置`config`

- main.ts 主进程
- preload.ts 预加载
- render.ts 渲染进程
- work.ts work进程


## 演练

通过演练你可以更加详细地了解electron-prokit相关的功能。

```bash
git clone https://github.com/Xutaotaotao/electron-prokit.git

cd electron-prokit

pnpm i 

pnpm run dev

```

## 寻求帮助

如果你在开发过程中遇到 electron-prokit 的疑难问题，你可以去 [GitHub issue](https://github.com/Xutaotaotao/electron-prokit/issues?q=is%3Aissue) 查看是否有人已经遇到相同的问题。如果没有，欢迎[提交](https://github.com/Xutaotaotao/electron-prokit/issues/new) issue，另外你也可以在[GitHub Discussions](https://github.com/Xutaotaotao/electron-prokit/discussions) 社区来寻求帮助。