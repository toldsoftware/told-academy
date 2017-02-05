import { CanvasGame } from '../../canvas-game';
import { UserInput, CanvasAccess } from '../../canvas-access';
export declare class Game implements CanvasGame {
    private canvasAccess;
    words: string[];
    iWord: number;
    word: string;
    wordImageUrls: string[];
    wordImages: HTMLImageElement[];
    private buttons;
    private targetButton;
    constructor(canvasAccess: CanvasAccess);
    update(forceRedraw: boolean, input?: UserInput): Promise<void>;
    handleInput(input: UserInput): void;
    selectImage(column: number, row: number): void;
    draw(forceRedraw: boolean): void;
    getButtonUV(column: number, row: number): {
        u: number;
        v: number;
        uw: number;
        vh: number;
    };
    drawImage(image: HTMLImageElement, column: number, row: number): void;
}
