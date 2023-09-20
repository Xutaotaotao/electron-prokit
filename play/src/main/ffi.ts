import { createEpffi } from "electron-prokit";
import path from "path";


export const {sum} = createEpffi({
  path: path.join(__dirname,'../../resources/dll/sum.dylib'),
  function:{
    functionName:'sum',
    returnType:'int',
    inputs:['int','int']
  }
})

export const { mul,div } = createEpffi({
  path: path.join(__dirname, "../../resources/dll/mul_and_div.dylib"),
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
