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
    examples: [
        `binarySum('0000101', '0000010') -> '0000111';`,
        `binarySum('0000101', '0000101') -> '0001010';`,
        `binarySum('0000001', '0000001') -> '0000010';`,
        `binarySum('0000000', '0000000') -> '0000000';`,
        `binarySum('1111111', '0000001') -> '10000000';`,
        `binarySum('1111111', '1111111') -> '11111110';`,
        `binarySum('0000000', '1111111') -> '1111111';`,
        `binarySum('1111111', '0000000') -> '1111111';`,
    ],
};

export default task;