export interface CanvasBuffer {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
}
export interface UserInput {
    u: number;
    v: number;
    duration: number;
    x: number;
    y: number;
    type: UserInputType;
    isTouch: boolean;
    isMultiple: boolean;
    inputCount: number;
    u2: number;
    v2: number;
    x2: number;
    y2: number;
    zoomAmount: number;
}
export declare enum UserInputType {
    Move = 0,
    Start = 1,
    Drag = 2,
    End = 3,
    ChangeToMultipleStart = 4,
    MultipleEnd = 5,
    MultipleEndAfter = 6,
    Zoom = 7,
}
export declare class CanvasAccess {
    private onInput;
    private onResize;
    private finalBuffer;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    width: number;
    height: number;
    private isInputDown;
    private inputDownStart;
    private xCanvasLast;
    private yCanvasLast;
    private isMultipleLast;
    private hasBeenMultiple;
    private x2CanvasLast;
    private y2CanvasLast;
    constructor(host: HTMLDivElement, onInput: (input: UserInput) => void, onResize: () => void);
    getInput(e: Event, type: UserInputType, isTouch?: boolean): false;
}
