import { IResult } from "@/types";

export function runTests(code: string): IResult[] {
    const results: IResult[] = [];
    
    try {
        const func = new Function(code + '; return reverseInteger;')();
        results.push({
            passed: func(123) === 321,
            message: 'Test 1: reverseInteger(123) should return 321',
        });
        results.push({
            passed: func(-456) === -654,
            message: 'Test 2: reverseInteger(-456) should return -654',
        });
        results.push({
            passed: func(1000) === 1,
            message: 'Test 3: reverseInteger(1000) should return 1',
        });
        results.push({
            passed: func(0) === 0,
            message: 'Test 4: reverseInteger(0) should return 0',
        });
        
    } catch (error: unknown) {
        results.push({
            passed: false,
            message: `Error: ${error instanceof Error ? error.message : String(error)}`,
        });
    }

    return results;
}