import { ITask } from "@/types";
import code from "./task";
import solution from "./solution";
import { runTests as test } from "./test";

const task: Omit<ITask, 'index'> = {
    title: 'Reverse Integer',
    slug: 'reverse-integer',
    level: 1,
    levelName: 'easy',
    tags: ['number'],
    code,
    description: 'Write a function that reverses an integer.',
    test,
    solution,
    image: 'reversenumber.webp',
    examples: [
        `reverseInt(123) -> 321;`,
        `reverseInt(-456) -> -654;`,
        `reverseInt(1000) -> 1;`,
        `reverseInt(0) -> 0;`,
    ],
};

export default task;