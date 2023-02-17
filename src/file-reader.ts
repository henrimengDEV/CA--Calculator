import fs from "fs";
import {Logger} from "./logger";

interface FileReaderProps {
    path: string
    logger: Logger
}

export const FileReader = (props: FileReaderProps): number[] => {
    const {path, logger} = props

    try {
        const data = fs.readFileSync(path, {encoding: 'utf8', flag: 'r'});
        return data.split('\n').map(it => Number(it))
    } catch (e) {
        logger.log(`file not found at ${path}`)
        return []
    }
}