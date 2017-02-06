import { CanvasGame } from '../../canvas-game';
import { UserInput, UserInputType, CanvasAccess } from '../../canvas-access';
import { getPictures } from './get-pictures';
import { randomize } from '../../randomize';


interface Button {
    u: number;
    v: number;
    callback: () => void;
}

export interface WordProvider {
    getNextWord(): string;
    getChoices(word: string, choiceCount: number): string[];
    answer(word: string, answer: string): boolean;
}

export class WordToPictureGame implements CanvasGame {

    word: string;
    choices: { word: string, imageUrl: string, image: HTMLImageElement, isDisabled?: boolean }[];

    private buttons: Button[];
    private targetButton: Button;
    private attempt = 0;

    constructor(private canvasAccess: CanvasAccess, private words: WordProvider) {
        this.buttons = [];
        for (let column = 0; column < 3; column++) {
            for (let row = 0; row < 3; row++) {
                let { u, v, uw, vh } = this.getButtonUV(column, row);

                this.buttons.push({
                    u: u + uw * 0.5,
                    v: v + vh * 0.5,
                    callback: () => {
                        this.selectImage(column, row);
                    }
                });
            }
        }

        // Reload Button
        this.buttons.push({
            u: 0.5,
            v: 0,
            callback: () => {
                this.attempt++;
                this.loadWord();
            }
        });
    }

    async update(forceRedraw: boolean, input?: UserInput) {

        this.handleInput(input);

        // Get Next Word
        if (this.word) {
            if (forceRedraw) {
                requestAnimationFrame(() => {
                    this.draw(forceRedraw);
                });
            }
            return;
        }

        // Get next word
        if (!this.word) {
            this.word = this.words.getNextWord();
            this.attempt = 0;

            await this.loadWord();
        }

        requestAnimationFrame(() => {
            this.draw(forceRedraw);
        });
    }

    async loadWord() {
        // Draw blank
        this.choices = null;
        requestAnimationFrame(() => {
            this.draw(false);
        });

        // Get word images

        let wordImageUrls: string[] = [];
        if (this.attempt <= 0) { wordImageUrls = await getPictures(this.word, 3, this.attempt); }
        else if (this.attempt <= 4) { wordImageUrls = await getPictures(this.word, 9, this.attempt - 1); }
        else {
            // Fail
            this.word = null;
            setTimeout(() => {
                this.update(false);
            });
            return;
        }

        this.choices = wordImageUrls.map(x => ({
            word: this.word,
            imageUrl: x,
            image: null
        }));

        if (this.choices.length <= 0) {
            this.word = null;
            setTimeout(() => {
                this.update(false);
            });
            return;
        }

        // Add Wrong Choices
        if (this.attempt < 1) {
            for (let choice of this.words.getChoices(this.word, 2)) {
                let wrongWordImageUrls = await getPictures(choice, 3);
                this.choices.push(...wrongWordImageUrls.map(x => ({
                    word: choice,
                    imageUrl: x,
                    image: null
                })));
            }
        }

        // Randomize
        this.choices = randomize(this.choices);

        for (let c of this.choices) {
            let image = c.image = new Image();
            image.src = c.imageUrl;
            image.onload = () => {
                requestAnimationFrame(() => {
                    this.draw(false);
                });
            };
        }
    }

    handleInput(input: UserInput) {
        if (!input) { return; }

        if (input.type === UserInputType.Start) {
            if (this.buttons.length <= 0) { return; }

            console.log(input);

            let distances = this.buttons.map(b => ({
                b: b,
                distSq: (b.u - input.u) * (b.u - input.u) + (b.v - input.v) * (b.v - input.v)
            }));

            let nearest = distances.reduce((out, b) => out.distSq < b.distSq ? out : b);

            this.targetButton = nearest.b;
            console.log(this.targetButton);
        }

        if (input.type === UserInputType.End) {
            this.targetButton && this.targetButton.callback();
            this.targetButton = null;
        }
    }

    selectImage(column: number, row: number) {
        let i = column * 3 + row;
        console.log(i, this.choices[i]);

        let choice = this.choices[i];
        if (choice.isDisabled) {
            return;
        }

        let isRight = this.words.answer(this.word, choice.word);

        // TODO: Record Image Selection



        if (!isRight) {
            choice.isDisabled = true;

            // TODO: Only redraw mistake
            requestAnimationFrame(() => {
                this.draw(true);
            });
            return;
        }

        this.word = null;
        setTimeout(() => {
            this.update(false);
        });
    }

    draw(forceRedraw: boolean) {
        let cvx = this.canvasAccess.canvas;
        let ctx = this.canvasAccess.context;
        let w = this.canvasAccess.width;
        let h = this.canvasAccess.height;

        //        if (forceRedraw) {
        ctx.clearRect(0, 0, w, h);
        //      }

        if (this.word) {
            let rect = ctx.measureText(this.word);
            ctx.fillStyle = '#FFFF00';
            ctx.font = '24px sans-serif';
            ctx.fillText(this.word, w * 0.5 - rect.width * 0.5, h * 0.1);
        }

        if (this.choices) {
            for (let i = 0; i < this.choices.length; i++) {
                let choice = this.choices[i];
                let wordImage = choice.image;
                if (!wordImage.width) { continue; }

                this.drawImage(wordImage, Math.floor(i / 3), i % 3, choice.isDisabled ? '#FF0000' : '#00FF00');
            }
        }
    }

    getButtonUV(column: number, row: number) {
        let u = 0.05 + column * 0.3;
        let v = 0.15 + row * 0.25;
        let uw = 0.3 - 0.025;
        let vh = 0.25 - 0.025;
        return { u, v, uw, vh };
    }

    drawImage(image: HTMLImageElement, column: number, row: number, outlineColor = '#00FF00') {

        let { u, v, uw, vh } = this.getButtonUV(column, row);

        let w = this.canvasAccess.width;
        let h = this.canvasAccess.height;
        let ctx = this.canvasAccess.context;

        // Maintain Image Aspect Ratio
        let ws = w * uw;
        let hs = h * vh;
        let xs = w * u;
        let ys = h * v;

        let wi = image.width;
        let hi = image.height;

        let wScale = ws / wi;
        let hScale = hs / hi;
        let scale = Math.min(wScale, hScale);

        let wsNew = wi * scale;
        let hsNew = hi * scale;
        xs += (ws - wsNew) * 0.5;
        ys += (hs - hsNew) * 0.5;
        ws = wsNew;
        hs = hsNew;

        ctx.drawImage(image, 0, 0, wi, hi, xs, ys, ws, hs);

        ctx.strokeStyle = outlineColor;
        ctx.strokeRect(w * u, h * v, w * uw, h * vh);

        // console.log(column, row, u, v);
    }
}