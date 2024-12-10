import { ILevels, ILevelType, IResult, ITask, ITaskLevel } from "@/types";
import content from '@/content';

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
    }

    static getTasks() {
        return content.map(task => new Task(task));
    }

    static getLevels() {
        const levelsObj: {[key: string]: boolean} = {};
        content.forEach(task => {
            levelsObj[task.levelName] = true;
        });

        const levels: ITaskLevel[] = Object.keys(levelsObj).map(level => ({name: level, current: false}));
        levels.unshift({name: 'all', current: true});

        return levels;
    }

    static getTasksByLevel(level: string) {
        const lev = level.toLowerCase() as ILevelType;

        if (lev === 'all' || !ILevels.includes(lev)) {
            return content.map(task => new Task(task));
        } else {
            return content.filter(task => task.levelName === level).map(task => new Task(task));
        }
    }

    static getTask(slug: string) {
        const val = slug.toLowerCase();
        const task = content.find(task => task.slug === val);
        if (!task) return null;
        return new Task(task);
    }
}
