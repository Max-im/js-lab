import { IResult } from "@/types";

export function runTests(code: string): IResult[] {
    const results: IResult[] = [];
    
    try {
        const func = new Function(code + '; return isPalindrome;')();
        
        const testCases = [
            { input: "racecar", expected: true },
            { input: "hello", expected: false },
            { input: "A man a plan a canal Panama", expected: true },
            { input: "No lemon no melon", expected: true },
            { input: "Was it a car or a cat I saw", expected: true },
        ];

        for (const { input, expected } of testCases) {
            const result = func(input);
            results.push({
                passed: result === expected,
                message: `Input: "${input}", Expected: ${expected}, Got: ${result}`,
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