import path from "path";
import { createEpffi } from "electron-prokit";
import { getResourcesPath } from "../util";




export const {sum} = createEpffi({
  path: path.join(__dirname,getResourcesPath('resources/dll/sum.dylib')),
  function:{
    functionName:'sum',
    returnType:'int',
    inputs:['int','int']
  }
})

export const { mul,div } = createEpffi({
  path: path.join(__dirname, getResourcesPath("resources/dll/mul_and_div.dylib")),
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
