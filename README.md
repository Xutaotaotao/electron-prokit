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

## Documentation

For detailed usage instructions and documentation, please refer to [the Documentation](https://xutaotaotao.github.io/electron-prokit/) section.


## License
Electron ProKit is open-source software licensed under the MIT License.

## Acknowledgements
This project would not be possible without the contributions of the Electron community and the following open-source projects:

- Electron
- Electron Forge

Thank you to all the developers who have made these projects possible.


## Stargazers
[![Stargazers repo roster for electron-prokit](https://reporoster.com/stars/Xutaotaotao/electron-prokit)](https://github.com/Xutaotaotao/electron-prokit/stargazers)