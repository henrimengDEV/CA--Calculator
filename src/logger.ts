interface LoggerProps {
    option: boolean
}

export class Logger {
    option: boolean;

    constructor(props: LoggerProps) {
        this.option = props.option
    }

    log(message: string): void {
        if (!this.option) return;
        console.log(`[log] ${message}`)
    }
}