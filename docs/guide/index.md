# Introduction

::: tip Note
This guide assumes you are familiar with [Electron](https://www.electronjs.org/) and [Vite](https://vitejs.dev/). It will be easier to understand the framework's design philosophy if you have experience with them.
:::

## What Problems Does it Solve

There are many solutions for Electron development in the community, but comparing some of them, there are common issues:

- Tedious steps to setup an Electron project
- Unable to choose front-end frameworks freely
- Hot reload issues for local development code in each process
- Unified configuration for build and packaging
- Inconsistencies when renderer process calls APIs
- Lack of enterprise-level solutions

electron-prokit aims to solve these problems and provide an ultimate desktop development experience.

## Core Philosophy

Thanks to Vite's ability to handle both Chromium and Node.js environments, we built the [@electron-prokit/create-service](https://www.npmjs.com/package/@electron-prokit/create-service) plugin specifically to read Vite configs for each process, create the services, and then combine them together. This way, hot reloading works for changes in any process, providing the same experience as traditional web development. It greatly improves development efficiency and debugging efficiency.

![alt inner](/guide/inner.png)

## Notes

electron-prokit strictly follows [Electron Best Practices](https://www.npmjs.com/package/@electron-prokit/create-service). Node integration (nodeIntegration) is disabled and context isolation (contextIsolation) is enabled. All framework APIs are implemented using contextBridge.