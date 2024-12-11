import { ITask } from '@/types';

import fizzBuzz from './fizzbuzz';
import reverseString from './reverse-string';
import palindrome from './palindrome';
import reverseInt from './reverse-int';
import anagram from './anagram';
import capitalize from './capitalize';
import chank from './chank';
import maxChar from './max-char';
import mario from './mario';

const tasks: ITask[] = [
    reverseString,
    palindrome,
    reverseInt,
    fizzBuzz,
    anagram,
    capitalize,
    mario,
    chank,
    maxChar,
].map((task, index) => ({ ...task, index: index + 1 }));

export default tasks;