import { IResult } from "@/types";

export function runTests(code: string): IResult[] {
    const results: IResult[] = [];
    
    try {
        const func = new Function(code + '; return binarySum;')();
        const tests: [string, string, string][] = [
            ['0000101', '0000010', '0000111'],
            ['0000101', '0000101', '0001010'],
            ['0000001', '0000001', '0000010'],
            ['0000000', '0000000', '0000000'],
            ['1111111', '0000001', '10000000'],
            ['1111111', '1111111', '11111110'],
            ['0000000', '1111111', '1111111'],
            ['1111111', '0000000', '1111111'],
        ];
        
        for (const [a, b, expected] of tests) {
            const result = func(a, b);
            results.push({
                passed: result === expected,
                message: `${a} + ${b} = ${expected}: ${result === expected ? 'Passed' : `Failed (got ${result})`}`,
            });
        }
    } catch (error: unknown) {
        results.push({
            passed: false,
            message: `Error: ${error instanceof Error ? error.message : String(error)}`,
        });
    }

    return results;
}