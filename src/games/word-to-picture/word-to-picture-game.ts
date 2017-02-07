import { CanvasGame } from '../../canvas-game';
import { UserInput, UserInputType, CanvasAccess } from '../../canvas-access';
import { getPictures } from './get-pictures';
import { randomize } from '../../utils';


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

    private isReadyButtonVisible = false;

    private speedMode = false;
    private countdownLimit = 15;
    private countdownTimer = 0;
    private countdownIntervalId: any;

    constructor(private canvasAccess: CanvasAccess, private words: WordProvider) {
        this.buttons = [];
        for (let column = 0; column < 3; column++) {
            for (let row = 0; row < 3; row++) {
                let { u, v, uw, vh } = this.getButtonUV(column, row);

                this.buttons.push({
                    u: u + uw * 0.5,
                    v: v + vh * 0.5,
                    callback: () => {
                        if (this.isReadyButtonVisible) {
                            this.loadWord();
                            return;
                        }

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
                if (this.isReadyButtonVisible) {
                    this.loadWord();
                    return;
                }

                this.attempt++;
                this.loadWord();
            }
        });

        // Speed Mode Button
        this.buttons.push({
            u: 0,
            v: 0,
            callback: () => {
                if (this.speedMode === true) {
                    this.speedMode = false;
                    clearInterval(this.countdownIntervalId);
                    return;
                }

                this.speedMode = ((this.speedMode as any) - 1) as any;
                if ((this.speedMode as any) <= -3) {
                    this.speedMode = true;

                    this.countdownIntervalId = setInterval(() => {
                        this.countdownTimer--;

                        if (this.countdownTimer < 0) {
                            this.word = '';
                            this.update(true);
                            this.countdownTimer = this.countdownLimit;
                        }

                        this.redraw(false);
                    }, 1000);
                }

                console.log('speedMode=', this.speedMode);
            }
        });


        // // Ready Button
        // this.buttons.push({
        //     u: 0.5,
        //     v: 0.5,
        //     callback: () => {
        //         if (this.isReadyButtonVisible) {
        //             this.loadWord();
        //         }
        //     }
        // });
    }

    async update(forceRedraw: boolean, input?: UserInput) {

        if (input && input.type !== UserInputType.Move && this.speedMode === true) {
            this.countdownTimer = this.countdownLimit;
        }

        this.handleInput(input);

        // Get Next Word
        if (this.word) {
            if (forceRedraw) {
                this.redraw(forceRedraw);
            }
            return;
        }

        // Get next word
        if (!this.word) {
            this.word = this.words.getNextWord();
            this.attempt = 0;
            await this.startWord();
        }

        this.redraw(forceRedraw);
    }

    redraw(forceRedraw: boolean) {
        requestAnimationFrame(() => {
            this.draw(forceRedraw);
        });
    }

    async startWord() {
        if (this.speedMode === true) {
            this.countdownTimer = this.countdownLimit;
            await this.loadWord();
            return;
        }

        // Draw the word alone
        this.choices = null;
        this.isReadyButtonVisible = true;
        requestAnimationFrame(() => {
            this.draw(false);
        });
    }

    async loadWord() {
        // Draw blank
        this.choices = null;
        this.isReadyButtonVisible = false;
        requestAnimationFrame(() => {
            this.draw(false);
        });

        // Get word images

        let wordImageUrls: string[] = [];
        if (this.attempt <= 0) { wordImageUrls = await getPictures(this.word, 3, this.attempt - 0); }
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
            ctx.fillStyle = '#FFFF00';

            if (!this.isReadyButtonVisible) {
                ctx.font = '24px sans-serif';
                let rect = ctx.measureText(this.word);
                ctx.fillText(this.word, w * 0.5 - rect.width * 0.5, h * 0.1);
            } else {
                ctx.font = '48px sans-serif';
                let rect = ctx.measureText(this.word);
                ctx.fillText(this.word, w * 0.5 - rect.width * 0.5, h * 0.4);

                // ctx.font = '48px sans-serif';
                // rect = ctx.measureText('>');
                // ctx.fillText('>', w * 0.5 - rect.width * 0.5, h * 0.75);
            }

        }

        if (this.countdownTimer) {
            ctx.fillStyle = '#00FF00';
            ctx.font = '24px sans-serif';
            ctx.fillText(this.countdownTimer + '', w * 0.05, h * 0.05);
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