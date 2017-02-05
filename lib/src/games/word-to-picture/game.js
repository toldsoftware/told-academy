"use strict";
var tslib_1 = require("tslib");
var canvas_access_1 = require("../../canvas-access");
var get_pictures_open_clip_art_1 = require("./get-pictures-open-clip-art");
var TEMP_WORDS = ['touch', 'zebra', 'keyboard', 'car', 'cat', 'hat', 'dog'];
var Game = (function () {
    function Game(canvasAccess) {
        var _this = this;
        this.canvasAccess = canvasAccess;
        this.buttons = [];
        var _loop_1 = function (column) {
            var _loop_2 = function (row) {
                var _a = this_1.getButtonUV(column, row), u = _a.u, v = _a.v, uw = _a.uw, vh = _a.vh;
                this_1.buttons.push({
                    u: u + uw * 0.5,
                    v: v + vh * 0.5,
                    callback: function () {
                        _this.selectImage(column, row);
                    }
                });
            };
            for (var row = 0; row < 3; row++) {
                _loop_2(row);
            }
        };
        var this_1 = this;
        for (var column = 0; column < 3; column++) {
            _loop_1(column);
        }
    }
    Game.prototype.update = function (forceRedraw, input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, i, url, image;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.handleInput(input);
                        // Get Next Word
                        if (this.word) {
                            if (forceRedraw) {
                                requestAnimationFrame(function () {
                                    _this.draw(forceRedraw);
                                });
                            }
                            return [2 /*return*/];
                        }
                        if (!this.words) {
                            // TODO: Get Word List
                            this.words = TEMP_WORDS;
                            this.iWord = -1;
                        }
                        if (!!this.word) return [3 /*break*/, 2];
                        this.iWord++;
                        if (this.iWord >= this.words.length) {
                            this.iWord = 0;
                        }
                        this.word = this.words[this.iWord];
                        // Get word images
                        _a = this;
                        return [4 /*yield*/, get_pictures_open_clip_art_1.getPictures(this.word)];
                    case 1:
                        // Get word images
                        _a.wordImageUrls = _b.sent();
                        this.wordImages = [];
                        if (this.wordImageUrls.length > 9) {
                            this.wordImageUrls = this.wordImageUrls.slice(0, 9);
                        }
                        for (i = 0; i < this.wordImageUrls.length; i++) {
                            url = this.wordImageUrls[i];
                            image = this.wordImages[i] = new Image();
                            image.src = url;
                            image.onload = function () {
                                requestAnimationFrame(function () {
                                    _this.draw(false);
                                });
                            };
                        }
                        _b.label = 2;
                    case 2:
                        requestAnimationFrame(function () {
                            _this.draw(forceRedraw);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.handleInput = function (input) {
        if (!input) {
            return;
        }
        if (input.type === canvas_access_1.UserInputType.Start) {
            if (this.buttons.length <= 0) {
                return;
            }
            console.log(input);
            var distances = this.buttons.map(function (b) { return ({
                b: b,
                distSq: (b.u - input.u) * (b.u - input.u) + (b.v - input.v) * (b.v - input.v)
            }); });
            var nearest = distances.reduce(function (out, b) { return out.distSq < b.distSq ? out : b; });
            this.targetButton = nearest.b;
            console.log(this.targetButton);
        }
        if (input.type === canvas_access_1.UserInputType.End) {
            this.targetButton && this.targetButton.callback();
            this.targetButton = null;
        }
    };
    Game.prototype.selectImage = function (column, row) {
        var _this = this;
        var i = column * 3 + row;
        console.log(i, this.wordImages[i], this.wordImageUrls[i]);
        // TODO: Record Image Selection
        this.word = null;
        this.wordImages = null;
        this.wordImageUrls = null;
        requestAnimationFrame(function () {
            _this.draw(false);
        });
    };
    Game.prototype.draw = function (forceRedraw) {
        var cvx = this.canvasAccess.canvas;
        var ctx = this.canvasAccess.context;
        var w = this.canvasAccess.width;
        var h = this.canvasAccess.height;
        //        if (forceRedraw) {
        ctx.clearRect(0, 0, w, h);
        //      }
        if (this.word) {
            var rect = ctx.measureText(this.word);
            ctx.fillStyle = '#FFFF00';
            ctx.font = '24px sans-serif';
            ctx.fillText(this.word, w * 0.5 - rect.width * 0.5, h * 0.1);
        }
        if (this.wordImages) {
            for (var i = 0; i < this.wordImages.length; i++) {
                var wordImage = this.wordImages[i];
                if (!wordImage.width) {
                    continue;
                }
                this.drawImage(wordImage, Math.floor(i / 3), i % 3);
            }
        }
    };
    Game.prototype.getButtonUV = function (column, row) {
        var u = 0.05 + column * 0.3;
        var v = 0.15 + row * 0.25;
        var uw = 0.3 - 0.025;
        var vh = 0.25 - 0.025;
        return { u: u, v: v, uw: uw, vh: vh };
    };
    Game.prototype.drawImage = function (image, column, row) {
        var _a = this.getButtonUV(column, row), u = _a.u, v = _a.v, uw = _a.uw, vh = _a.vh;
        var w = this.canvasAccess.width;
        var h = this.canvasAccess.height;
        var ctx = this.canvasAccess.context;
        // Maintain Image Aspect Ratio
        var ws = w * uw;
        var hs = h * vh;
        var xs = w * u;
        var ys = h * v;
        var wi = image.width;
        var hi = image.height;
        var wScale = ws / wi;
        var hScale = hs / hi;
        var scale = Math.min(wScale, hScale);
        var wsNew = wi * scale;
        var hsNew = hi * scale;
        xs += (ws - wsNew) * 0.5;
        ys += (hs - hsNew) * 0.5;
        ws = wsNew;
        hs = hsNew;
        ctx.drawImage(image, 0, 0, wi, hi, xs, ys, ws, hs);
        ctx.strokeStyle = '#CCCCCC';
        ctx.strokeRect(w * u, h * v, w * uw, h * vh);
        // console.log(column, row, u, v);
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map