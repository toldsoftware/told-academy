/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var canvas_game_1 = __webpack_require__(1);
	var game_1 = __webpack_require__(3);
	function setup() {
	    var host = document.getElementById('host');
	    canvas_game_1.hostGame(host, function (access) { return new game_1.Game(access); });
	}
	setup();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var canvas_access_1 = __webpack_require__(2);
	function hostGame(host, gameFactory) {
	    var access = new canvas_access_1.CanvasAccess(host, function (input) {
	        game && game.update(false, input).then();
	    }, function () {
	        game && game.update(true).then();
	    });
	    var game = gameFactory(access);
	    game.update(true).then();
	}
	exports.hostGame = hostGame;


/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tslib_1 = __webpack_require__(4);
	var canvas_access_1 = __webpack_require__(2);
	var get_pictures_open_clip_art_1 = __webpack_require__(5);
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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0
	
	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.
	
	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global global, define, System, Reflect, Promise */
	var __extends;
	var __assign;
	var __rest;
	var __decorate;
	var __param;
	var __metadata;
	var __awaiter;
	var __generator;
	(function (factory) {
	    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) { factory(createExporter(root, createExporter(exports))); }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    else if (typeof module === "object" && typeof module.exports === "object") {
	        factory(createExporter(root, createExporter(module.exports)));
	    }
	    else {
	        factory(createExporter(root));
	    }
	    function createExporter(exports, previous) {
	        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
	    }
	})
	(function (exporter) {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	
	    __extends = function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	
	    __assign = Object.assign || function (t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	
	    __rest = function (s, e) {
	        var t = {};
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	            t[p] = s[p];
	        if (s != null && typeof Object.getOwnPropertySymbols === "function")
	            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
	                t[p[i]] = s[p[i]];
	        return t;
	    };
	
	    __decorate = function (decorators, target, key, desc) {
	        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	        return c > 3 && r && Object.defineProperty(target, key, r), r;
	    };
	
	    __param = function (paramIndex, decorator) {
	        return function (target, key) { decorator(target, key, paramIndex); }
	    };
	
	    __metadata = function (metadataKey, metadataValue) {
	        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	    };
	
	    __awaiter = function (thisArg, _arguments, P, generator) {
	        return new (P || (P = Promise))(function (resolve, reject) {
	            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	            step((generator = generator.apply(thisArg, _arguments || [])).next());
	        });
	    };
	
	    __generator = function (thisArg, body) {
	        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
	        return { next: verb(0), "throw": verb(1), "return": verb(2) };
	        function verb(n) { return function (v) { return step([n, v]); }; }
	        function step(op) {
	            if (f) throw new TypeError("Generator is already executing.");
	            while (_) try {
	                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	                if (y = 0, t) op = [0, t.value];
	                switch (op[0]) {
	                    case 0: case 1: t = op; break;
	                    case 4: _.label++; return { value: op[1], done: false };
	                    case 5: _.label++; y = op[1]; op = [0]; continue;
	                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                    default:
	                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                        if (t[2]) _.ops.pop();
	                        _.trys.pop(); continue;
	                }
	                op = body.call(thisArg, _);
	            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	        }
	    };
	
	    exporter("__extends", __extends);
	    exporter("__assign", __assign);
	    exporter("__rest", __rest);
	    exporter("__decorate", __decorate);
	    exporter("__param", __param);
	    exporter("__metadata", __metadata);
	    exporter("__awaiter", __awaiter);
	    exporter("__generator", __generator);
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tslib_1 = __webpack_require__(4);
	var lib_1 = __webpack_require__(6);
	lib_1.setupBrowser();
	var http = lib_1.Platform.http();
	var urlTemplate = 'https://openclipart.org/search/json/?query={WORD}&sort=downloads';
	function getPictures(word) {
	    return tslib_1.__awaiter(this, void 0, void 0, function () {
	        var response, imageUrls;
	        return tslib_1.__generator(this, function (_a) {
	            switch (_a.label) {
	                case 0: return [4 /*yield*/, http.request(urlTemplate.replace('{WORD}', word))];
	                case 1:
	                    response = _a.sent();
	                    imageUrls = response.data.payload.map(function (x) { return x.svg.png_thumb; });
	                    return [2 /*return*/, imageUrls];
	            }
	        });
	    });
	}
	exports.getPictures = getPictures;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(7));
	//# sourceMappingURL=index.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(8));
	__export(__webpack_require__(9));
	//# sourceMappingURL=index.js.map

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	var Platform = (function () {
	    function Platform() {
	    }
	    Platform.http = function () { return Platform.provider.http(); };
	    return Platform;
	}());
	Platform.urlResolver = function (url) { return url; };
	exports.Platform = Platform;
	//# sourceMappingURL=platform.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
	    return { next: verb(0), "throw": verb(1), "return": verb(2) };
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [0, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	var P = __webpack_require__(8);
	var browser_ajax_1 = __webpack_require__(10);
	function setupBrowser() {
	    P.Platform.provider = new BrowserPlatformProvider();
	    Promise = __webpack_require__(11).Promise;
	}
	exports.setupBrowser = setupBrowser;
	var BrowserPlatformProvider = (function () {
	    function BrowserPlatformProvider() {
	    }
	    BrowserPlatformProvider.prototype.http = function () {
	        return new BrowserHttpClient();
	    };
	    return BrowserPlatformProvider;
	}());
	var BrowserHttpClient = (function () {
	    function BrowserHttpClient() {
	    }
	    BrowserHttpClient.prototype.request = function (url, method, data, headers, withCredentials) {
	        if (withCredentials === void 0) { withCredentials = false; }
	        return __awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            return __generator(this, function (_a) {
	                return [2 /*return*/, new Promise(function (resolve, reject) {
	                        method = method || 'GET';
	                        if (typeof data === 'object' && data.constructor === Object) {
	                            data = JSON.stringify(data);
	                        }
	                        new browser_ajax_1.Ajax().ajax({
	                            url: _this.resolveUrl(url),
	                            type: method,
	                            data: data,
	                            withCredentials: withCredentials,
	                            beforeSend: function (xhr) {
	                                if (headers != null) {
	                                    for (var k in headers) {
	                                        var v = headers[k];
	                                        xhr.setRequestHeader(k, v);
	                                    }
	                                }
	                            },
	                            success: function (data, textStatus, response) {
	                                var headersList = response.getAllResponseHeaders().split('\n').map(function (x) { return x.trim().split('='); });
	                                var headers = {};
	                                headersList.forEach(function (x) { return headers[x[0]] = x[1]; });
	                                var dataObj = null;
	                                try {
	                                    dataObj = JSON.parse(data);
	                                }
	                                catch (err) {
	                                }
	                                resolve({ dataRaw: data, data: dataObj, headers: headers });
	                            },
	                            error: function (err) { return reject(err); }
	                        });
	                    })];
	            });
	        });
	    };
	    BrowserHttpClient.prototype.resolveUrl = function (url) { return P.Platform.urlResolver(url); };
	    return BrowserHttpClient;
	}());
	//# sourceMappingURL=browser.js.map

/***/ },
/* 10 */
/***/ function(module, exports) {

	// Vanilla Ajax Requests
	// From: http://stackoverflow.com/a/18078705/567524
	"use strict";
	var Ajax = (function () {
	    function Ajax() {
	    }
	    Ajax.prototype.createXhr = function () {
	        if (typeof XMLHttpRequest !== "undefined") {
	            return new XMLHttpRequest();
	        }
	        var versions = [
	            "MSXML2.XmlHttp.6.0",
	            "MSXML2.XmlHttp.5.0",
	            "MSXML2.XmlHttp.4.0",
	            "MSXML2.XmlHttp.3.0",
	            "MSXML2.XmlHttp.2.0",
	            "Microsoft.XmlHttp"
	        ];
	        for (var i = 0; i < versions.length; i++) {
	            try {
	                return new ActiveXObject(versions[i]);
	            }
	            catch (e) {
	            }
	        }
	    };
	    // private send(url, callback, method, data, async = true) {
	    //     var xhr = this.xhr;
	    //     xhr.open(method, url, async);
	    //     xhr.onreadystatechange = function () {
	    //         if (xhr.readyState == 4) {
	    //             callback(xhr.responseText);
	    //         }
	    //     };
	    //     if (method == 'POST') {
	    //         xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	    //     }
	    //     xhr.send(data);
	    // };
	    Ajax.prototype.get = function (url, onSuccess, onFail) {
	        // var query = [];
	        // for (var key in data) {
	        //     query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
	        // }
	        // this.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null);
	        this.ajax({
	            url: url,
	            type: "GET",
	            success: onSuccess,
	            error: function (xhr, errorStatus, information) { return onFail(errorStatus + ':' + information); }
	        });
	    };
	    ;
	    Ajax.prototype.post = function (url, data, onSuccess, onFail) {
	        var query = [];
	        for (var key in data) {
	            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
	        }
	        var dataString = query.join('&');
	        // this.send(url, callback, 'POST', query.join('&'));
	        this.ajax({
	            url: url,
	            data: dataString,
	            type: 'POST',
	            contentType: 'application/x-www-form-urlencoded',
	            success: onSuccess,
	            error: function (xhr, errorStatus, information) { return onFail(errorStatus + ':' + information); }
	        });
	    };
	    ;
	    Ajax.prototype.jsonp = function (url, data, onSuccess, onFail) {
	        var query = [];
	        for (var key in data) {
	            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
	        }
	        var dataString = query.join('&');
	        // this.send(url, callback, 'POST', query.join('&'));
	        var src = url
	            + (url.indexOf('?') > 0 ? '&' : '?')
	            + dataString;
	        var script = document.createElement('script');
	        script.src = src;
	        script.onload = function () { return onSuccess(); };
	        script.onerror = function () { return onFail(); };
	        document.head.appendChild(script);
	    };
	    ;
	    Ajax.prototype.ajax = function (settings) {
	        // settings.beforeSend
	        // settings.complete
	        // settings.contentType
	        // settings.data
	        // settings.dataType - No Processing Done Null or Text only
	        // settings.error
	        // settings.processData - Always false
	        // settings.success
	        // settings.type
	        // settings.url
	        if (settings.dataType != null && settings.dataType !== 'text') {
	            throw 'Ajax Library does not process data - set to null or text';
	        }
	        settings.success = settings.success || (function () { });
	        settings.error = settings.error || (function () { });
	        settings.complete = settings.complete || (function () { });
	        settings.beforeSend = settings.beforeSend || (function () { });
	        var xhr = this.createXhr();
	        var hasCompleted = false;
	        setTimeout(function () {
	            if (!hasCompleted) {
	                settings.error(xhr, 'Timed Out', '');
	            }
	        }, 30 * 1000);
	        var url = settings.url;
	        var method = settings.type || 'GET';
	        xhr.open(method, url, true);
	        xhr.withCredentials = settings.withCredentials || false;
	        xhr.onerror = function (ev) {
	            settings.error(xhr, '' + xhr.status, '' + ev);
	        };
	        xhr.onreadystatechange = function () {
	            // console.log("xhr.onreadystatechange",
	            //     "settings.url", settings.url,
	            //     "xhr.readyState", xhr.readyState,
	            //     "xhr.status", xhr.status,
	            //     "xhr.responseText", xhr.responseText.substr(0, 20),
	            // );
	            if (xhr.readyState === 4) {
	                hasCompleted = true;
	                if (xhr.status >= 200 && xhr.status < 300) {
	                    try {
	                        settings.success(xhr.responseText, '' + xhr.status, xhr);
	                    }
	                    catch (err) {
	                        console.log('ERROR in success handler', err);
	                    }
	                }
	                else {
	                    try {
	                        settings.error(xhr, '' + xhr.status, '');
	                    }
	                    catch (err) {
	                        console.log('ERROR in error handler', err);
	                    }
	                }
	                try {
	                    settings.complete();
	                }
	                catch (err) {
	                    console.log('ERROR in complete handler', err);
	                }
	            }
	        };
	        // if (method == 'POST') {
	        //     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	        // }
	        if (settings.contentType != null) {
	            xhr.setRequestHeader('Content-type', settings.contentType);
	        }
	        settings.beforeSend(xhr);
	        xhr.send(settings.data);
	    };
	    return Ajax;
	}());
	exports.Ajax = Ajax;
	//# sourceMappingURL=browser-ajax.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.0.5
	 */
	
	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.ES6Promise = factory());
	}(this, (function () { 'use strict';
	
	function objectOrFunction(x) {
	  return typeof x === 'function' || typeof x === 'object' && x !== null;
	}
	
	function isFunction(x) {
	  return typeof x === 'function';
	}
	
	var _isArray = undefined;
	if (!Array.isArray) {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	} else {
	  _isArray = Array.isArray;
	}
	
	var isArray = _isArray;
	
	var len = 0;
	var vertxNext = undefined;
	var customSchedulerFn = undefined;
	
	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};
	
	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}
	
	function setAsap(asapFn) {
	  asap = asapFn;
	}
	
	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';
	
	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
	
	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}
	
	// vertx
	function useVertxTimer() {
	  if (typeof vertxNext !== 'undefined') {
	    return function () {
	      vertxNext(flush);
	    };
	  }
	
	  return useSetTimeout();
	}
	
	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });
	
	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}
	
	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}
	
	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}
	
	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];
	
	    callback(arg);
	
	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }
	
	  len = 0;
	}
	
	function attemptVertx() {
	  try {
	    var r = require;
	    var vertx = __webpack_require__(13);
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}
	
	var scheduleFlush = undefined;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}
	
	function then(onFulfillment, onRejection) {
	  var _arguments = arguments;
	
	  var parent = this;
	
	  var child = new this.constructor(noop);
	
	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }
	
	  var _state = parent._state;
	
	  if (_state) {
	    (function () {
	      var callback = _arguments[_state - 1];
	      asap(function () {
	        return invokeCallback(_state, child, callback, parent._result);
	      });
	    })();
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }
	
	  return child;
	}
	
	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.resolve(1);
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve(object) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }
	
	  var promise = new Constructor(noop);
	  _resolve(promise, object);
	  return promise;
	}
	
	var PROMISE_ID = Math.random().toString(36).substring(16);
	
	function noop() {}
	
	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	
	var GET_THEN_ERROR = new ErrorObject();
	
	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}
	
	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}
	
	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    GET_THEN_ERROR.error = error;
	    return GET_THEN_ERROR;
	  }
	}
	
	function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}
	
	function handleForeignThenable(promise, thenable, then) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        _resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	
	      _reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	    if (!sealed && error) {
	      sealed = true;
	      _reject(promise, error);
	    }
	  }, promise);
	}
	
	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    _reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return _resolve(promise, value);
	    }, function (reason) {
	      return _reject(promise, reason);
	    });
	  }
	}
	
	function handleMaybeThenable(promise, maybeThenable, then$$) {
	  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$ === GET_THEN_ERROR) {
	      _reject(promise, GET_THEN_ERROR.error);
	    } else if (then$$ === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$)) {
	      handleForeignThenable(promise, maybeThenable, then$$);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}
	
	function _resolve(promise, value) {
	  if (promise === value) {
	    _reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}
	
	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }
	
	  publish(promise);
	}
	
	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	
	  promise._result = value;
	  promise._state = FULFILLED;
	
	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}
	
	function _reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;
	
	  asap(publishRejection, promise);
	}
	
	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;
	
	  parent._onerror = null;
	
	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;
	
	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}
	
	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;
	
	  if (subscribers.length === 0) {
	    return;
	  }
	
	  var child = undefined,
	      callback = undefined,
	      detail = promise._result;
	
	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];
	
	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }
	
	  promise._subscribers.length = 0;
	}
	
	function ErrorObject() {
	  this.error = null;
	}
	
	var TRY_CATCH_ERROR = new ErrorObject();
	
	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}
	
	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = undefined,
	      error = undefined,
	      succeeded = undefined,
	      failed = undefined;
	
	  if (hasCallback) {
	    value = tryCatch(callback, detail);
	
	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value = null;
	    } else {
	      succeeded = true;
	    }
	
	    if (promise === value) {
	      _reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }
	
	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	      _resolve(promise, value);
	    } else if (failed) {
	      _reject(promise, error);
	    } else if (settled === FULFILLED) {
	      fulfill(promise, value);
	    } else if (settled === REJECTED) {
	      _reject(promise, value);
	    }
	}
	
	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      _resolve(promise, value);
	    }, function rejectPromise(reason) {
	      _reject(promise, reason);
	    });
	  } catch (e) {
	    _reject(promise, e);
	  }
	}
	
	var id = 0;
	function nextId() {
	  return id++;
	}
	
	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}
	
	function Enumerator(Constructor, input) {
	  this._instanceConstructor = Constructor;
	  this.promise = new Constructor(noop);
	
	  if (!this.promise[PROMISE_ID]) {
	    makePromise(this.promise);
	  }
	
	  if (isArray(input)) {
	    this._input = input;
	    this.length = input.length;
	    this._remaining = input.length;
	
	    this._result = new Array(this.length);
	
	    if (this.length === 0) {
	      fulfill(this.promise, this._result);
	    } else {
	      this.length = this.length || 0;
	      this._enumerate();
	      if (this._remaining === 0) {
	        fulfill(this.promise, this._result);
	      }
	    }
	  } else {
	    _reject(this.promise, validationError());
	  }
	}
	
	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	};
	
	Enumerator.prototype._enumerate = function () {
	  var length = this.length;
	  var _input = this._input;
	
	  for (var i = 0; this._state === PENDING && i < length; i++) {
	    this._eachEntry(_input[i], i);
	  }
	};
	
	Enumerator.prototype._eachEntry = function (entry, i) {
	  var c = this._instanceConstructor;
	  var resolve$$ = c.resolve;
	
	  if (resolve$$ === resolve) {
	    var _then = getThen(entry);
	
	    if (_then === then && entry._state !== PENDING) {
	      this._settledAt(entry._state, i, entry._result);
	    } else if (typeof _then !== 'function') {
	      this._remaining--;
	      this._result[i] = entry;
	    } else if (c === Promise) {
	      var promise = new c(noop);
	      handleMaybeThenable(promise, entry, _then);
	      this._willSettleAt(promise, i);
	    } else {
	      this._willSettleAt(new c(function (resolve$$) {
	        return resolve$$(entry);
	      }), i);
	    }
	  } else {
	    this._willSettleAt(resolve$$(entry), i);
	  }
	};
	
	Enumerator.prototype._settledAt = function (state, i, value) {
	  var promise = this.promise;
	
	  if (promise._state === PENDING) {
	    this._remaining--;
	
	    if (state === REJECTED) {
	      _reject(promise, value);
	    } else {
	      this._result[i] = value;
	    }
	  }
	
	  if (this._remaining === 0) {
	    fulfill(promise, this._result);
	  }
	};
	
	Enumerator.prototype._willSettleAt = function (promise, i) {
	  var enumerator = this;
	
	  subscribe(promise, undefined, function (value) {
	    return enumerator._settledAt(FULFILLED, i, value);
	  }, function (reason) {
	    return enumerator._settledAt(REJECTED, i, reason);
	  });
	};
	
	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```
	
	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```
	
	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}
	
	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.
	
	  Example:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```
	
	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```
	
	  An example real-world use case is implementing timeouts:
	
	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```
	
	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}
	
	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  _reject(promise, reason);
	  return promise;
	}
	
	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}
	
	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}
	
	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.
	
	  Terminology
	  -----------
	
	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.
	
	  A promise can be in one of three states: pending, fulfilled, or rejected.
	
	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.
	
	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.
	
	
	  Basic Usage:
	  ------------
	
	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);
	
	    // on failure
	    reject(reason);
	  });
	
	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Advanced Usage:
	  ---------------
	
	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.
	
	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();
	
	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();
	
	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }
	
	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Unlike callbacks, promises are great composable primitives.
	
	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON
	
	    return values;
	  });
	  ```
	
	  @class Promise
	  @param {function} resolver
	  Useful for tooling.
	  @constructor
	*/
	function Promise(resolver) {
	  this[PROMISE_ID] = nextId();
	  this._result = this._state = undefined;
	  this._subscribers = [];
	
	  if (noop !== resolver) {
	    typeof resolver !== 'function' && needsResolver();
	    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	  }
	}
	
	Promise.all = all;
	Promise.race = race;
	Promise.resolve = resolve;
	Promise.reject = reject;
	Promise._setScheduler = setScheduler;
	Promise._setAsap = setAsap;
	Promise._asap = asap;
	
	Promise.prototype = {
	  constructor: Promise,
	
	  /**
	    The primary way of interacting with a promise is through its `then` method,
	    which registers callbacks to receive either a promise's eventual value or the
	    reason why the promise cannot be fulfilled.
	  
	    ```js
	    findUser().then(function(user){
	      // user is available
	    }, function(reason){
	      // user is unavailable, and you are given the reason why
	    });
	    ```
	  
	    Chaining
	    --------
	  
	    The return value of `then` is itself a promise.  This second, 'downstream'
	    promise is resolved with the return value of the first promise's fulfillment
	    or rejection handler, or rejected if the handler throws an exception.
	  
	    ```js
	    findUser().then(function (user) {
	      return user.name;
	    }, function (reason) {
	      return 'default name';
	    }).then(function (userName) {
	      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	      // will be `'default name'`
	    });
	  
	    findUser().then(function (user) {
	      throw new Error('Found user, but still unhappy');
	    }, function (reason) {
	      throw new Error('`findUser` rejected and we're unhappy');
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	    });
	    ```
	    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	  
	    ```js
	    findUser().then(function (user) {
	      throw new PedagogicalException('Upstream error');
	    }).then(function (value) {
	      // never reached
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // The `PedgagocialException` is propagated all the way down to here
	    });
	    ```
	  
	    Assimilation
	    ------------
	  
	    Sometimes the value you want to propagate to a downstream promise can only be
	    retrieved asynchronously. This can be achieved by returning a promise in the
	    fulfillment or rejection handler. The downstream promise will then be pending
	    until the returned promise is settled. This is called *assimilation*.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // The user's comments are now available
	    });
	    ```
	  
	    If the assimliated promise rejects, then the downstream promise will also reject.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // If `findCommentsByAuthor` fulfills, we'll have the value here
	    }, function (reason) {
	      // If `findCommentsByAuthor` rejects, we'll have the reason here
	    });
	    ```
	  
	    Simple Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let result;
	  
	    try {
	      result = findResult();
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	    findResult(function(result, err){
	      if (err) {
	        // failure
	      } else {
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findResult().then(function(result){
	      // success
	    }, function(reason){
	      // failure
	    });
	    ```
	  
	    Advanced Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let author, books;
	  
	    try {
	      author = findAuthor();
	      books  = findBooksByAuthor(author);
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	  
	    function foundBooks(books) {
	  
	    }
	  
	    function failure(reason) {
	  
	    }
	  
	    findAuthor(function(author, err){
	      if (err) {
	        failure(err);
	        // failure
	      } else {
	        try {
	          findBoooksByAuthor(author, function(books, err) {
	            if (err) {
	              failure(err);
	            } else {
	              try {
	                foundBooks(books);
	              } catch(reason) {
	                failure(reason);
	              }
	            }
	          });
	        } catch(error) {
	          failure(err);
	        }
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findAuthor().
	      then(findBooksByAuthor).
	      then(function(books){
	        // found books
	    }).catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method then
	    @param {Function} onFulfilled
	    @param {Function} onRejected
	    Useful for tooling.
	    @return {Promise}
	  */
	  then: then,
	
	  /**
	    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	    as the catch block of a try/catch statement.
	  
	    ```js
	    function findAuthor(){
	      throw new Error('couldn't find that author');
	    }
	  
	    // synchronous
	    try {
	      findAuthor();
	    } catch(reason) {
	      // something went wrong
	    }
	  
	    // async with promises
	    findAuthor().catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method catch
	    @param {Function} onRejection
	    Useful for tooling.
	    @return {Promise}
	  */
	  'catch': function _catch(onRejection) {
	    return this.then(null, onRejection);
	  }
	};
	
	function polyfill() {
	    var local = undefined;
	
	    if (typeof global !== 'undefined') {
	        local = global;
	    } else if (typeof self !== 'undefined') {
	        local = self;
	    } else {
	        try {
	            local = Function('return this')();
	        } catch (e) {
	            throw new Error('polyfill failed because global object is unavailable in this environment');
	        }
	    }
	
	    var P = local.Promise;
	
	    if (P) {
	        var promiseToString = null;
	        try {
	            promiseToString = Object.prototype.toString.call(P.resolve());
	        } catch (e) {
	            // silently ignored
	        }
	
	        if (promiseToString === '[object Promise]' && !P.cast) {
	            return;
	        }
	    }
	
	    local.Promise = Promise;
	}
	
	// Strange compat..
	Promise.polyfill = polyfill;
	Promise.Promise = Promise;
	
	return Promise;
	
	})));
	//# sourceMappingURL=es6-promise.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12), (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 13 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ }
/******/ ]);
//# sourceMappingURL=word-to-picture.js.map