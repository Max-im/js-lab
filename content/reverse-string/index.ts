import { ITask } from "@/types";
import code from "./reverse-string.task";
import solution from "./reverse-string.solution";
import { runTests as test } from "./reverseString.test";

const task: ITask = {
    title: 'Reverse a String',
    slug: 'reverse-string',
    index: 2,
    level: 1,
    levelName: 'easy',
    tags: ['easy'],
    code,
    description: 'Write a function that reverses a string.',
    test,
    solution,
    examples: [
        `reverseString('hello') -> 'olleh';`,
        `reverseString('world') -> 'dlrow';`,
        `reverseString('racecar') -> 'racecar';`,
        `reverseString('12345') -> '54321';`,
    ],
};

export default task;