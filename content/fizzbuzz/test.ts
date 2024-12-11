import { IResult } from "@/types";

export function runTests(code: string) {
    const results: IResult[] = [];
    const consoleLog = console.log;
    const logs: string[] | number[] = [];
    console.log = (message: string | number) => logs.push(message);

    try {
        const fizzBuzz = new Function(code + '; return fizzBuzz;')();
        fizzBuzz(15);

        results.push({
            passed: logs[2] === 'Fizz',
            message: `fizzBuzz(3) should log "Fizz" instead of ${logs[2]}`,
        });
        results.push({
            passed: logs[4] === 'Buzz',
            message: `fizzBuzz(5) should log "Buzz" instead of ${logs[4]}`,
        });
        results.push({
            passed: logs[14] === 'FizzBuzz',
            message: `fizzBuzz(15) should log "FizzBuzz" instead of ${logs[14]}`,
        });
        results.push({
            passed: logs[0] === '1' || logs[0] === 1,
            message: `fizzBuzz(1) should log "1" instead of ${logs[0]}`,
        });
        results.push({
            passed: logs[1] === '2' || logs[1] === 2,
            message: `fizzBuzz(2) should log "2" instead of ${logs[2]}`,
        });
        results.push({
            passed: logs[3] === '4' || logs[3] === 4,
            message: `fizzBuzz(4) should log "4" instead of ${logs[3]}`,
        });

    } catch (error: unknown) {
        results.push({
            passed: false,
            message: `Error: ${error?.message}`,
        });
    }

    console.log = consoleLog;
    return results;
}