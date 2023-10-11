import path from "path"
import fs from "fs-extra"
import handlebars from "handlebars"
import ora from "ora"

const log = ora("modify")

// interface Options {
//   name:string;
//   description:string;
//   author:string;
// }


export const modifyPackageJson = function (downloadPath: string, options: Options):void {
  const packagePath = path.join(downloadPath, "package.json")
  log.start("start modifying package.json")
  if (fs.existsSync(packagePath)) {
    const content = fs.readFileSync(packagePath).toString()
    const template = handlebars.compile(content)

    const param = {
      name: options.name,
      description: options.description,
      author: options.author,
    }

    const result = template(param)
    fs.writeFileSync(packagePath, result)
    log.stop()
    log.succeed("This project has been successfully created！ ")
    log.info(`Install dependencies:

      cd ${downloadPath} && yarn install
    `)
    log.info(`Run project:

      yarn run dev
    `)
  } else {
    log.stop()
    log.fail("modify package.json fail")
    throw new Error("no package.json")
  }
}