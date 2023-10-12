#!/usr/bin/env node --experimental-specifier-resolution=node
import * as tslib from "tslib";
import type { QuestionCollection } from "inquirer";
import inquirer from "inquirer";
import ora from "ora";
import fs from "fs-extra";
import type { Options } from '../typings'
import { downloadTemplate } from "./download";
import { modifyPackageJson } from "./modify";

const log = ora("modify");

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
        name: "React",
        value: "React",
      },
      {
        name: "Vue",
        value: "Vue",
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
  const templateGitUrl =
    frameworkOptions.framework === "React"
      ? ReactTemplateGitUrl
      : VueTemplateGitUrl;
  try {
    const downloadPath = `./${name}`;
    await downloadTemplate(templateGitUrl, downloadPath);
    modifyPackageJson(downloadPath, { name, ...initOptions } as Options);
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
