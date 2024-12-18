import { ITask } from "@/types";
import code from "./task";
import solution from "./solution";
import { runTests as test } from "./test";

const task: Omit<ITask, 'index'> = {
    title: 'Binary Sum',
    slug: 'binary-sum',
    level: 3,
    levelName: 'hard',
    tags: ['number', 'string'],
    code,
    description: 'Write a function that takes two binary strings and returns their sum (also a binary string).',
    test,
    solution,
    image: 'binarysum.webp',
    examples: [
        `('0000101', '0000010') -> '0000111';`,
        `('0000001', '0000001') -> '0000010';`,
        `('111111', '000001') -> '1000000';`,
        `('111111', '111111') -> '1111110';`,
        `('111111', '000000') -> '111111';`,
    ],
};

export default task;