import { WordProvider } from '../src/games/word-to-picture/word-to-picture-game';
export declare class SimpleWordProvider implements WordProvider {
    words: string[];
    iWord: number;
    constructor();
    getNextWord(): string;
    getChoices(word: string, count: number): string[];
    answer(word: string, answer: string): boolean;
}
