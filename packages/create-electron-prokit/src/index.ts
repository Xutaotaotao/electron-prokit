#!/usr/bin/env node --experimental-specifier-resolution=node
import path from "path";
import { fileURLToPath } from "node:url";
import type { QuestionCollection } from "inquirer";
import inquirer from "inquirer";
import ora from "ora";
import fs from "fs-extra";
import type { Options } from "../typings";
import { modifyPackageJson } from "./modify";

const log = ora("modify");

function copy(src: string, dest: string) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}

function copyDir(srcDir: string, destDir: string) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file);
    const destFile = path.resolve(destDir, file);
    copy(srcFile, destFile);
  }
}

async function init(name: string) {
  const ReactTemplateGitUrl =
    "https://github.com/Xutaotaotao/ep-vite-react-electron-template";

  const VueTemplateGitUrl =
    "https://github.com/Xutaotaotao/ep-vite-vue3-electron-template";

  const InitPrompts: QuestionCollection = [
    {
      name: "description",
      message: "please input description",
      default: "",
    },
    {
      name: "author",
      message: "please input author",
      default: "",
    },
  ];

  const FrameworkOptions: QuestionCollection = {
    type: "list",
    name: "framework",
    message: "Select a framework",
    choices: [
      {
        name: "react-ts",
        value: "react-ts",
      },
      {
        name: "vue-ts",
        value: "vue-ts",
      },
    ],
  };
  if (fs.existsSync(name)) {
    log.warn(`Has the same name project,please create another project！`);
    return;
  }
  log.info(`Start init create-electron-prokit project: ${name}`);
  const initOptions = await inquirer.prompt(InitPrompts);
  const frameworkOptions = await inquirer.prompt(FrameworkOptions);
  const framework = frameworkOptions.framework;
  const templateDir = path.resolve(
    fileURLToPath(import.meta.url),
    "../..",
    `template-${framework}`
  );

  try {
    const targetPath = `./${name}`;
    copy(templateDir, targetPath);
    modifyPackageJson(targetPath, { name, ...initOptions } as Options);
  } catch (error) {
    console.error(error);
  }
}

function main() {
  const name = process.argv[2];
  if (!name) {
    log.warn("The project name cannot be empty！");
    process.exit(1);
  } else {
    init(name);
  }
}

main();
