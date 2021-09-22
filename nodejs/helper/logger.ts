import chalk from 'chalk';
import Color from './color'



class Logger {
    log(log: any, color?: Color) {
        if (color) console.log(chalk.hex(color)(log))
        else console.log(log)
    }
}

export default new Logger()