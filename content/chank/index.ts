import { ITask } from "@/types";
import code from "./task";
import solution from "./solution";
import { runTests as test } from "./test";

const task: Omit<ITask, 'index'> = {
    title: 'Array Chunking',
    slug: 'chank',
    level: 2,
    levelName: 'medium',
    tags: ['array'],
    code,
    description: 'Write a function that takes an array and chunk size as arguments and returns an array of arrays where each subarray has at most the specified number of elements.',
    test,
    solution,
    image: '',
    examples: [
        `chank([1, 2, 3, 4], 2) -> [[1, 2], [3, 4]];`,
        `chank([1, 2, 3, 4, 5], 2) -> [[1, 2], [3, 4], [5]];`,
        `chank([1, 2, 3], 1) -> [[1], [2], [3]];`,
    ]
};

export default task;