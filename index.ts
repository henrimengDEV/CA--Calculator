import {InputParser} from "./src/input-parser";
import {FileReader} from "./src/file-reader";
import {FactoryCalculator} from "./src/calculator/calculator";
import {Logger} from "./src/logger";

console.log('[log] started')

const [path, operator, hasLog] = InputParser({args: process.argv})
const logger: Logger = new Logger({option: hasLog})
const data: number[] = FileReader({path, logger})
const total = FactoryCalculator({operator, logger}).sum(data)

console.log('-'.repeat(14))
console.log(`Total = ${total}`)
console.log('[log] end of program')
