# Electron Prokit

<p align="center">
  <img style="width:500px" src="https://github.com/Xutaotaotao/electron-prokit/blob/main/docs/public/logo.svg" alt="logo">
</p>

简体中文 | [English] (./README.md)

Electron Prokit 是一组用于构建 Electron 应用程序的开发工具和资源。不论是初学者还是经验丰富的开发人员，Electron Prokit 提供了一套实用工具、模板和最佳实践，以简化 Electron 应用程序开发过程。

## 特点
- 样板模板: 使用预配置的 Electron 应用程序模板快速入门，适用于各种用例。

- CLI 工具: 命令行工具，用于自动化常见任务，如项目初始化和打包 Electron 应用程序。

- 开发增强: 有用的实用工具和扩展，简化开发工作流程。

- 最佳实践: 有关为了可扩展性和可维护性而构建 Electron 应用程序的结构的指南和最佳实践。

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

**⚠️注意事项⚠️**

单独安装使用需要提前注入相应的环境变量，[教程](https://xutaotaotao.github.io/electron-prokit/zh/tutorials/create-vite-electron-service.html)

现阶段没有暴露相关的环境变量注入API接口，后续会优化，建议使用脚手架初始化项目。


## 文档

详细的API文档以及一些教程在这里， [点击查看](https://xutaotaotao.github.io/electron-prokit/zh)


## Stargazers
[![Stargazers repo roster for electron-prokit](https://reporoster.com/stars/Xutaotaotao/electron-prokit)](https://github.com/Xutaotaotao/electron-prokit/stargazers)