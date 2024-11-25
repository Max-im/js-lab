import { ITask } from "@/types";
import code from "./capitalize.task";
import solution from "./capitalize.solution";
import { runTests as test } from "./capitalize.test";

const task: Omit<ITask, 'index'> = {
    title: 'Capitalize',
    slug: 'capitalize',
    level: 1,
    levelName: 'easy',
    tags: ['easy'],
    code,
    description: 'Write a function that accepts a string. The function should capitalize the first letter of each word in the string then return the capitalized string.',
    test,
    solution,
    examples: [
        `capitalize('hello') -> 'Hello';`,
        `capitalize('world') -> 'World';`,
        `capitalize('a short sentence') -> 'A Short Sentence';`,
        `capitalize('this is a test') -> 'This Is A Test';`,
    ]
};

export default task;