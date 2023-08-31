const ts = require("rollup-plugin-typescript2");
const resolvePlugin = require("@rollup/plugin-node-resolve");
const path = require("path");
const packagesDir = path.resolve(__dirname, "./packages");

function getBuildConfig(name,inputPath="src/index.ts") {
  const packageDir = path.resolve(packagesDir, name);
  return {
    input: path.resolve(packageDir, inputPath),
    output: [
      {
        dir: path.resolve(packageDir, `dist/${name}.esm.js`),
        format: "es",
      },
      {
        file: path.resolve(packageDir, `dist/${name}.cjs.js`),
        format: "cjs",
      },
      {
        file: path.resolve(packageDir, `dist/${name}.js`),
        name,
        format: "umd",
      },
    ],
    plugins: [
      ts({
        tsconfig: path.resolve(packageDir, "./tsconfig.json"),
      }),
      resolvePlugin(),
    ],
    external:[
       'electron',
       'esbuild',
       'postcss'
    ]
  };
}

module.exports = () => {
  return [
    getBuildConfig('create-electron-prokit'),
    getBuildConfig('electron-prokit','index.ts')
  ];
};
