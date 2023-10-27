# Getting Started

## Overview

**electron-prokit** is a desktop application development framework based on Electron, giving you an ultimate desktop development experience, suitable for Vite related ecosystems. It mainly consists of three parts:

::: tip Scaffolding
Provides configurable project templates to quickly develop Electron projects.
:::

::: tip Core API
The core functionalities implemented by the framework, providing solutions for the Electron ecosystem.

:::

::: tip Plugins
Additional plugins that provide extra support for the framework, making development more convenient for users.
:::

Whether you are a beginner developer or an experienced one, you can leverage electron-prokit to improve productivity and quickly deliver high-quality Electron applications.

You can learn more about the design philosophy of this project in the [Introduction](./index) section.

## Building Your First electron-prokit Project
::: warning Compatibility Note
electron-prokit requires Node.js version 14.18+, 16+. However, some templates may depend on higher Node versions to function properly. Please watch out for warnings from your package manager and upgrade Node when necessary.
:::

Directly use the scaffolding to quickly create a project. The scaffolding integrates electron-prokit related ecosystems, so it is recommended to use this method.

With NPM:

```bash
npm create electron-prokit myapp
```

With Yarn:

```bash
yarn create electron-prokit myapp
```

Where myapp is your project name. Then follow the prompts to complete!

## Configuring electron-prokit

Configure `ep.config.ts` in root directory

```ts
// ep.config.ts

export default {

  main: {
    // Main process 
    // vite config options
  },

  preload: { 
    // Preload script
    // vite config options
  },

  renderer: {
    // Renderer process 
    // vite config options
  },

  work: {
    // Work process / Optional 
    // A hidden window process / Can do some tasks
    // vite config options
  },

  electronPath: '' // Path to electron
}
```

## Playground

By walking through the demo you can learn more about electron-prokit's functionalities in details.

```bash
git clone https://github.com/Xutaotaotao/electron-prokit.git
cd electron-prokit
pnpm i
pnpm run dev
```

## Seeking Help

If you encounter any problems with electron-prokit during development, you can check out [GitHub Issues](https://github.com/Xutaotaotao/electron-prokit/issues?q=is%3Aissue) to see if someone has run into the same problem. If not, feel free to open a [new issue](https://github.com/Xutaotaotao/electron-prokit/issues/new). You can also seek help in the [GitHub Discussions](https://github.com/Xutaotaotao/electron-prokit/discussions) community.