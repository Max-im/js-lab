import { IResult } from "@/types";

export function runTests(code: string): IResult[] {
    const results: IResult[] = [];
    const consoleLog = console.log;
    const logs: string[] | number[] = [];
    console.log = (message: string) => logs.push(message);

    try {
        const mario = new Function(code + '; return mario;')();
        mario(1);

        results.push({
            passed: logs[0] === '#\n',
            message: `mario(1) should log "#" instead of ${logs[0]}`,
        });
        logs.length = 0;

        mario(2);
        results.push({
            passed: logs[0] === '# \n##\n',
            message: `mario(2) should log "# \n##\n" instead of ${logs[0]}`,
        });
        logs.length = 0;
        
        mario(3);
        results.push({
            passed: logs[0] === '#  \n## \n###\n',
            message: `mario(2) should log "#  \n## \n###\n" instead of ${logs[0]}`,
        });
        logs.length = 0;


    } catch (error: unknown) {
        results.push({
            passed: false,
            message: `Error: ${error instanceof Error ? error.message : String(error)}`,
        });
    }

    console.log = consoleLog;
    return results;
}