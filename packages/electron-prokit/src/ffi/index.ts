import { useKoffi } from "../hooks"

interface BindingFun {
  functionName:string,
  returnType:string,
  inputs:Array<string>
}

interface InitFfiOptions {
  path: string,
  function: BindingFun | Array<BindingFun>
}

export const epffi = useKoffi()

export const initEpffi= (options:InitFfiOptions):Record<string, Function> => {
  const functions: Record<string, Function> = {};
  const lib = epffi.load(options.path)
  if (Array.isArray(options.function)) {
    options.function.map((fun) => {
      functions[fun.functionName] = lib.func(fun.functionName,fun.returnType,fun.inputs)
    })
  } else {
    functions[options.function.functionName] = lib.func(options.function.functionName,options.function.returnType,options.function.inputs)
  }
  return functions
}