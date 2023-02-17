interface InputParserProps {
    args: string[]
}

export const InputParser = (props: InputParserProps): [string, string, boolean] => {
    const {args} = props
    const path = args[3]
    const operator = getOperator(args)
    const hasLog = args[5] === '-log'

    function getOperator(args: string[]): string {
        const arg = args[4]
        switch (arg) {
            case "+":
                console.log('[log] applying operation addition');
                return '+';
            case "x":
                console.log('[log] applying operation multiplication');
                return 'x';
            default:
                console.log(`[log] operator unknown [${arg}] -> applying operation addition`);
                return '+';
        }
    }

    return [path, operator, hasLog]
}