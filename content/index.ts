import fizzBuzz from '../tasks/01_fizzbuzz';
import reverseString from '../tasks/02_reverse-string';
import palindrome from '../tasks/03_palindrome';
import reverseInteger from '../tasks/04_reverse-integer';
import anagram from '../tasks/05_anagram';

import {runTests as fizzBuzzTest} from '../testing/fizzbuzz.test';
import {runTests as reverseStringTest} from '../testing/reverseString.test';
import {runTests as palindromTest} from '../testing/palindrome.test';
import {runTests as reverseIntTest} from '../testing/reverseInteger.test';
import {runTests as anagramTest} from '../testing/anagram.test';

import fizzBuzzSolution from '../solutions/01_fizzbuzz';
import reverseStringSolution from '../solutions/02_reverse-string';
import palindromSolution from '../solutions/03_palindrome';
import reverseIntSolution from '../solutions/04_reverse-integer';
import anagramSolution from '../solutions/05_anagram';

import { ITask } from '@/types';

const tasks: ITask[] = [
    {
        title: 'Fizz Buzz',
        slug: 'fizz-buzz',
        index: 1,
        level: 1,
        levelName: 'easy',
        tags: ['easy'],
        code: fizzBuzz,
        description: 'Write a program that prints the numbers from 1 to 100. But for multiples of 3 print "Fizz" instead of the number and for the multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5 print "FizzBuzz".',
        test: fizzBuzzTest,
        solution: fizzBuzzSolution,
        examples: [],
    },
    {
        title: 'Reverse a String',
        slug: 'reverse-string',
        index: 2,
        level: 1,
        levelName: 'easy',
        tags: ['easy'],
        code: reverseString,
        description: 'Write a function that reverses a string.',
        test: reverseStringTest,
        solution: reverseStringSolution,
        examples: [],
    },
    {
        title: 'Palindrome',
        slug: 'palindrome',
        index: 3,
        level: 1,
        levelName: 'easy',
        tags: ['easy'],
        code: palindrome,
        description: 'Write a function that determines if a string is a palindrome.',
        test: palindromTest,
        solution: palindromSolution,
        examples: [],
    },
    {
        title: 'Reverse Integer',
        slug: 'reverse-integer',
        index: 4,
        level: 2,
        levelName: 'easy',
        tags: ['easy'],
        code: reverseInteger,
        description: 'Write a function that reverses an integer.',
        test: reverseIntTest,
        solution: reverseIntSolution,
        examples: [],
    },
    {
        title: 'Anagram',
        slug: 'anagram',
        index: 5,
        level: 2,
        levelName: 'easy',
        tags: ['easy'],
        code: anagram,
        description: 'Check if two strings are anagrams of each other. An anagram uses the same characters in the same quantity. Ignore spaces, punctuation, and case differences.',
        test: anagramTest,
        solution: anagramSolution,
        examples: [
            `anagram('listen', 'silent') -> true;`,
            `anagram('hello', 'world') -> false;`,
            `anagram('abc', 'abcd') -> false;`,
            `anagram('Listen', 'Silent') -> true;`,
            `anagram('conversation', 'voices rant on') -> true;`
        ]
    },
];

export default tasks;