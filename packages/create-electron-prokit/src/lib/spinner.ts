import ora from 'ora'
import chalk from 'chalk'

const spinner = ora()

export const startSpinner = (text?: string):void => {
  const msg = `${text}...\n`
  spinner.start(msg)
  spinner.stopAndPersist({
    symbol: '✨',
    text: msg,
  })
}

export const succeedSpiner = (text?: string):void => {
  spinner.stopAndPersist({
    symbol: '🎉',
    text: `${text}\n`
  })
}

export const failSpinner = (text?: string):void => {
  spinner.fail(chalk.red(text))
}
