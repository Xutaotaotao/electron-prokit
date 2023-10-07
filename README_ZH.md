<div align="center">
  <p align="center">
    <img style="width:300px" src="https://github.com/Xutaotaotao/electron-prokit/blob/main/docs/public/logo.svg" alt="logo">
  </p>
  <h1>Electron Prokit</h1>
  <p>一款基于 Electron 的桌面软件开发框架,让你拥有极致的桌面开发体验。</p>

  ![github workflow](https://github.com/Xutaotaotao/electron-prokit/actions/workflows/release.yml/badge.svg) ![npm downloads](https://img.shields.io/npm/dm/electron-prokit) ![npm version](https://img.shields.io/npm/v/electron-prokit) ![license](https://img.shields.io/github/license/Xutaotaotao/electron-prokit?color=%232dce89&logo=github&style=flat-square)
</div>



简体中文 | [English](./README.md)


## ✨ 特性

- **⚙️ CLI 工具**: 使用脚手架快速上手，脚手架内置 React 和 Vue 两种前端框架的 Electron 应用程序。

- **🛡 开发增强**: 使用 TypeScript 开发，提供完整的类型定义文件。

- **📦 最佳实践**: 提供可扩展性和可维护性的 Electron 应用程序的最佳实践。

- **🎨 丰富的 API**: 进程通信、窗口管理、网络请求、跨语言调用、任务管理、数据库管理...

## 🔧 使用脚手架

创建 electron 项目的脚手架，结合了 electron-prokit 相关生态，一键初始化项目

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

## 📦 单独安装

**NPM**

```bash
npm i electron-prokit
```

**Yarn**

```bash
yarn i electron-prokit
```

## 📖 官方文档

<a href="https://xutaotaotao.github.io/electron-prokit/zh" target="_blank">文档首页</a>

<a href="https://xutaotaotao.github.io/electron-prokit/zh/api" target="_blank">API</a>

<a href="https://xutaotaotao.github.io/electron-prokit/zh/plugin" target="_blank">插件</a>

<a href="https://xutaotaotao.github.io/electron-prokit/zh/tutorials" target="_blank">教程</a>



## ⌨️ 演练

```bash
git clone https://github.com/Xutaotaotao/electron-prokit.git

pnpm i

pnpm run dev

```

## 👥 Stargazers

[![Stargazers repo roster for electron-prokit](https://reporoster.com/stars/Xutaotaotao/electron-prokit)](https://github.com/Xutaotaotao/electron-prokit/stargazers)
