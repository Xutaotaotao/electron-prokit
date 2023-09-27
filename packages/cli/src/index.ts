#!/usr/bin/env node --experimental-specifier-resolution=node

import * as tslib from 'tslib';
import { Command } from "commander"
import inquirer from "inquirer"
import ora from "ora"
import fs from "fs-extra"
import { downloadTemplate } from "./download"
import { modifyPackageJson } from "./modify"


const log = ora("modify")

const templateGitUrl = "https://github.com/Xutaotaotao/ep-vite-react-electron-template"

let downloadPath = null

const InitPrompts = [
  {
      name: "description",
      message: "please input description",
      default: "",
  },
  {
      name: "author",
      message: "please input author",
      default: "",
  }
]

const program = new Command()

program
    .name("create-electron-prokit-cli")
    .description("create-electron-prokit+TypeScript application generator")
    .version("0.0.1")

program
    .command("init <name>")
    .description("init a create-electron-prokit project")
    .action(async (name: string) => {
        if (fs.existsSync(name)) {
          log.warn(`Has the same name project,please create another project！`)
          return
        }
        log.info(`Start init create-electron-prokit project: ${name}`)
        const initOptions = await inquirer.prompt(InitPrompts)
        try {
            downloadPath = `./${name}`
            await downloadTemplate(templateGitUrl, downloadPath)
            modifyPackageJson(downloadPath, { name, ...initOptions })
        } catch (error) {
            console.error(error)
        }
    })

program.parse()
