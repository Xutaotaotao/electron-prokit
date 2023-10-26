import path from "path";
import { createEpffi } from "electron-prokit";
import { getResourcesPath } from "../util";

export const {sum} = createEpffi({
  path: path.join(__dirname,process.platform === 'win32' ? getResourcesPath('resources/dll/sum.dll') : getResourcesPath('resources/dll/sum.dylib')),
  function:{
    functionName:'sum',
    returnType:'int',
    inputs:['int','int']
  }
})

export const { mul,divide } = createEpffi({
  path: path.join(__dirname,process.platform === 'win32' ? getResourcesPath("resources/dll/mul_and_div.dll") : getResourcesPath("resources/dll/mul_and_div.dylib")),
  function: [
    {
      functionName: "mul",
      returnType: "int",
      inputs: ["int", "int"],
    },
    {
      functionName: "divide",
      returnType: "int",
      inputs: ["int", "int"],
    },
  ],
});
