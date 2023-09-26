const path = require("node:path");
const ts = require("rollup-plugin-typescript2");
const resolvePlugin = require("@rollup/plugin-node-resolve");
const { pnpmResolve } = "@pnpm/resolve";
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
      pnpmResolve(),
    ],
    external: [
      "electron",
      "esbuild",
      "postcss",
      "koffi",
      "globby",
      "commander",
      "restore-cursor",
      "string-width",
      "stdin-discarder",
      "ora",
      "pacote",
      "axios",
    ],
  };
}

module.exports = () => {
  return [
    getBuildConfig("create-electron-prokit"),
    getBuildConfig("electron-prokit"),
  ];
};
