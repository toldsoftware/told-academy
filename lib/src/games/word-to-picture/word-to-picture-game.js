"use strict";
var tslib_1 = require("tslib");
var canvas_access_1 = require("../../canvas-access");
var get_pictures_1 = require("./get-pictures");
var randomize_1 = require("../../randomize");
var WordToPictureGame = (function () {
    function WordToPictureGame(canvasAccess, words) {
        var _this = this;
        this.canvasAccess = canvasAccess;
        this.words = words;
        this.attempt = 0;
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
        // Reload Button
        this.buttons.push({
            u: 0.5,
            v: 0,
            callback: function () {
                _this.attempt++;
                _this.loadWord();
            }
        });
    }
    WordToPictureGame.prototype.update = function (forceRedraw, input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
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
                        if (!!this.word) return [3 /*break*/, 2];
                        this.word = this.words.getNextWord();
                        this.attempt = 0;
                        return [4 /*yield*/, this.loadWord()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        requestAnimationFrame(function () {
                            _this.draw(forceRedraw);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    WordToPictureGame.prototype.loadWord = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var wordImageUrls, _loop_3, this_2, _i, _a, choice, _b, _c, c, image;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        // Draw blank
                        this.choices = null;
                        requestAnimationFrame(function () {
                            _this.draw(false);
                        });
                        wordImageUrls = [];
                        if (!(this.attempt <= 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, get_pictures_1.getPictures(this.word, 3, this.attempt)];
                    case 1:
                        wordImageUrls = _d.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(this.attempt <= 4)) return [3 /*break*/, 4];
                        return [4 /*yield*/, get_pictures_1.getPictures(this.word, 9, this.attempt - 1)];
                    case 3:
                        wordImageUrls = _d.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        // Fail
                        this.word = null;
                        setTimeout(function () {
                            _this.update(false);
                        });
                        return [2 /*return*/];
                    case 5:
                        this.choices = wordImageUrls.map(function (x) { return ({
                            word: _this.word,
                            imageUrl: x,
                            image: null
                        }); });
                        if (this.choices.length <= 0) {
                            this.word = null;
                            setTimeout(function () {
                                _this.update(false);
                            });
                            return [2 /*return*/];
                        }
                        if (!(this.attempt < 1)) return [3 /*break*/, 9];
                        _loop_3 = function (choice) {
                            var wrongWordImageUrls, _a;
                            return tslib_1.__generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, get_pictures_1.getPictures(choice, 3)];
                                    case 1:
                                        wrongWordImageUrls = _b.sent();
                                        (_a = this_2.choices).push.apply(_a, wrongWordImageUrls.map(function (x) { return ({
                                            word: choice,
                                            imageUrl: x,
                                            image: null
                                        }); }));
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_2 = this;
                        _i = 0, _a = this.words.getChoices(this.word, 2);
                        _d.label = 6;
                    case 6:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        choice = _a[_i];
                        return [5 /*yield**/, _loop_3(choice)];
                    case 7:
                        _d.sent();
                        _d.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 6];
                    case 9:
                        // Randomize
                        this.choices = randomize_1.randomize(this.choices);
                        for (_b = 0, _c = this.choices; _b < _c.length; _b++) {
                            c = _c[_b];
                            image = c.image = new Image();
                            image.src = c.imageUrl;
                            image.onload = function () {
                                requestAnimationFrame(function () {
                                    _this.draw(false);
                                });
                            };
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WordToPictureGame.prototype.handleInput = function (input) {
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
    WordToPictureGame.prototype.selectImage = function (column, row) {
        var _this = this;
        var i = column * 3 + row;
        console.log(i, this.choices[i]);
        var choice = this.choices[i];
        if (choice.isDisabled) {
            return;
        }
        var isRight = this.words.answer(this.word, choice.word);
        // TODO: Record Image Selection
        if (!isRight) {
            choice.isDisabled = true;
            // TODO: Only redraw mistake
            requestAnimationFrame(function () {
                _this.draw(true);
            });
            return;
        }
        this.word = null;
        setTimeout(function () {
            _this.update(false);
        });
    };
    WordToPictureGame.prototype.draw = function (forceRedraw) {
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
        if (this.choices) {
            for (var i = 0; i < this.choices.length; i++) {
                var choice = this.choices[i];
                var wordImage = choice.image;
                if (!wordImage.width) {
                    continue;
                }
                this.drawImage(wordImage, Math.floor(i / 3), i % 3, choice.isDisabled ? '#FF0000' : '#00FF00');
            }
        }
    };
    WordToPictureGame.prototype.getButtonUV = function (column, row) {
        var u = 0.05 + column * 0.3;
        var v = 0.15 + row * 0.25;
        var uw = 0.3 - 0.025;
        var vh = 0.25 - 0.025;
        return { u: u, v: v, uw: uw, vh: vh };
    };
    WordToPictureGame.prototype.drawImage = function (image, column, row, outlineColor) {
        if (outlineColor === void 0) { outlineColor = '#00FF00'; }
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
        ctx.strokeStyle = outlineColor;
        ctx.strokeRect(w * u, h * v, w * uw, h * vh);
        // console.log(column, row, u, v);
    };
    return WordToPictureGame;
}());
exports.WordToPictureGame = WordToPictureGame;
//# sourceMappingURL=word-to-picture-game.js.map