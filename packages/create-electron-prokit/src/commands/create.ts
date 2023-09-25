import path from "node:path";
import * as handlebars from "handlebars";
import * as inquirer from "inquirer";
import {
  chalk,
  execa,
  fs,
  info,
  startSpinner,
  succeedSpiner,
  warn,
} from "../lib";

// 检查是否已经存在相同名字工程
export const checkProjectExist = async (
  targetDir: string
): Promise<boolean> => {
  if (fs.existsSync(targetDir)) {
    const answer = await inquirer.prompt({
      type: "list",
      name: "checkExist",
      message: `\n仓库路径${targetDir}已存在，请选择`,
      choices: ["覆盖", "取消"],
    });
    if (answer.checkExist === "覆盖") {
      warn(`删除${targetDir}...`);
      fs.removeSync(targetDir);
    } else {
      return true;
    }
  }
  return false;
};

export const getQuestions = async (projectName: string): Promise<void> => {
  return await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `package name: (${projectName})`,
      default: projectName,
    },
    {
      type: "input",
      name: "description",
      message: "description",
    },
    {
      type: "input",
      name: "author",
      message: "author",
    },
  ]);
};

export const cloneProject = async (
  targetDir: string,
  projectName: string,
  projectInfo: any
): Promise<void> => {
  startSpinner(`开始创建私服仓库 ${chalk.cyan(targetDir)}`);
  await fs.copy(
    path.join(__dirname, "..", "..", "private-server-boilerplate"),
    targetDir
  );

  const jsonPath = `${targetDir}/package.json`;
  const jsonContent = fs.readFileSync(jsonPath, "utf-8");
  const jsonResult = handlebars.compile(jsonContent)(projectInfo);
  fs.writeFileSync(jsonPath, jsonResult);

  // 新建工程装包
  execa.commandSync("npm install", {
    stdio: "inherit",
    cwd: targetDir,
  });

  succeedSpiner(
    `私服仓库创建完成 ${chalk.yellow(projectName)}\n👉 输入以下命令开启私服:`
  );

  info(`$ cd ${projectName}\n$ sh start.sh\n`);
};

const action = (projectName: string): void => {
  console.log("projectName:", projectName);
};
export default {
  command: "create <registry-name>",
  description: "创建一个electron项目工程",
  optionList: [["--context <context>", "上下文路径"]],
  action,
};
