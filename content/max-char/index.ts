import { ITask } from "@/types";
import code from "./task";
import solution from "./solution";
import { runTests as test } from "./test";

const task: Omit<ITask, 'index'> = {
    title: 'Max Char',
    slug: 'maxchar',
    level: 2,
    levelName: 'medium',
    tags: ['string'],
    code,
    description: 'Given a string, return the character that is most commonly used in the string.',
    test,
    solution,
    image: 'maxchar.webp',
    examples: [
        `maxChar('a') -> 'a'`,
        `maxChar('Hello') -> 'l'`,
        `maxChar('abcccccccd') -> 'c'`,
        `maxChar('apple 1231111') -> '1'`
    ]
};

export default task;