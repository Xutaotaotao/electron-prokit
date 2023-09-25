const path = require("node:path");
const ts = require("rollup-plugin-typescript2");
const resolvePlugin = require("@rollup/plugin-node-resolve");
const packagesDir = path.resolve(__dirname, "./packages");
const peerDepsExternal = require("rollup-plugin-peer-deps-external")

function getBuildConfig(name,inputPath="src/index.ts") {
  const packageDir = path.resolve(packagesDir, name);
  return {
    input: path.resolve(packageDir, inputPath),
    output: [
      {
        file: path.resolve(packageDir, `dist/${name}.cjs.js`),
        format: "cjs",
      },
      {
        file: path.resolve(packageDir, `dist/${name}.mjs`),
        format: 'es',
      },
      {
        file: path.resolve(packageDir, `dist/${name}.umd.js`),
        format: 'umd',
        name,
      },
    ],
    plugins: [
      ts({
        tsconfig: path.resolve(packageDir, "./tsconfig.json"),
      }),
      resolvePlugin(),
      peerDepsExternal({
        autoInstall: true
      })
    ],
    external:[
       'electron',
       'esbuild',
       'postcss',
       'koffi',
       'globby',
       'commander',
       'restore-cursor',
       'string-width',
       'stdin-discarder',
       'ora',
       'pacote',
       'axios'
    ],
  };
}

module.exports = () => {
  return [
    getBuildConfig('create-electron-prokit'),
    getBuildConfig('electron-prokit')
  ];
};
