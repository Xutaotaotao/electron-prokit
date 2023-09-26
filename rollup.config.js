const path = require("path");
const ts = require("rollup-plugin-typescript2");
const resolvePlugin = require("@rollup/plugin-node-resolve");
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const packagesDir = path.resolve(__dirname, "./packages");

const globals = {
  koffi: "koffi",
  axios: "axios",
};

function getBuildConfig(name, inputPath = "src/index.ts") {
  const packageDir = path.resolve(packagesDir, name);
  return {
    input: path.resolve(packageDir, inputPath),
    output: [
      {
        file: path.resolve(packageDir, `dist/${name}.cjs.js`),
        format: "cjs",
        globals,
      },
      {
        file: path.resolve(packageDir, `dist/${name}.mjs`),
        format: "es",
        globals,
      },
      {
        file: path.resolve(packageDir, `dist/${name}.umd.js`),
        format: "umd",
        name,
        globals,
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
    ],
  };
}

function getCreateElectronProkitBuildConfig(name, inputPath = "src/index.ts") {
  const packageDir = path.resolve(packagesDir, name);
  return {
    input: path.resolve(packageDir, inputPath),
    output: {
      file: path.resolve(packageDir, `dist/index.js`),
      format: 'cjs'
    },
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
    ],
  }
}

module.exports = () => {
  return [
    getBuildConfig('electron-prokit'),
    getCreateElectronProkitBuildConfig("create-electron-prokit"),
  ];
};
