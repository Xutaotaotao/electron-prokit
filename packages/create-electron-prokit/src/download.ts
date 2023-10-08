import path from "path"
import gitclone from "git-clone/promise"
import fs from "fs-extra"
import ora from "ora"

export const downloadTemplate = (
  templateGitUrl: string,
  downloadPath: string
):Promise<any> =>  {
  const loading = ora("Downloadimg template")
  return new Promise((resolve, reject) => {
    loading.start("Start download template")

    gitclone(templateGitUrl, downloadPath, {
      checkout: "master",
      shallow: true,
    })
      .then((r) => {
        fs.removeSync(path.join(downloadPath, ".git"))
        loading.succeed("Download success")
        loading.stop()

        resolve("Download success")
      })
      .catch((error) => {
        loading.stop()
        loading.fail("Download fail")
        reject(error)
      })
  })
}