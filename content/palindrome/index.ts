import { ITask } from "@/types";
import code from "./palindrome.task";
import solution from "./palindrome.solution";
import { runTests as test } from "./palindrome.test";

const task: Omit<ITask, 'index'> = {
    title: 'Palindrome',
    slug: 'palindrome',
    level: 1,
    levelName: 'easy',
    tags: ['easy'],
    code,
    description: 'Write a function that determines if a string is a palindrome.',
    test,
    solution,
    examples: [
        `isPalindrome('racecar') -> true;`,
        `isPalindrome('hello') -> false;`,
        `isPalindrome('A man a plan a canal Panama') -> true;`,
        `isPalindrome('No lemon no melon') -> true;`,
        `isPalindrome('Was it a car or a cat I saw') -> true;`,
    ],
};

export default task;