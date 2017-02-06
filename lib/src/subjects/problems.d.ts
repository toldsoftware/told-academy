export interface Problem {
    concept: string;
    promptKind: string;
    choiceKind: string;
    answer: string;
    data: any;
}
export declare class ProblemHistory {
    constructor();
    addProblem(problem: Problem): void;
}
