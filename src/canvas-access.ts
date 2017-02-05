const DEBUG = false;

export interface CanvasBuffer {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
}

function createBuffer() {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    return { canvas, context };
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

export enum UserInputType {
    Move,
    Start,
    Drag,
    End,
    ChangeToMultipleStart,
    MultipleEnd,
    MultipleEndAfter,
    Zoom
}

export class CanvasAccess {
    private finalBuffer: CanvasBuffer;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    width: number;
    height: number;

    private isInputDown = false;
    private inputDownStart: number;

    private xCanvasLast: number;
    private yCanvasLast: number;

    private isMultipleLast: boolean;
    private hasBeenMultiple: boolean;
    private x2CanvasLast: number;
    private y2CanvasLast: number;

    constructor(host: HTMLDivElement, private onInput: (input: UserInput) => void, private onResize: () => void) {
        this.finalBuffer = createBuffer();
        host.appendChild(this.finalBuffer.canvas);
        this.canvas = this.finalBuffer.canvas;
        this.context = this.finalBuffer.context;

        let resize = () => {
            this.width = this.finalBuffer.canvas.width = host.clientWidth;
            this.height = this.finalBuffer.canvas.height = host.clientHeight;
            onResize();
        };

        resize();
        host.addEventListener('resize', () => resize());
        window.addEventListener('resize', () => resize());

        this.finalBuffer.canvas.addEventListener('mousedown', (e) => this.getInput(e, UserInputType.Start));
        this.finalBuffer.canvas.addEventListener('touchstart', (e) => this.getInput(e, UserInputType.Start, true));

        window.addEventListener('mousemove', (e) => this.getInput(e, UserInputType.Move));
        window.addEventListener('touchmove', (e) => this.getInput(e, UserInputType.Move, true));
        window.addEventListener('mouseup', (e) => this.getInput(e, UserInputType.End));
        window.addEventListener('touchend', (e) => this.getInput(e, UserInputType.End, true));

        this.finalBuffer.canvas.addEventListener('mousewheel', (e) => this.getInput(e, UserInputType.Zoom, false));
    }

    getInput(e: Event, type: UserInputType, isTouch = false): false {

        let origType = type;

        let xCanvas = this.xCanvasLast;
        let yCanvas = this.yCanvasLast;

        let cvs = this.finalBuffer.canvas;

        let rect = cvs.getBoundingClientRect();

        let me = e as MouseEvent;
        let te = e as TouchEvent;

        let isMultiple = false;
        let x2Canvas = this.x2CanvasLast;
        let y2Canvas = this.y2CanvasLast;

        let isAnyTouch = false;
        let inputCount = 0;

        if (me.clientX) {
            xCanvas = me.clientX - rect.left;
            yCanvas = me.clientY - rect.top;
            inputCount = 1;
        } else if (te.touches != null && te.touches.length > 0) {
            xCanvas = te.touches[0].clientX - rect.left;
            yCanvas = te.touches[0].clientY - rect.top;
            inputCount = 1;

            if (te.touches[1]) {
                if (DEBUG) { console.log('2 FINGER'); }

                x2Canvas = te.touches[1].clientX - rect.left;
                y2Canvas = te.touches[1].clientY - rect.top;
                isMultiple = true;
                inputCount = 2;
            }

            isAnyTouch = true;
        }

        let isMultipleStart = isMultiple && !this.isMultipleLast;
        let isMultipleEnd = !isMultiple && this.isMultipleLast;

        this.xCanvasLast = xCanvas;
        this.yCanvasLast = yCanvas;
        this.x2CanvasLast = x2Canvas;
        this.y2CanvasLast = y2Canvas;
        this.isMultipleLast = isMultiple;

        // Scale for viewPort
        let u = (xCanvas / cvs.width);
        let v = (yCanvas / cvs.height);
        let x = u * this.width;
        let y = v * this.height;

        let u2 = (x2Canvas / cvs.width);
        let v2 = (y2Canvas / cvs.height);
        let x2 = u2 * this.width;
        let y2 = v2 * this.height;

        if (type === UserInputType.Move && this.isInputDown) {
            type = UserInputType.Drag;
        }

        if (isMultipleStart) {
            type = UserInputType.ChangeToMultipleStart;
            this.hasBeenMultiple = true;
            this.inputDownStart = Date.now();
            isMultiple = true;
        } else if (isMultipleEnd) {
            type = UserInputType.MultipleEnd;
            isMultiple = true;
        } else if (!isMultiple && this.hasBeenMultiple) {
            type = UserInputType.MultipleEndAfter;
            isMultiple = true;
        }

        let duration = Date.now() - (this.inputDownStart || Date.now());

        let zoomAmount = (e as MouseWheelEvent).deltaY;

        this.onInput({ x, y, type, duration, u, v, isMultiple, inputCount, u2, v2, x2, y2, isTouch, zoomAmount });

        if (origType === UserInputType.Start) {
            this.isInputDown = true;
            this.inputDownStart = Date.now();
        } else if (origType === UserInputType.End && !isAnyTouch) {
            this.isInputDown = false;
            this.inputDownStart = null;
            this.hasBeenMultiple = false;
        }

        e.preventDefault();
        return false;
    }
}