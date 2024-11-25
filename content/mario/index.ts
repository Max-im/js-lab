import { ITask } from "@/types";
import code from "./mario.task";
import solution from "./mario.solution";
import { runTests as test } from "./mario.test";

const task: Omit<ITask, 'index'> = {
    title: 'Mario',
    slug: 'mario',
    level: 1,
    levelName: 'easy',
    tags: ['easy'],
    code,
    description: 'Write a function `mario` that takes a number `n` and prints a right-aligned staircase of height `n` using the `#` character.',
    test,
    solution,
    examples: [
        `mario(1) -> console.log('#\n');`,
        `mario(2) -> console.log('# \n##\n');`,
        `mario(3) -> console.log('#  \n## \n###\n');`,
    ]
};

export default task;