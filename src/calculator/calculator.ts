import {ImplCalculator, MultiplicationCalculator} from "./impl-calculator";
import {Logger} from "../logger";

export interface Calculator {
    sum(numbers: number[]): number
}

interface CalculatorProps {
    operator: string
    logger: Logger
}

export const FactoryCalculator = (props: CalculatorProps) => {
    const {operator, logger} = props

    switch (operator) {
        case 'x':
            return new MultiplicationCalculator({logger})
        case '+':
        default: return new ImplCalculator({logger})
    }
}