import { IResult } from "@/types";

export function runTests(code: string): IResult[] {
    const results: IResult[] = [];
    
    try {
        const func = new Function(code + '; return maxChar;')();
        
        const testCases = [
            { input: 'a', expected: 'a' },
            { input: 'Hello', expected: 'l' },
            { input: 'abcccccccd', expected: 'c' },
            { input: 'apple 1231111', expected: '1' }
        ];

        testCases.forEach(({ input, expected }) => {
            const result = func(input);
            results.push({
                passed: result === expected,
                message: `Input: "${input}", Expected: "${expected}", Got: "${result}"`,
            });
        })
    } catch (error: unknown) {
        results.push({
            passed: false,
            message: `Error: ${error instanceof Error ? error.message : String(error)}`,
        });
    }

    return results;
}