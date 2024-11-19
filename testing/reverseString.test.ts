import { IResult } from "@/types";

export function runTests(code: string): IResult[] {
    const results: IResult[] = [];
    
    try {
        const reverseString = new Function(code + '; return reverseString;')();
        results.push({
            passed: reverseString('hello') === 'olleh',
            message: `Test 1: reverseString('hello') should return 'olleh'`,
        });
        results.push({
            passed: reverseString('world') === 'dlrow',
            message: `Test 2: reverseString('world') should return 'dlrow'`,
        });
        results.push({
            passed: reverseString('') === '',
            message: `Test 3: reverseString('') should return ''`,
        });
        results.push({
            passed: reverseString('a') === 'a',
            message: `Test 4: reverseString('a') should return 'a'`,
        });
        results.push({
            passed: reverseString('ab') === 'ba',
            message: `Test 5: reverseString('ab') should return 'ba'`,
        });
        results.push({
            passed: reverseString('racecar') === 'racecar',
            message: `Test 6: reverseString('racecar') should return 'racecar'`,
        });
        results.push({
            passed: reverseString('12345') === '54321',
            message: `Test 7: reverseString('12345') should return '54321'`,
        });
        results.push({
            passed: reverseString('!@#$%') === '%$#@!',
            message: `Test 8: reverseString('!@#$%') should return '%$#@!'`,
        });
    } catch (error: unknown) {
        results.push({
            passed: false,
            message: `Error: ${error instanceof Error ? error.message : String(error)}`,
        });
    }

    return results;
}