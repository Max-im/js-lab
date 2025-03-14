import { ITask } from "@/types";
import code from "./task";
import solution from "./solution";
import { runTests as test } from "./test";

const task: Omit<ITask, 'index'> = {
    title: 'Anagram',
    slug: 'anagram',
    level: 1,
    levelName: 'easy',
    tags: ['string'],
    code,
    description: 'Check if two strings are anagrams of each other. An anagram uses the same characters in the same quantity. Ignore spaces, punctuation, and case differences.',
    test,
    solution,
    image: 'anagram.webp',
    examples: [
        `anagram('listen', 'silent') -> true;`,
        `anagram('hello', 'world') -> false;`,
        `anagram('abc', 'abcd') -> false;`,
        `anagram('Listen', 'Silent') -> true;`,
        `anagram('conversation', 'voices rant on') -> true;`
    ]
};

export default task;