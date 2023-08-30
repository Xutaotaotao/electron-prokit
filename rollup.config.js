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
        file: path.resolve(packageDir, `dist/${name}.esm-bundler.js`),
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
      inputPath.includes('ts') ? ts({
        tsconfig: path.resolve(packageDir, "./tsconfig.json"),
      }) : '',
      resolvePlugin(),
    ],
    external:[
       'electron' 
    ]
  };
}

module.exports = () => {
  return [
    getBuildConfig('create-electron-prokit'),
    // getBuildConfig('create-vite-electron-service','index.js'),
    getBuildConfig('electron-prokit','index.ts')
  ];
};
