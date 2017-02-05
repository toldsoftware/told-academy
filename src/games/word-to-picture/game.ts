import { CanvasGame } from '../../canvas-game';
import { UserInput, UserInputType, CanvasAccess } from '../../canvas-access';
import { getPictures } from './get-pictures-open-clip-art';


let TEMP_WORDS = ['touch', 'zebra', 'keyboard', 'car', 'cat', 'hat', 'dog'];

interface Button {
    u: number;
    v: number;
    callback: () => void;
}


export class Game implements CanvasGame {

    words: string[];
    iWord: number;
    word: string;
    wordImageUrls: string[];
    wordImages: HTMLImageElement[];

    private buttons: Button[];
    private targetButton: Button;

    constructor(private canvasAccess: CanvasAccess) {
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

        if (!this.words) {
            // TODO: Get Word List
            this.words = TEMP_WORDS;
            this.iWord = -1;
        }

        // Get next word
        if (!this.word) {
            this.iWord++;
            if (this.iWord >= this.words.length) {
                this.iWord = 0;
            }
            this.word = this.words[this.iWord];

            // Get word images
            this.wordImageUrls = await getPictures(this.word);
            this.wordImages = [];
            if (this.wordImageUrls.length > 9) {
                this.wordImageUrls = this.wordImageUrls.slice(0, 9);
            }

            for (let i = 0; i < this.wordImageUrls.length; i++) {
                let url = this.wordImageUrls[i];

                let image = this.wordImages[i] = new Image();
                image.src = url;
                image.onload = () => {
                    requestAnimationFrame(() => {
                        this.draw(false);
                    });
                };
            }
        }

        requestAnimationFrame(() => {
            this.draw(forceRedraw);
        });
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
        console.log(i, this.wordImages[i], this.wordImageUrls[i]);

        // TODO: Record Image Selection
        this.word = null;
        this.wordImages = null;
        this.wordImageUrls = null;
        requestAnimationFrame(() => {
            this.draw(false);
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

        if (this.wordImages) {
            for (let i = 0; i < this.wordImages.length; i++) {
                let wordImage = this.wordImages[i];
                if (!wordImage.width) { continue; }

                this.drawImage(wordImage, Math.floor(i / 3), i % 3);
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

    drawImage(image: HTMLImageElement, column: number, row: number) {

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

        ctx.strokeStyle = '#CCCCCC';
        ctx.strokeRect(w * u, h * v, w * uw, h * vh);

        // console.log(column, row, u, v);
    }
}