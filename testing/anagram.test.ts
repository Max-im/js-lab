import { IResult } from "@/types";

export function runTests(code: string): IResult[] {
    const results: IResult[] = [];
    
    try {
        const func = new Function(code + '; return anagram;')();
        
        results.push({
            passed: func('listen', 'silent') === true,
            message: 'Basic anagram',
        });

        results.push({
            passed: func('hello', 'world') === false,
            message: 'Not an anagram',
        });

        results.push({
            passed: func('abc', 'abcd') === false,
            message: 'Different lengths',
        });

        results.push({
            passed: func('Listen', 'Silent') === true,
            message: 'Anagram with different cases',
        });

        results.push({
            passed: func('conversation', 'voices rant on') === true,
            message: 'Anagram with spaces',
        });

    } catch (error: unknown) {
        results.push({
            passed: false,
            message: `Error: ${error instanceof Error ? error.message : String(error)}`,
        });
    }

    return results;
}