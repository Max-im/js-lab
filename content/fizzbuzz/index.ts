import { ITask } from "@/types";
import code from "./fizzbuzz.task";
import solution from "./fizzbuzz.solution";
import {runTests as test} from "./fizzbuzz.test";

const task: ITask = {
    title: 'Fizz Buzz',
    slug: 'fizz-buzz',
    index: 1,
    level: 1,
    levelName: 'easy',
    tags: ['easy'],
    code,
    description: 'Write a program that prints the numbers from 1 to the passed param. But for multiples of 3 print "Fizz" instead of the number and for the multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5 print "FizzBuzz".',
    test,
    solution,
    examples: [`fizzBuzz(15) -> console.log(1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz');`],
};

export default task;