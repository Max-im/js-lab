import { ITask } from "@/types";
import code from "./task";
import solution from "./solution";
import { runTests as test } from "./test";

const task: Omit<ITask, 'index'> = {
    title: 'Reverse a String',
    slug: 'reverse-string',
    level: 1,
    levelName: 'easy',
    tags: ['string'],
    code,
    description: 'Write a function that reverses a string.',
    test,
    solution,
    image: 'reversestring.webp',
    examples: [
        `reverseString('hello') -> 'olleh';`,
        `reverseString('world') -> 'dlrow';`,
        `reverseString('racecar') -> 'racecar';`,
        `reverseString('12345') -> '54321';`,
    ],
};

export default task;