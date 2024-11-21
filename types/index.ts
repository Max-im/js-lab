export interface IResult {
    message: string;
    passed: boolean;
};

export interface ITask {
    title: string,
    slug: string,
    index: number,
    level: number,
    levelName: string,
    tags: string[],
    code: string,
    description: string,
    test: (code: string) => IResult[],
    solution: string;
};


export interface ITaskLevel {
    name: string,
    current: boolean
}