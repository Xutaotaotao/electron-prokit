# 开始

## 总览

Electron-Prokit是一个Electron应用开发框架，其中涵盖了Electron应用开发的全流程，适用于Vite相关生态。

::: tip 项目初始化
提供配置化的项目模板、多种UI框架选择和代码规范预设。
:::

::: tip 开发
调试、热更新等解决方案，大量API及工具供你选择。
:::

::: tip 构建打包
提供配置文件，一键打包多个平台的应用。
:::

不管是开发初学者还是经验丰富的开发者,都可以利用Prokit提升生产力,快速交付高质量的Electron应用。

## 使用脚手架

直接使用脚手架快捷创建项目，脚手架结合了electron-prokit相关生态，推荐使用此方式。

**安装脚手架**

```bash
npm i @electron-prokit/cli -g
```

**创建项目**


```bash
electron-prokit-cli init project
```

其中`project`为项目名。

**启动项目**
```bash
cd project && yarn install

yarn run dev
```


## 单独安装

使用 NPM:

```bash
npm i electron-prokit
```
使用 Yarn:

```bash
yarn i electron-prokit
```

## 使用

详细的API文档在这里，<a href="https://xutaotaotao.github.io/electron-prokit/zh/api/">点击查看</a>

- <a href="https://xutaotaotao.github.io/electron-prokit/zh/tutorials/create-vite-electron-service.html">用 Vite 快速构建一个 Electron 项目</a>


## 演练

```bash
git clone https://github.com/Xutaotaotao/electron-prokit.git

cd electron-prokit

pnpm i 

pnpm run dev

```