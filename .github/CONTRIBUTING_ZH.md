简体中文 | [English](./CONTRIBUTING.md)

# 贡献指南

你好！很高兴你有兴趣为Electron Prokit做出贡献！在提交贡献之前，请通过以下指南阅读。我们还建议您在文档中阅读项目理念。

## 项目目录结构说明

```bash
root
|---.changeset  # changeset 配置相关文件
|
|---.github  # github 配置相关文件
|
|---docs   # 项目文档
|
|---packages    # 包目录
|     |---create-electron-prokit    # 脚手架
|     |---create-service    # 用于快速创建electron相关服务
|     |---electron-prokit    # electron-prokit 核心包
|     |     |- src   # electron-prokit开发目录
|     |     |   |- db # 数据库模块
|     |     |   |- env # 环境判断env
|     |     |   |- ffi # 跨语言调用模块
|     |     |   |- hooks # 一些hooks
|     |     |   |- http # 网络请求模块
|     |     |   |- ipc # ipc通信模块
|     |     |   |- schedule # 定时任务模块
|     |     |   |- window # 窗口功能模块
|     |     |   |- index.ts # 核心导出
|     |     |   |- main.ts # 主进程相关函数
|     |     |   |- preload.ts # preload相关函数
|     |     |- test # 测试目录
|
|---play    # 演示项目
|     |---public   # 公共目录
|     |---resources   # 资源目录
|     |---scripts   # 脚本
|     |---src   # 演示项目开发目录
|     |     |- main   # 主进程
|     |     |- preload   # preload脚本
|     |     |- preload   # 渲染进程
|     |     |- util   # 工具库
|     |     |- work   # work进程
|     |---electron-builder.config.ts   # 打包配置
|     |---ep.config.ts   # 项目配置
```

## 本地开发

```
git clone https://github.com/Xutaotaotao/electron-prokit.git

pnpm i 

pnpm run dev

```

## 测试

每个package都有测试目录,在相应的包目录下运行`npm run test`

## Pull Request

- fork 项目
- 基于主分支创建分支进行修改
- 如果你修复了一个 bug 或者新增了一个功能，请确保写了相应的测试，这很重要。
- 确认所有的测试都是通过的 `npm run test`
- 然后进行Pull Request


## 开发相关资料

- pnpm: https://pnpm.io/zh/
- vite: https://cn.vitejs.dev/
- electron: https://www.electronjs.org/zh/