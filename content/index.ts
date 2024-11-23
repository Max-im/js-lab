import fizzBuzz from '../tasks/01_fizzbuzz';
import reverseString from '../tasks/02_reverse-string';
import palindrome from '../tasks/03_palindrome';
import reverseInteger from '../tasks/04_reverse-integer';
import anagram from '../tasks/05_anagram';
import capitalize from '../tasks/06_capitalize';

import {runTests as fizzBuzzTest} from '../testing/fizzbuzz.test';
import {runTests as reverseStringTest} from '../testing/reverseString.test';
import {runTests as palindromTest} from '../testing/palindrome.test';
import {runTests as reverseIntTest} from '../testing/reverseInteger.test';
import {runTests as anagramTest} from '../testing/anagram.test';
import {runTests as capitalizeTest} from '../testing/capitalize.test';

import fizzBuzzSolution from '../solutions/01_fizzbuzz';
import reverseStringSolution from '../solutions/02_reverse-string';
import palindromSolution from '../solutions/03_palindrome';
import reverseIntSolution from '../solutions/04_reverse-integer';
import anagramSolution from '../solutions/05_anagram';
import capitalizeSolution from '../solutions/06_capitalize';

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
        description: 'Write a program that prints the numbers from 1 to the passed param. But for multiples of 3 print "Fizz" instead of the number and for the multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5 print "FizzBuzz".',
        test: fizzBuzzTest,
        solution: fizzBuzzSolution,
        examples: [`fizzBuzz(15) -> console.log(1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz');`],
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
        examples: [
            `reverseString('hello') -> 'olleh';`,
            `reverseString('world') -> 'dlrow';`,
            `reverseString('racecar') -> 'racecar';`,
            `reverseString('12345') -> '54321';`,
        ],
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
        examples: [
            `isPalindrome('racecar') -> true;`,
            `isPalindrome('hello') -> false;`,
            `isPalindrome('A man a plan a canal Panama') -> true;`,
            `isPalindrome('No lemon no melon') -> true;`,
            `isPalindrome('Was it a car or a cat I saw') -> true;`,
        ],
    },
    {
        title: 'Reverse Integer',
        slug: 'reverse-integer',
        index: 4,
        level: 1,
        levelName: 'easy',
        tags: ['easy'],
        code: reverseInteger,
        description: 'Write a function that reverses an integer.',
        test: reverseIntTest,
        solution: reverseIntSolution,
        examples: [
            `reverseInt(123) -> 321;`,
            `reverseInt(-456) -> -654;`,
            `reverseInt(1000) -> 1;`,
            `reverseInt(0) -> 0;`,
        ],
    },
    {
        title: 'Anagram',
        slug: 'anagram',
        index: 5,
        level: 1,
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
    {
        title: 'Capitalize',
        slug: 'capitalize',
        index: 6,
        level: 1,
        levelName: 'easy',
        tags: ['easy'],
        code: capitalize,
        description: 'Write a function that accepts a string. The function should capitalize the first letter of each word in the string then return the capitalized string.',
        test: capitalizeTest,
        solution: capitalizeSolution,
        examples: [
            `capitalize('hello') -> 'Hello';`,
            `capitalize('world') -> 'World';`,
            `capitalize('a short sentence') -> 'A Short Sentence';`,
            `capitalize('this is a test') -> 'This Is A Test';`,
        ]
    },
];

export default tasks;