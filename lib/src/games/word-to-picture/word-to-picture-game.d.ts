import { CanvasGame } from '../../canvas-game';
import { UserInput, CanvasAccess } from '../../canvas-access';
export interface WordProvider {
    getNextWord(): string;
    getChoices(word: string, choiceCount: number): string[];
    answer(word: string, answer: string): boolean;
}
export declare class WordToPictureGame implements CanvasGame {
    private canvasAccess;
    private words;
    word: string;
    choices: {
        word: string;
        imageUrl: string;
        image: HTMLImageElement;
        isDisabled?: boolean;
    }[];
    private buttons;
    private targetButton;
    private attempt;
    private isReadyButtonVisible;
    private speedMode;
    private countdownLimit;
    private countdownTimer;
    private countdownIntervalId;
    constructor(canvasAccess: CanvasAccess, words: WordProvider);
    update(forceRedraw: boolean, input?: UserInput): Promise<void>;
    redraw(forceRedraw: boolean): void;
    startWord(): Promise<void>;
    loadWord(): Promise<void>;
    handleInput(input: UserInput): void;
    selectImage(column: number, row: number): void;
    draw(forceRedraw: boolean): void;
    getButtonUV(column: number, row: number): {
        u: number;
        v: number;
        uw: number;
        vh: number;
    };
    drawImage(image: HTMLImageElement, column: number, row: number, outlineColor?: string): void;
}
