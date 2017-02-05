"use strict";
var DEBUG = false;
function createBuffer() {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    return { canvas: canvas, context: context };
}
var UserInputType;
(function (UserInputType) {
    UserInputType[UserInputType["Move"] = 0] = "Move";
    UserInputType[UserInputType["Start"] = 1] = "Start";
    UserInputType[UserInputType["Drag"] = 2] = "Drag";
    UserInputType[UserInputType["End"] = 3] = "End";
    UserInputType[UserInputType["ChangeToMultipleStart"] = 4] = "ChangeToMultipleStart";
    UserInputType[UserInputType["MultipleEnd"] = 5] = "MultipleEnd";
    UserInputType[UserInputType["MultipleEndAfter"] = 6] = "MultipleEndAfter";
    UserInputType[UserInputType["Zoom"] = 7] = "Zoom";
})(UserInputType = exports.UserInputType || (exports.UserInputType = {}));
var CanvasAccess = (function () {
    function CanvasAccess(host, onInput, onResize) {
        var _this = this;
        this.onInput = onInput;
        this.onResize = onResize;
        this.isInputDown = false;
        this.finalBuffer = createBuffer();
        host.appendChild(this.finalBuffer.canvas);
        this.canvas = this.finalBuffer.canvas;
        this.context = this.finalBuffer.context;
        var resize = function () {
            _this.width = _this.finalBuffer.canvas.width = host.clientWidth;
            _this.height = _this.finalBuffer.canvas.height = host.clientHeight;
            onResize();
        };
        resize();
        host.addEventListener('resize', function () { return resize(); });
        window.addEventListener('resize', function () { return resize(); });
        this.finalBuffer.canvas.addEventListener('mousedown', function (e) { return _this.getInput(e, UserInputType.Start); });
        this.finalBuffer.canvas.addEventListener('touchstart', function (e) { return _this.getInput(e, UserInputType.Start, true); });
        window.addEventListener('mousemove', function (e) { return _this.getInput(e, UserInputType.Move); });
        window.addEventListener('touchmove', function (e) { return _this.getInput(e, UserInputType.Move, true); });
        window.addEventListener('mouseup', function (e) { return _this.getInput(e, UserInputType.End); });
        window.addEventListener('touchend', function (e) { return _this.getInput(e, UserInputType.End, true); });
        this.finalBuffer.canvas.addEventListener('mousewheel', function (e) { return _this.getInput(e, UserInputType.Zoom, false); });
    }
    CanvasAccess.prototype.getInput = function (e, type, isTouch) {
        if (isTouch === void 0) { isTouch = false; }
        var origType = type;
        var xCanvas = this.xCanvasLast;
        var yCanvas = this.yCanvasLast;
        var cvs = this.finalBuffer.canvas;
        var rect = cvs.getBoundingClientRect();
        var me = e;
        var te = e;
        var isMultiple = false;
        var x2Canvas = this.x2CanvasLast;
        var y2Canvas = this.y2CanvasLast;
        var isAnyTouch = false;
        var inputCount = 0;
        if (me.clientX) {
            xCanvas = me.clientX - rect.left;
            yCanvas = me.clientY - rect.top;
            inputCount = 1;
        }
        else if (te.touches != null && te.touches.length > 0) {
            xCanvas = te.touches[0].clientX - rect.left;
            yCanvas = te.touches[0].clientY - rect.top;
            inputCount = 1;
            if (te.touches[1]) {
                if (DEBUG) {
                    console.log('2 FINGER');
                }
                x2Canvas = te.touches[1].clientX - rect.left;
                y2Canvas = te.touches[1].clientY - rect.top;
                isMultiple = true;
                inputCount = 2;
            }
            isAnyTouch = true;
        }
        var isMultipleStart = isMultiple && !this.isMultipleLast;
        var isMultipleEnd = !isMultiple && this.isMultipleLast;
        this.xCanvasLast = xCanvas;
        this.yCanvasLast = yCanvas;
        this.x2CanvasLast = x2Canvas;
        this.y2CanvasLast = y2Canvas;
        this.isMultipleLast = isMultiple;
        // Scale for viewPort
        var u = (xCanvas / cvs.width);
        var v = (yCanvas / cvs.height);
        var x = u * this.width;
        var y = v * this.height;
        var u2 = (x2Canvas / cvs.width);
        var v2 = (y2Canvas / cvs.height);
        var x2 = u2 * this.width;
        var y2 = v2 * this.height;
        if (type === UserInputType.Move && this.isInputDown) {
            type = UserInputType.Drag;
        }
        if (isMultipleStart) {
            type = UserInputType.ChangeToMultipleStart;
            this.hasBeenMultiple = true;
            this.inputDownStart = Date.now();
            isMultiple = true;
        }
        else if (isMultipleEnd) {
            type = UserInputType.MultipleEnd;
            isMultiple = true;
        }
        else if (!isMultiple && this.hasBeenMultiple) {
            type = UserInputType.MultipleEndAfter;
            isMultiple = true;
        }
        var duration = Date.now() - (this.inputDownStart || Date.now());
        var zoomAmount = e.deltaY;
        this.onInput({ x: x, y: y, type: type, duration: duration, u: u, v: v, isMultiple: isMultiple, inputCount: inputCount, u2: u2, v2: v2, x2: x2, y2: y2, isTouch: isTouch, zoomAmount: zoomAmount });
        if (origType === UserInputType.Start) {
            this.isInputDown = true;
            this.inputDownStart = Date.now();
        }
        else if (origType === UserInputType.End && !isAnyTouch) {
            this.isInputDown = false;
            this.inputDownStart = null;
            this.hasBeenMultiple = false;
        }
        e.preventDefault();
        return false;
    };
    return CanvasAccess;
}());
exports.CanvasAccess = CanvasAccess;
//# sourceMappingURL=canvas-access.js.map