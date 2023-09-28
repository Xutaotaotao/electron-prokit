# Electron Prokit

<p align="center">
  <img style="width:500px" src="https://github.com/Xutaotaotao/electron-prokit/blob/main/docs/public/logo.svg" alt="logo">
</p>

简体中文 | [English](./README.md)

Electron Prokit 一款基于Electron的桌面软件开发框架。集合了很多Electron相关的开发工具和资源，让你拥有极致的桌面开发体验。

## 特点
- **样板模板**: 使用预配置的 Electron 应用程序模板快速入门，适用于各种用例。

- **CLI 工具**: 命令行工具，用于自动化常见任务，如项目初始化和打包 Electron 应用程序。

- **开发增强**: 有用的实用工具和扩展，简化开发工作流程。

- **最佳实践**: 有关为了可扩展性和可维护性而构建 Electron 应用程序的结构的指南和最佳实践。

- **丰富的API**: 进程通信、窗口管理、网络请求、跨语言调用、任务管理、数据库管理...

## 使用脚手架

创建electron项目的脚手架，结合了electron-prokit相关生态。

**安装依赖**

```bash
npm i @electron-prokit/cli -g
```

**使用**

```bash
electron-prokit-cli init [project]
```

其中`project`为项目名。项目创建完毕后安装依赖并启动项目。

```bash

cd project && yarn install

yarn run dev

```

## 单独安装

**NPM**

```bash
npm i electron-prokit
```

**Yarn**

```bash
yarn i electron-prokit
```


## 使用

详细的API文档以及一些教程在这里， [点击查看](https://xutaotaotao.github.io/electron-prokit/zh)

- [用 Vite 快速构建一个 Electron 项目](https://xutaotaotao.github.io/electron-prokit/zh/tutorials/create-vite-electron-service.html)


## Stargazers
[![Stargazers repo roster for electron-prokit](https://reporoster.com/stars/Xutaotaotao/electron-prokit)](https://github.com/Xutaotaotao/electron-prokit/stargazers)