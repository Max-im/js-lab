import { IResult } from "@/types";

export function runTests(code: string): IResult[] {
    const results: IResult[] = [];
    
    try {
        const func = new Function(code + '; return anagram;')();
        
        results.push({
            passed: func('listen', 'silent') === true,
            message: 'Test case 1: Basic anagram',
        });

        results.push({
            passed: func('hello', 'world') === false,
            message: 'Test case 2: Not an anagram',
        });

        results.push({
            passed: func('abc', 'abcd') === false,
            message: 'Test case 3: Different lengths',
        });

        results.push({
            passed: func('Listen', 'Silent') === true,
            message: 'Test case 4: Anagram with different cases',
        });

        results.push({
            passed: func('conversation', 'voices rant on') === true,
            message: 'Test case 5: Anagram with spaces',
        });

    } catch (error: unknown) {
        results.push({
            passed: false,
            message: `Error: ${error instanceof Error ? error.message : String(error)}`,
        });
    }

    return results;
}