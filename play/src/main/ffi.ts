import { createEpffi } from "electron-prokit";
import path from "path";
import {app} from 'electron'

const appPath = app.getAppPath();

export const {sum} = createEpffi({
  path: path.join(appPath,'resources/dll/sum.dylib'),
  function:{
    functionName:'sum',
    returnType:'int',
    inputs:['int','int']
  }
})

export const { mul,div } = createEpffi({
  path: path.join(appPath, "resources/dll/mul_and_div.dylib"),
  function: [
    {
      functionName: "mul",
      returnType: "int",
      inputs: ["int", "int"],
    },
    {
      functionName: "div",
      returnType: "int",
      inputs: ["int", "int"],
    },
  ],
});
