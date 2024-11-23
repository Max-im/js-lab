import { ITask } from "@/types";
import code from "./maxchar.task";
import solution from "./maxchar.solution";
import { runTests as test } from "./maxchar.test";

const task: ITask = {
    title: 'Max Char',
    slug: 'maxchar',
    index: 8,
    level: 2,
    levelName: 'medium',
    tags: ['medium'],
    code,
    description: 'Given a string, return the character that is most commonly used in the string.',
    test,
    solution,
    examples: [
        `maxChar('a') -> 'a'`,
        `maxChar('Hello') -> 'l'`,
        `maxChar('abcccccccd') -> 'c'`,
        `maxChar('apple 1231111') -> '1'`
    ]
};

export default task;