# 简介

::: tip 提示
本指南假设你熟悉 [Electron](https://www.electronjs.org/) 和 [Vite](https://vitejs.dev/)，熟悉之后阅读本指南更加容易理解框架的设计思想。
:::

## 解决什么样的问题

Electron开发在社区中有很多的解决方案，比较了一些方案，大概有这些共同的问题：

- 繁琐的搭建Electron项目的步骤
- 无法自主选择前端框架
- 各个进程本地开发代码热更新问题
- 构建打包一体化配置问题
- 渲染进程调用无法抹平差异问题
- 缺少成套的企业级解决方案

electron-prokit旨在解决这些问题，让你拥有极致的桌面开发体验。

## 核心理念

因为Vite 有能力同时处理 Chromium 和 Node.js这两种环境的程序的能力，所以就单独写了 [@electron-prokit/create-service](https://www.npmjs.com/package/@electron-prokit/create-service) 这个插件去读取各个进程的vite配置，然后去创建各个服务，最后再融合到一起，这样不管是哪个进程的变动都可以进行热更新处理，达到跟开发传统Web开发一样的感觉，这也大大得提高了开发效率和调试效率。

![alt inner](/guide/inner.png)


## 注意事项

electron-prokit 严格按照[Electron最佳实践](https://www.electronjs.org/docs/latest/tutorial/security)，没有开启node集成(nodeIntegration)和关闭上下文隔离(contentIsolation)，框架内部的方法都是用contextBridge实现的。


