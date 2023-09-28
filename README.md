# Electron Prokit

<p align="center">
  <img style="width:500px" src="https://github.com/Xutaotaotao/electron-prokit/blob/main/docs/public/logo.svg" alt="logo">
</p>

English | [简体中文](./README_ZH.md)

Electron Prokit is a collection of development tools and resources for building applications with Electron. Whether you're new to Electron or an experienced developer, Electron Prokit provides a set of utilities, templates, and best practices to streamline your Electron application development.


## Features

- **Boilerplate Templates**: Get started quickly with pre-configured Electron application templates for various use cases.

- **CLI Tools**: Command-line tools to automate common tasks such as project initialization and packaging Electron apps.

- **Development Enhancements**: Helpful utilities and extensions to improve your development workflow.

- **Best Practices**: Guidelines and best practices for structuring Electron applications for scalability and maintainability.

- **More API**: ipc、window、htto、ffi、schedule、db...


## Using a Scaffold

You can quickly create a project using a scaffold, which integrates with the electron-prokit ecosystem.

**Installing the Scaffold**


```bash
npm i @electron-prokit/cli -g
```

**Creating a Project**


```bash
electron-prokit-cli init project
```

In the command above, replace `project` with the name of your project.

After init, install dependencies and run dev

```bash

cd project && yarn install

yarn run dev

```

## Install Individually

Using NPM:

```bash
npm i electron-prokit
```

Using Yarn:

```bash
yarn i electron-prokit
```

## Usage

You can find detailed API documentation at this link:<a href="https://xutaotaotao.github.io/electron-prokit" target="_blank">Click to view</a>

- <a href="https://xutaotaotao.github.io/electron-prokit/tutorials/create-vite-electron-service.html" target="_blank">Building an Electron Project Quickly with Vite</a>

## Playground

```bash
git clone https://github.com/Xutaotaotao/electron-prokit.git

pnpm i 

pnpm run dev

```


## Stargazers
[![Stargazers repo roster for electron-prokit](https://reporoster.com/stars/Xutaotaotao/electron-prokit)](https://github.com/Xutaotaotao/electron-prokit/stargazers)