import { IResult, ITask, ITaskLevel } from "@/types";
import content from '@/content';
import { ReadonlyURLSearchParams } from "next/navigation";

export class Task implements ITask {
    title: string;
    slug: string;
    index: number;
    level: number;
    levelName: string;
    tags: string[];
    code: string;
    description: string;
    test: (code: string) => IResult[];
    solution: string;
    examples: string[];
    image: string

    constructor(task: ITask) {
        this.title = task.title;
        this.slug = task.slug;
        this.index = task.index;
        this.level = task.level;
        this.levelName = task.levelName;
        this.tags = task.tags;
        this.code = task.code;
        this.description = task.description;
        this.test = task.test;
        this.solution = task.solution;
        this.examples = task.examples;
        this.image = task.image;
    }

    static getTasks() {
        return content.map(task => new Task(task));
    }

    static getLevels() {
        const levelsObj: { [key: string]: boolean } = {};
        content.forEach(task => {
            levelsObj[task.levelName] = true;
        });

        const levels: ITaskLevel[] = Object.keys(levelsObj).map(level => ({ name: level, current: false }));
        levels.unshift({ name: 'all', current: true });

        return levels;
    }

    static getTask(slug: string) {
        const val = slug.toLowerCase();
        const task = content.find(task => task.slug === val);
        if (!task) return null;
        return new Task(task);
    }

    static getFilteredTasks(searchParams: ReadonlyURLSearchParams | null) {
        let tasks = content.map(task => new Task(task));
        if (!searchParams) {
            return tasks;
        }
        const level = searchParams.get('level');
        const label = searchParams.get('label');

        const selectedLevel = level ? level.toLowerCase() : null;
        const selectedLabel = label ? label.toLowerCase() : null;

        if (selectedLabel) {
            tasks = tasks.filter(task => task.tags.includes(selectedLabel));
        }
        
        if (selectedLevel && selectedLevel !== 'all') {
            tasks = tasks.filter(task => task.levelName === selectedLevel);
        }
        return tasks;

    }

    static getLabels() {
        const labels: string[] = [];
        content.forEach(task => {
            task.tags.forEach(tag => {
                if (!labels.includes(tag)) {
                    labels.push(tag);
                }
            });
        });

        return labels;
    }
}
