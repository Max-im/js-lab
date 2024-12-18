import { IResult } from "@/types";

export function runTests(code: string): IResult[] {
    const results: IResult[] = [];
    
    try {
        const reverseString = new Function(code + '; return reverseString;')();
        results.push({
            passed: reverseString('hello') === 'olleh',
            message: `reverseString('hello') should return 'olleh'`,
        });
        results.push({
            passed: reverseString('world') === 'dlrow',
            message: `reverseString('world') should return 'dlrow'`,
        });
        results.push({
            passed: reverseString('racecar') === 'racecar',
            message: `reverseString('racecar') should return 'racecar'`,
        });
        results.push({
            passed: reverseString('12345') === '54321',
            message: `reverseString('12345') should return '54321'`,
        });
    } catch (error: unknown) {
        results.push({
            passed: false,
            message: `Error: ${error instanceof Error ? error.message : String(error)}`,
        });
    }

    return results;
}