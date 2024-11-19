import fizzBuzz from '../examples/01_fizzbuzz';
import reverseString from '../examples/02_reverse-string';
import palindrome from '../examples/03_palindrome';
import reverseInteger from '../examples/04_reverse-integer';

import {runTests as fizzBuzzTest} from '../testing/fizzbuzz.test';
import {runTests as reverseStringTest} from '../testing/reverseString.test';
import {runTests as palindromTest} from '../testing/palindrome.test';
import {runTests as reverseIntTest} from '../testing/reverseInteger.test';

import fizzBuzzSolution from '../solutions/01_fizzbuzz';
import reverseStringSolution from '../solutions/02_reverse-string';
import palindromSolution from '../solutions/03_palindrome';
import reverseIntSolution from '../solutions/04_reverse-integer';

export default [
    {
        title: 'Fizz Buzz',
        slug: 'fizz-buzz',
        index: 1,
        level: 1,
        tags: ['easy'],
        code: fizzBuzz,
        description: 'Write a program that prints the numbers from 1 to 100. But for multiples of 3 print "Fizz" instead of the number and for the multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5 print "FizzBuzz".',
        test: fizzBuzzTest,
        solution: fizzBuzzSolution
    },
    {
        title: 'Reverse a String',
        slug: 'reverse-string',
        index: 2,
        level: 1,
        tags: ['easy'],
        code: reverseString,
        description: 'Write a function that reverses a string.',
        test: reverseStringTest,
        solution: reverseStringSolution
    },
    {
        title: 'Palindrome',
        slug: 'palindrome',
        index: 3,
        level: 1,
        tags: ['easy'],
        code: palindrome,
        description: 'Write a function that determines if a string is a palindrome.',
        test: palindromTest,
        solution: palindromSolution
    },
    {
        title: 'Reverse Integer',
        slug: 'reverse-integer',
        index: 4,
        level: 1,
        tags: ['easy'],
        code: reverseInteger,
        description: 'Write a function that reverses an integer.',
        test: reverseIntTest,
        solution: reverseIntSolution
    },
];