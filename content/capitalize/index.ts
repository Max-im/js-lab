import { ITask } from "@/types";
import code from "./task";
import solution from "./solution";
import { runTests as test } from "./test";

const task: Omit<ITask, 'index'> = {
    title: 'Capitalize',
    slug: 'capitalize',
    level: 1,
    levelName: 'easy',
    tags: ['string'],
    code,
    description: 'Write a function that accepts a string. The function should capitalize the first letter of each word in the string then return the capitalized string.',
    test,
    solution,
    image: 'capitalize.webp',
    examples: [
        `capitalize('hello') -> 'Hello';`,
        `capitalize('world') -> 'World';`,
        `capitalize('a short sentence') -> 'A Short Sentence';`,
        `capitalize('this is a test') -> 'This Is A Test';`,
    ]
};

export default task;