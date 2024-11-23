import { IResult } from "@/types";

export function runTests(code: string): IResult[] {
    const results: IResult[] = [];
    
    try {
        const func = new Function(code + '; return capitalize;')();
        
        const testCases = [
            { input: 'hello', expected: 'Hello' },
            { input: 'world', expected: 'World' },
            { input: 'a short sentence', expected: 'A Short Sentence' },
            { input: 'this is a test', expected: 'This Is A Test' }
        ];

        testCases.forEach(({ input, expected }) => {
            try {
                const result = func(input);
                results.push({
                    passed: result === expected,
                    message: `Input: "${input}", Expected: "${expected}", Got: "${result}"`,
                });
            } catch (error: unknown) {
                results.push({
                    passed: false,
                    message: `Error: ${error instanceof Error ? error.message : String(error)}`,
                });
            }
        });

    } catch (error: unknown) {
        results.push({
            passed: false,
            message: `Error: ${error instanceof Error ? error.message : String(error)}`,
        });
    }

    return results;
}