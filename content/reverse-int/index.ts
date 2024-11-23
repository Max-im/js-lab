import { ITask } from "@/types";
import code from "./reverse-integer.task";
import solution from "./reverse-integer.solution";
import { runTests as test } from "./reverseInteger.test";

const task: ITask = {
    title: 'Reverse Integer',
    slug: 'reverse-integer',
    index: 4,
    level: 1,
    levelName: 'easy',
    tags: ['easy'],
    code,
    description: 'Write a function that reverses an integer.',
    test,
    solution,
    examples: [
        `reverseInt(123) -> 321;`,
        `reverseInt(-456) -> -654;`,
        `reverseInt(1000) -> 1;`,
        `reverseInt(0) -> 0;`,
    ],
};

export default task;