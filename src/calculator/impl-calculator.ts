import {Calculator} from "./calculator";
import {Logger} from "../logger";

/**
 * Pour faciliter la correction
 * toutes les implémentations sont regroupés dans 1 fichier
 */

interface ImplCalculatorProps {
    logger: Logger
}

export class ImplCalculator implements Calculator {
    logger: Logger;

    constructor(props: ImplCalculatorProps) {
        this.logger = props.logger
    }

    sum(numbers: number[]): number {
        let currentValue = undefined;

        numbers.forEach((item, index) => {
            this.logger.log(`parsed value = ${item}`)

            if (currentValue === undefined) {
                currentValue = item
                console.log(`${currentValue}`)
            } else {
                console.log(`+${item} (= ${currentValue})`)
                currentValue += item
            }

            if (index < 1) return;
            this.logger.log(`accumulation : ${currentValue} on line ${index}`)
        })

        return currentValue;
    }
}

export class MultiplicationCalculator implements Calculator {
    logger: Logger;

    constructor(props: ImplCalculatorProps) {
        this.logger = props.logger
    }

    sum(numbers: number[]): number {
        let currentValue = 0;

        numbers.forEach((item, index) => {
            this.logger.log(`parsed value = ${item}`)

            if (currentValue === undefined) {
                currentValue = item
                console.log(`${currentValue}`)
            } else {
                console.log(`*${item} (= ${currentValue})`)
                currentValue *= item
            }

            if (index < 1) return;
            this.logger.log(`accumulation : ${currentValue} on line ${index}`)
        })

        return currentValue;
    }
}