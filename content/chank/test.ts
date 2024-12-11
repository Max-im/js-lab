import { IResult } from "@/types";

export function runTests(code: string): IResult[] {
    const results: IResult[] = [];
    
    try {
        const func = new Function(code + '; return chank;')();
        
        results.push({
            passed: JSON.stringify(func([1, 2, 3, 4], 2)) === JSON.stringify([[1, 2], [3, 4]]),
            message: 'Basic functionality',
        });

        results.push({
            passed: JSON.stringify(func([1, 2, 3, 4, 5], 2)) === JSON.stringify([[1, 2], [3, 4], [5]]),
            message: 'Uneven chunks',
        });

        results.push({
            passed: JSON.stringify(func([], 2)) === JSON.stringify([]),
            message: 'Empty array',
        });

        results.push({
            passed: JSON.stringify(func([1, 2], 5)) === JSON.stringify([[1, 2]]),
            message: 'Chunk size larger than array',
        });

        results.push({
            passed: JSON.stringify(func([1, 2, 3], 1)) === JSON.stringify([[1], [2], [3]]),
            message: 'Chunk size of 1',
        });

    } catch (error: unknown) {
        results.push({
            passed: false,
            message: `Error: ${error instanceof Error ? error.message : String(error)}`,
        });
    }

    return results;
}