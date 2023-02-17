import {InputParser} from "./src/input-parser";
import {FileReader} from "./src/file-reader";
import {FactoryCalculator} from "./src/calculator/calculator";
import {Logger} from "./src/logger";

console.log(process.argv)

const [path, operator, hasLog] = InputParser({args: process.argv})
const logger: Logger = new Logger({option: hasLog})

logger.log('started')
const data: number[] = FileReader({path, logger})
const total = FactoryCalculator({operator, logger}).sum(data)

console.log('-'.repeat(14))
console.log(`Total = ${total}`)
logger.log('end of program')
