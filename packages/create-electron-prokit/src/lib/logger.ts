import  chalk from 'chalk'

export const warn = (text: string):void => {
  console.log(chalk.yellow(`\n${text}\n`))
}

export const info = (text: string):void => {
  console.log(chalk.cyan(`\n${text}\n`))
}

export const error = (text: string):void => {
  console.log(chalk.bgRed(`\n${text}\n`))
}
