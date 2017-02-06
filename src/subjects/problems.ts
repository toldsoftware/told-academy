export interface Problem {
    concept: string;
    promptKind: string;
    choiceKind: string;
    answer: string;
    data: any;
}

export class ProblemHistory {

    constructor() {
    }

    addProblem(problem: Problem): void {

    }
}