import { ITask } from '@/types';

import fizzBuzz from './fizzbuzz';
import reverseString from './reverse-string';
import palindrome from './palindrome';
import reverseInt from './reverse-int';
import anagram from './anagram';
import capitalize from './capitalize';
import chank from './chank';

const tasks: ITask[] = [
    fizzBuzz,
    reverseString,
    palindrome,
    reverseInt,
    anagram,
    capitalize,
    chank,
];

export default tasks;