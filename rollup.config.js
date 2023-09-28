const path = require("path");
const ts = require("rollup-plugin-typescript2");
const resolvePlugin = require("@rollup/plugin-node-resolve");
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const shebang = require('rollup-plugin-shebang-bin')
const packagesDir = path.resolve(__dirname, "./packages");

function getBuildConfig(name, inputPath = "src/index.ts") {
  const packageDir = path.resolve(packagesDir, name);
  return {
    input: path.resolve(packageDir, inputPath),
    output: [
      {
        file: path.resolve(packageDir, `dist/index.cjs.js`),
        format: "cjs",
      },
      {
        file: path.resolve(packageDir, `dist/index.esm.js`),
        format: "esm",
      },
      {
        file: path.resolve(packageDir, `dist/index.js`),
        format: "esm",
      },
    ],
    plugins: [
      ts({
        tsconfig: path.resolve(packageDir, "./tsconfig.json"),
      }),
      resolvePlugin({
        moduleDirectories: ["node_modules", ".pnpm"],
      }),
    ],
    external: [
      "electron",
      "esbuild",
      "postcss",
      "koffi",
      "axios",
      "lowdb"
    ],
  };
}

function getCliBuildConfig(name, inputPath = "src/index.ts") {
  const packageDir = path.resolve(packagesDir, name);
  return {
    input: path.resolve(packageDir, inputPath),
    output: [
      {
        file: path.resolve(packageDir, `dist/index.js`),
        format: "esm",
        banner: '#!/usr/bin/env node --experimental-specifier-resolution=node',
      },
      {
        file: path.resolve(packageDir, `dist/index.cjs.js`),
        format: "cjs",
        banner: '#!/usr/bin/env node --experimental-specifier-resolution=node',
      },
      {
        file: path.resolve(packageDir, `dist/index.esm.js`),
        format: "esm",
        banner: '#!/usr/bin/env node --experimental-specifier-resolution=node',
      },
    ],
    external: [
      'inquirer',
      'ora',
      'fs-extra',
      'git-clone/promise',
      'handlebars'
    ],
    plugins: [
      ts({
        tsconfig: path.resolve(packageDir, "./tsconfig.json"),
      }),
      resolvePlugin({
        extensions:['.js', '.ts'],
        mainFields: ['main'],
        modulesOnly: true,
        preferredBuiltins :false
      }),
      commonjs(),
      json(),
      shebang()
    ],
  }
}

module.exports = () => {
  return [
    getBuildConfig('electron-prokit'),
    getCliBuildConfig("cli"),
  ];
};
