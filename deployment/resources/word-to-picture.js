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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/*! *****************************************************************************
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
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function __generator(thisArg, body) {
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(18));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function randomize(items) {
    return items.map(function (x) { return ({ x: x, rand: Math.random() }); }).sort(function (a, b) { return a.rand - b.rand; }).map(function (x) { return x.x; });
}
exports.randomize = randomize;
function distinct(items) {
    return items.filter(function (x, i) { return items.indexOf(x) === i; });
}
exports.distinct = distinct;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Platform = (function () {
    function Platform() {
    }
    Platform.http = function () { return Platform.provider.http(); };
    return Platform;
}());
Platform.urlResolver = function (url) { return url; };
exports.Platform = Platform;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var lib_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(3);
var canvas_game_1 = __webpack_require__(7);
var unixode_loader_1 = __webpack_require__(12);
var word_to_picture_game_1 = __webpack_require__(11);
var word_list_knowledge_tree_1 = __webpack_require__(13);
lib_1.setupBrowser();
var http = lib_1.Platform.http();
function setup() {
    var _this = this;
    (function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var host, doc, list, wordProvider;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    host = document.getElementById('host');
                    return [4 /*yield*/, http.request('./subjects/Words_UniXode_Kids.txt')];
                case 1:
                    doc = (_a.sent()).dataRaw;
                    list = unixode_loader_1.loadUnixode(doc);
                    wordProvider = new SimpleWordProvider();
                    wordProvider.words = word_list_knowledge_tree_1.wordList.toLowerCase().split('\n').map(function (x) { return x.trim(); }).filter(function (x) { return x.length > 0; });
                    wordProvider.words = utils_1.distinct(wordProvider.words);
                    // wordProvider.words = list.words.map(x => x.english.toLowerCase());
                    // // TODO: Order Word List (Use Knowldge Tree?)
                    // wordProvider.words = randomize(wordProvider.words);
                    // // TEMP Order by length
                    // wordProvider.words.sort((a, b) => a.length - b.length);
                    // wordProvider.words = wordProvider.words.filter(x => x.length >= 3);
                    canvas_game_1.hostCanvasGame(host, function (access) { return new word_to_picture_game_1.WordToPictureGame(access, wordProvider); });
                    return [2 /*return*/];
            }
        });
    }); })().then();
}
var SimpleWordProvider = (function () {
    function SimpleWordProvider() {
        this.words = 'cat,dog,log,hot,hat,mat,nat'.split(',');
        this.iWord = -1;
    }
    SimpleWordProvider.prototype.getNextWord = function () {
        this.iWord++;
        if (this.iWord > this.words.length) {
            this.iWord = 0;
        }
        return this.words[this.iWord];
    };
    SimpleWordProvider.prototype.getChoices = function (word, count) {
        return utils_1.randomize(this.words.filter(function (x) { return x !== word; })).slice(0, 2);
    };
    SimpleWordProvider.prototype.answer = function (word, answer) {
        return word === answer;
    };
    return SimpleWordProvider;
}());
exports.SimpleWordProvider = SimpleWordProvider;
setup();


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _1 = __webpack_require__(1);
var resolve_url_1 = __webpack_require__(14);
_1.setupBrowser();
_1.Platform.urlResolver = resolve_url_1.resolveUrlClient;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var canvas_access_1 = __webpack_require__(2);
function hostCanvasGame(host, gameFactory) {
    var access = new canvas_access_1.CanvasAccess(host, function (input) {
        game && game.update(false, input).then();
    }, function () {
        game && game.update(true).then();
    });
    var game = gameFactory(access);
    game.update(true).then();
}
exports.hostCanvasGame = hostCanvasGame;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var lib_1 = __webpack_require__(1);
lib_1.setupBrowser();
var http = lib_1.Platform.http();
var urlTemplate = 'https://openclipart.org/search/json/?query={WORD}&sort=downloads&amount=100';
var urlTemplateAlt = 'https://openclipart.org/search/json/?query={WORD}';
function getPictures(word, count, skip, shouldUseAlt) {
    if (count === void 0) { count = 10; }
    if (skip === void 0) { skip = 0; }
    if (shouldUseAlt === void 0) { shouldUseAlt = false; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, response, items, imageUrls;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = urlTemplate;
                    if (shouldUseAlt) {
                        url = urlTemplateAlt;
                    }
                    return [4 /*yield*/, http.request(url.replace('{WORD}', word))];
                case 1:
                    response = _a.sent();
                    items = response.data.payload
                        .filter(function (x) { return x.title.toLowerCase().indexOf(word) >= 0; });
                    console.log('open-clip-art', word, items);
                    imageUrls = items
                        .map(function (x) { return x.svg.png_thumb; });
                    if (imageUrls.length > count) {
                        imageUrls = imageUrls.slice(skip, count);
                    }
                    return [2 /*return*/, imageUrls];
            }
        });
    });
}
exports.getPictures = getPictures;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var lib_1 = __webpack_require__(1);
lib_1.setupBrowser();
var http = lib_1.Platform.http();
var apiKey = '4473112-a196654cdbdfffe7ac8adcf39';
var urlTemplate = "https://pixabay.com/api/?key=" + apiKey + "&q={WORD}&image_type=all&safesearch=true";
var attribution = "\n<a href=\"https://pixabay.com/\">\n\u00A0\u00A0\u00A0\u00A0<img src=\"https://pixabay.com/static/img/public/medium_rectangle_a.png\" alt=\"Pixabay\">\n</a>\n";
function getPictures(word, count, skip) {
    if (count === void 0) { count = 10; }
    if (skip === void 0) { skip = 0; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, response, items, imageUrls;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = urlTemplate;
                    return [4 /*yield*/, http.request(url.replace('{WORD}', word))];
                case 1:
                    response = _a.sent();
                    items = response.data.hits;
                    items = items.filter(function (x) { return x.tags.indexOf(word) >= 0; });
                    items.sort(function (a, b) { return a.tags.indexOf(word) - b.tags.indexOf(word); });
                    console.log('pixabay', word, items);
                    imageUrls = items.map(function (x) { return x.webformatURL; });
                    if (imageUrls.length > count) {
                        imageUrls = imageUrls.slice(skip, count);
                    }
                    return [2 /*return*/, imageUrls];
            }
        });
    });
}
exports.getPictures = getPictures;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var OCA = __webpack_require__(8);
var PB = __webpack_require__(9);
function getPictures(word, count, attempt) {
    if (count === void 0) { count = 10; }
    if (attempt === void 0) { attempt = 0; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            // if (attempt === 0) {
            // Get Official Pictures
            // } else 
            if (attempt <= 0) {
                return [2 /*return*/, OCA.getPictures(word, count, count * (attempt - 0))];
            }
            else {
                return [2 /*return*/, PB.getPictures(word, count, count * (attempt - 1))];
            }
            return [2 /*return*/];
        });
    });
}
exports.getPictures = getPictures;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(0);
var canvas_access_1 = __webpack_require__(2);
var get_pictures_1 = __webpack_require__(10);
var utils_1 = __webpack_require__(3);
var WordToPictureGame = (function () {
    function WordToPictureGame(canvasAccess, words) {
        var _this = this;
        this.canvasAccess = canvasAccess;
        this.words = words;
        this.attempt = 0;
        this.isReadyButtonVisible = false;
        this.speedMode = false;
        this.countdownLimit = 15;
        this.countdownTimer = 0;
        this.buttons = [];
        var _loop_1 = function (column) {
            var _loop_2 = function (row) {
                var _a = this_1.getButtonUV(column, row), u = _a.u, v = _a.v, uw = _a.uw, vh = _a.vh;
                this_1.buttons.push({
                    u: u + uw * 0.5,
                    v: v + vh * 0.5,
                    callback: function () {
                        if (_this.isReadyButtonVisible) {
                            _this.loadWord();
                            return;
                        }
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
                if (_this.isReadyButtonVisible) {
                    _this.loadWord();
                    return;
                }
                _this.attempt++;
                _this.loadWord();
            }
        });
        // Speed Mode Button
        this.buttons.push({
            u: 0,
            v: 0,
            callback: function () {
                if (_this.speedMode === true) {
                    _this.speedMode = false;
                    clearInterval(_this.countdownIntervalId);
                    return;
                }
                _this.speedMode = (_this.speedMode - 1);
                if (_this.speedMode <= -3) {
                    _this.speedMode = true;
                    _this.countdownIntervalId = setInterval(function () {
                        _this.countdownTimer--;
                        if (_this.countdownTimer < 0) {
                            _this.word = '';
                            _this.update(true);
                            _this.countdownTimer = _this.countdownLimit;
                        }
                        _this.redraw(false);
                    }, 1000);
                }
                console.log('speedMode=', _this.speedMode);
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
    WordToPictureGame.prototype.update = function (forceRedraw, input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (input && input.type !== canvas_access_1.UserInputType.Move && this.speedMode === true) {
                            this.countdownTimer = this.countdownLimit;
                        }
                        this.handleInput(input);
                        // Get Next Word
                        if (this.word) {
                            if (forceRedraw) {
                                this.redraw(forceRedraw);
                            }
                            return [2 /*return*/];
                        }
                        if (!!this.word) return [3 /*break*/, 2];
                        this.word = this.words.getNextWord();
                        this.attempt = 0;
                        return [4 /*yield*/, this.startWord()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.redraw(forceRedraw);
                        return [2 /*return*/];
                }
            });
        });
    };
    WordToPictureGame.prototype.redraw = function (forceRedraw) {
        var _this = this;
        requestAnimationFrame(function () {
            _this.draw(forceRedraw);
        });
    };
    WordToPictureGame.prototype.startWord = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.speedMode === true)) return [3 /*break*/, 2];
                        this.countdownTimer = this.countdownLimit;
                        return [4 /*yield*/, this.loadWord()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        // Draw the word alone
                        this.choices = null;
                        this.isReadyButtonVisible = true;
                        requestAnimationFrame(function () {
                            _this.draw(false);
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
                        this.isReadyButtonVisible = false;
                        requestAnimationFrame(function () {
                            _this.draw(false);
                        });
                        wordImageUrls = [];
                        if (!(this.attempt <= 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, get_pictures_1.getPictures(this.word, 3, this.attempt - 0)];
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
                        this.choices = utils_1.randomize(this.choices);
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
            ctx.fillStyle = '#FFFF00';
            if (!this.isReadyButtonVisible) {
                ctx.font = '24px sans-serif';
                var rect = ctx.measureText(this.word);
                ctx.fillText(this.word, w * 0.5 - rect.width * 0.5, h * 0.1);
            }
            else {
                ctx.font = '48px sans-serif';
                var rect = ctx.measureText(this.word);
                ctx.fillText(this.word, w * 0.5 - rect.width * 0.5, h * 0.4);
            }
        }
        if (this.countdownTimer) {
            ctx.fillStyle = '#00FF00';
            ctx.font = '24px sans-serif';
            ctx.fillText(this.countdownTimer + '', w * 0.05, h * 0.05);
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


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function loadUnixode(document) {
    var parts = document.split('### WORDS:');
    var mappings = parts[0].split('\n').filter(function (x) { return x.trim().length > 0; }).map(function (x) {
        var partsA = x.split(':');
        var partsB = partsA[1].split('=');
        var unixode = partsA[0];
        var english = partsB[0];
        var xharish = partsB[1];
        return {
            unixode: unixode,
            english: english,
            xharish: xharish,
        };
    });
    var lookup = {};
    mappings.forEach(function (x2) { return lookup[x2.unixode] = x2; });
    var words = parts[1].split('\n').filter(function (x) { return x.trim().length > 0; }).map(function (x) {
        var lookups = x.split('').filter(function (x2) { return x2.trim().length > 0; }).map(function (x2) { return lookup[x2]; });
        return {
            unixode: x,
            pairs: x.split('').map(function (x2) { return ({
                english: lookup[x2] ? lookup[x2].english : '',
                xharish: lookup[x2] ? lookup[x2].xharish : ''
            }); }).filter(function (x2) { return x2.english !== '' || x2.xharish !== ''; }),
            english: lookups.map(function (x2) { return x2.english; }).join(''),
            xharish: lookups.map(function (x2) { return x2.xharish; }).join(''),
        };
    });
    return {
        mappings: mappings,
        words: words
    };
}
exports.loadUnixode = loadUnixode;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.wordList = "\nOR\nOR\nRAP\nRAN\nRIB\nARM\nRIM\nROB\nRAT\nROW\nFAR\nHER\nROT\nTROY\nRED\nFOR\nRID\nFOR\nRUB\nROD\nRIG\nRUN\nCAR\nHER\nTRY\nOUR\nRUT\nOUR\nBROIL\nBARB\nRUG\nBARN\nHARM\nROMP\nTRAP\nFARM\nWAR\nPART\nRENT\nTRIP\nBORN\nTRIM\nTROT\nHORN\nDRAB\nRAFT\nSPAR\nFRET\nFORM\nDRIP\nBROW\nBRAG\nGRAB\nPROW\nCRAB\nHARD\nDROP\nCRAM\nREST\nLARD\nGARB\nCRIB\nFROM\nSTAR\nBEAR\nPEAR\nDROP\nHERB\nFORT\nROVE\nGRIN\nROLE\nHAIR\nRAVE\nFIRM\nGROW\nCROW\nSORT\nRILL\nGRIT\nRAIN\nROAD\nCART\nRATE\nTERM\nFERN\nBARK\nFROG\nRAIL\nBURN\nCORN\nBRAY\nPARK\nTEAR\nPOOR\nPRAY\nMARK\nROOM\nBIRD\nREAL\nHURL\nDRUM\nLARK\nREEL\nTHROB\nTRAMP\nTEAR\nCARD\nFOUR\nROYAL\nREAD\nROOF\nFRAY\nFREE\nRACE\nDOOR\nTHROW\nHURT\nBROTH\nSTIR\nTURN\nTRAY\nRUST\nTREE\nPRINT\nROCK\nSPUR\nGIRL\nNORTH\nTHORN\nDEAR\nRODE\nBRAND\nROOF\nRULE\nREAD\nDEER\nFORK\nSOUR\nWARP\nDARK\nWARM\nFROTH\nFORTH\nRIDE\nGREW\nROBE\nEARN\nCRAMP\nCREW\nWARN\nBROWN\nSNARL\nROPE\nCURB\nSTART\nRAKE\nBIRTH\nDRAW\nPROWL\nRAZE\nSTRIP\nGRAY\nSMART\nTOUR\nCURL\nDRUG\nARMY\nBRAVE\nWART\nTRUE\nFROWN\nRIGHT\nCREPT\nTRUMP\nFROND\nFOR\nFIRTH\nSPORT\nRANK\nBRAIN\nBURY\nRIFE\nRUSH\nGRASP\nSNORT\nFRONT\nRICH\nAFAR\nBROOM\nWARD\nTRUTH\nRANG\nSCAR\nGRAFT\nRUSK\nCRAFT\nLURK\nFLOOR\nTHREE\nHERO\nURGE\nDROWN\nGRAND\nROAST\nBARGE\nRUDE\nVARY\nCURD\nFROST\nRING\nFRILL\nHEART\nTHROWN\nPRIME\nBRASS\nTHIRD\nWORM\nDREAD\nBRAWN\nTREAT\nBOARD\nFLIRT\nEVER\nRARE\nBREAD\nBRICK\nTRAIN\nBRACE\nPROOF\nDROVE\nBRINE\nTRUST\nPROVE\nTRAIL\nTROOP\nLARGE\nRANGE\nPRICE\nPARSE\nCROWN\nSHARP\nHERB\nSPEAR\nGROWL\nGRIND\nMARSH\nSMEAR\nFRAME\nDRIVE\nHARSH\nBEARD\nDROLL\nGROVE\nTHRIFT\nFLOUR\nBRISK\nRUBY\nSPARK\nSPURN\nFARCE\nRUSE\nSPRAY\nDRILL\nCARVE\nSNEER\nGRAVE\nFRESH\nDREAM\nCRAVE\nTRICK\nFIRST\nDROOP\nRACY\nTRACE\nBRIDE\nODOR\nPROBE\nFROCK\nDIRT\nREBEL\nREBEL\nREPEL\nGRILL\nROSY\nHORSE\nPEARL\nGRAIN\nBREATH\nBURST\nTHROAT\nLOITER\nTHROVE\nDRONE\nROUND\nCRATE\nBRIGHT\nFORCE\nGORY\nWORD\nCREAM\nLEARN\nGROOM\nSTARK\nCREEP\nPROSE\nPRIZE\nSTRAY\nCLEAR\nGROWS\nDRESS\nCROWD\nFREED\nTHEIR\nGREEN\nDRAWL\nTHRIVE\nRECOIL\nFROZE\nPRUNE\nTHRILL\nSTRAW\nGRASS\nCRIME\nSERVE\nMERGE\nGROUP\nCRANE\nTHREAT\nYARN\nALARM\nFRIGHT\nBRUSH\nSHRUB\nGRACE\nSCRAP\nOWNER\nCOURT\nSTORK\nGROSS\nRANCH\nCRAWL\nGREET\nTRIBE\nPARCH\nRIFLE\nCZAR\nPRANCE\nROUTE\nMARCH\nCHARM\nPARTY\nFURY\nAPART\nTHRONE\nENTER\nHEARD\nLARCH\nTRUCK\nBRING\nTHRASH\nQUEER\nTRIAL\nFRANK\nTHREAD\nTRUCE\nROUTE\nFRIED\nSHRIMP\nGRADE\nAWRY\nWORK\nTHIRST\nDRIFT\nFRIED\nTHRUST\nPORCH\nBROOK\nCREED\nWHORL\nWHORL\nWORTH\nSHEAR\nPURSE\nSCARF\nNEVER\nTERSE\nFRINGE\nMETER\nSKIRT\nMOTOR\nNURSE\nYARD\nELDER\nGRAPE\nSHARK\nSCORN\nPRONG\nCRAZE\nSTRIVE\nSTROLL\nDRANK\nROACH\nWARMTH\nRAYON\nERECT\nSTRAIN\nMARBLE\nSPREAD\nFRUIT\nTOWER\nVERSE\nMEMBER\nSTREET\nSPRAWL\nFORTY\nSTREAM\nPRISM\nDRINK\nBIRCH\nCHIRP\nRALLY\nBRONZE\nSHRUG\nSEVER\nRAISE\nOUR\nCRIED\nSTORY\nTREAD\nREPORT\nCHAIR\nBRIDGE\nTARTAR\nTRIPLE\nBRANCH\nLAWYER\nRELENT\nPRAYER\nGLORY\nMAYOR\nWHORL\nWORLD\nGUARD\nPANTRY\nFRIEND\nCRACK\nTEMPER\nCRUDE\nTRULY\nYOUR\nTHRUSH\nJURY\nTRUNK\nHOARSE\nPRIEST\nSCREW\nREACH\nGRAVY\nCHEER\nCHROME\nCHURN\nBRAMBLE\nSQUIRM\nCRUMB\nBRANDY\nROUGH\nSPIRIT\nSPIRIT\nMERIT\nRUMBLE\nGROUND\nSCRIPT\nREMOTE\nBUYER\nREGRET\nREGRET\nSTRIKE\nHERON\nREMARK\nSQUIRT\nGROOVE\nTHRONG\nCRITIC\nYOUR\nFREIGHT\nPASTRY\nANGRY\nFENDER\nCRANK\nZERO\nRIPEN\nTORQUE\nPURPLE\nVERY\nENTER\nSPRING\nFLOWER\nROBIN\nEMBERS\nOVER\nSHRINE\nTRIED\nBREEZE\nWEIRD\nWORSE\nSTREAK\nSTRANGE\nPOWDER\nPREFER\nRABID\nSHREWD\nBRIER\nCENTER\nTURTLE\nREIGN\nRUIN\nSTRING\nCHURCH\nROBIN\nCROOK\nGRIEVE\nRELY\nFREEZE\nCRADLE\nTARDY\nFROSTY\nPREACH\nRABBLE\nPREFER\nPREFER\nTAILOR\nFERMENT\nCLEVER\nFEVER\nSCREAM\nRABID\nHERO\nBETTER\nSTRONG\nCROSS\nRUIN\nAWARD\nPROPEL\nCHARGE\nPOLAR\nSULTRY\nLETTER\nMURMUR\nCONDOR\nRESPOND\nBREATHE\nEXPERT\nSHRANK\nTRADE\nRELY\nSPRUCE\nRUFFLE\nRELAX\nVIPER\nREGAL\nBARBER\nCOWARD\nREBUKE\nENTRY\nREJOICE\nREDDEN\nMERCER\nREPRESS\nACRID\nREFLECT\nREFLECT\nDESTROY\nROMEO\nFORKED\nSOBER\nSOUR\nRIDDLE\nPOULTRY\nSOURCE\nHEIFER\nPERFECT\nSOLAR\nGRUMBLE\nPROTEST\nCRUMBLE\nREJECT\nFARMER\nACTOR\nTURMOIL\nDROWSY\nARTIST\nRASCAL\nREFRESH\nMISER\nCIRCLE\nSCRAPE\nCRAGGY\nTENDER\nTIGER\nCORNET\nORDER\nTROUBLE\nREMIND\nSHRIEK\nTOWARD\nFRESHEN\nEVERY\nPROWESS\nSTRENGTH\nSAVOR\nPROFIT\nREPLY\nTRICKLE\nREBUT\nAMBER\nFORGET\nREVENGE\nSEARCH\nPARCEL\nPATROL\nCRISIS\nFRIDAY\nTREMOR\nREDRESS\nFABRIC\nARTIST\nSHRUNK\nCORPSE\nCRAZY\nRESOLVE\nTARIFF\nRODEO\nDEPRESS\nTARGET\nTRASH\nVAGRANT\nCIDER\nMETRIC\nLARDER\nREQUEST\nREQUEST\nFATHER\nCARPET\nCENTER\nCEDAR\nFRACAS\nSURVEY\nPROFIT\nREGRESS\nPOKER\nEXERT\nMORBID\nSTRENGTH\nMAJOR\nREPTILE\nRELATE\nCRASH\nIMPORT\nBELFRY\nRECEDE\nBOTHER\nPRETEND\nHAGGARD\nRAVEL\nREPLY\nGROCERY\nSERPENT\nPILLAR\nREPORT\nSTEREO\nCOMFORT\nSAUCER\nAIRPORT\nNEUTRAL\nPAPER\nPROBLEM\nOFFER\nFRAGRANT\nFORMER\nRECESS\nDEFRAUD\nDRAGON\nMORSEL\nSHORT\nGARDEN\nREMEMBER\nSECRET\nSECRET\nPERISH\nHUMOR\nREMARK\nRECKON\nCRAYON\nAFTER\nLUNAR\nEMBARK\nCRUISE\nPONDER\nPROTEST\nMARKET\nFLOUR\nPARTNER\nMARGIN\nRAVEL\nMODERN\nCOARSE\nNEITHER\nREVILE\nCONCRETE\nCAPTOR\nRABBIT\nRESPECT\nFLAGRANT\nRESPECT\nROSTER\nORAL\nSORDID\nQUERY\nREVERE\nDESERT\nSPIDER\nWESTERN\nBORDER\nDOCTOR\nTAPER\nREMEMBER\nRURAL\nARBOR\nBROKEN\nFROLIC\nPAROLE\nCOUNTRY\nPROTECT\nARMAMENT\nARMOR\nREFINE\nMARKET\nFOREST\nCREASE\nSHIRT\nFARTHER\nRIVER\nEXPRESS\nENFORCE\nEMERY\nLATER\nCREATE\nRABBIT\nRADICAL\nFOSTER\nGROVEL\nREVIVE\nINTRIGUE\nFAVOR\nCHART\nHAMPER\nREPAIR\nREFLEX\nPARENT\nREMOTE\nFERMENT\nZEBRA\nPROCEED\nAROSE\nGARMENT\nBERSERK\nRIVET\nCORNER\nPRETZEL\nRECORD\nRELAPSE\nFORGET\nBRINGING\nDOCTOR\nBROKER\nLIVER\nTURKEY\nCRUSH\nRECITE\nSCARCE\nDERIVE\nBRAVELY\nRECORD\nSTERILE\nREFINE\nTRUANT\nFOREST\nEFFORT\nTAMPER\nRAVEN\nROCKET\nRETAKE\nTORCH\nRISEN\nFRANTIC\nREADY\nBANTER\nHARVEST\nBRUTAL\nADRIFT\nIMPRESS\nDRIZZLE\nGRABBED\nREPROACH\nRETAKE\nTRIAL\nARDENT\nEXTRA\nRECUR\nREVIVE\nSHRIFT\nUSURP\nPOTTER\nRELAX\nREMOVE\nQUORUM\nNOSTRIL\nEVERY\nMICROBE\nLATHER\nLIMBER\nRECORD\nCLOVER\nAPARTMENT\nREMAIN\nSURVEY\nINTRIGUE\nORCHID\nGROCER\nHARNESS\nPOPCORN\nZERO\nJEWELRY\nRETRACE\nRESEMBLE\nRESEMBLE\nCALVARY\nPROFESS\nYEAR\nINDOORS\nCATER\nMONSTER\nRIVAL\nBAKER\nPROMISE\nREJECT\nFRIGATE\nFRIGID\nSEMESTER\nGENDER\nBOLSTER\nCREDIT\nMASTER\nPILFER\nGIRLISH\nRESPOND\nABRIDGE\nRETAIN\nDEFENDER\nREMAIN\nFULCRUM\nMORAL\nHARANGUE\nHARNESS\nDEPRIVE\nCHORUS\nSURLY\nHITHER\nANGER\nBIRTHDAY\nSTEWARD\nREPRINT\nRANSACK\nRETURN\nFERTILE\nDESERT\nDREDGE\nCARNIVAL\nADVERB\nPERFECT\nCOPPER\nREDRESS\nCARDINAL\nFRUGAL\nRESULT\nINTRINSIC\nROUTINE\nCREDIT\nFLAVOR\nRACCOON\nPRAYER\nTRAFFIC\nRETAIN\nSISTER\nHEARTY\nGATHER\nADDER\nRETIRE\nCURLY\nSHERIFF\nFRAGILE\nUNFAIR\nPERHAPS\nREGRESS\nINNER\nVARNISH\nMETEOR\nATTRACT\nGRAVEL\nDECEMBER\nTRIBAL\nMIRACLE\nSWERVE\nFODDER\nTRIPLET\nSURELY\nNECTAR\nREMISS\nDRIVEN\nREBATE\nSTARCH\nDEPORT\nSOCCER\nPATTER\nRECESS\nOTHER\nMATTER\nPROVIDE\nPRINTER\nSPIRAL\nSHERIFF\nFORBID\nORGAN\nSILVER\nRAINSTORM\nPRISON\nJOURNEY\nSYRUP\nAGREE\nBERATE\nFOREVER\nRETIRE\nRACKET\nFROZEN\nLATTER\nICEBERG\nPARDON\nFRIDAY\nSUPREME\nHEROIC\nVIRTUE\nOPPRESS\nRECLINE\nCITRON\nBANNER\nCANCER\nLIZARD\nLARYNX\nRELATE\nBEGGAR\nREFUTE\nBICKER\nCENTRAL\nSCRABBLE\nREFRAIN\nCULPRIT\nCELERY\nAPPAREL\nCINDER\nFIBROUS\nIMPORT\nPAINTER\nFILBERT\nARISE\nREWARD\nPREVAIL\nBITTER\nDAUGHTER\nGARBAGE\nSCRIBBLE\nPERSIST\nDESPAIR\nFRENZY\nLYRIC\nREDUCE\nEMBARK\nEXTREME\nRESENTMENT\nHEIFER\nAUTHOR\nQUANDARY\nINFER\nCELLAR\nFORMAL\nRAGGED\nREPULSE\nDEFRAY\nLITTER\nAPPAREL\nMANGER\nCONCRETE\nBLISTER\nINERT\nPROCURE\nDAGGER\nDEBTOR\nDIFFER\nRUMOR\nDERIDE\nRECLAIM\nRELEVANT\nPREVAIL\nALERT\nLADDER\nBANKER\nALGEBRA\nROOMMATE\nPRESAGE\nREBUT\nREBUKE\nMIGRATE\nQUIVER\nAPPROVE\nAPPEAR\nPARTAKE\nREASON\nDISTRICT\nPATTERN\nSURVIVE\nRESIST\nPORTRAIT\nFORTRESS\nREFUSE\nREGION\nPREFERENCE\nTRANSCRIPT\nLIQUOR\nTUTOR\nMOTHER\nRUSTIC\nSQUANDER\nSHIVER\nSUGAR\nPUTRID\nTUMOR\nFEDERAL\nENRICH\nDOLLAR\nUNDER\nPROMINENT\nPURIST\nIMPRESS\nGRATEFUL\nFINGER\nENRICH\nSTRIDENT\nBANKRUPT\nIMMIGRANT\nAVERT\nYEARN\nFLOWERY\nPRODUCT\nFLATTER\nCARGO\nBOUNDARY\nRESIST\nTINDER\nREFUSE\nCORONET\nAPPROVAL\nCOLLAR\nKINDRED\nRESTRAIN\nPRAIRIE\nGREEDY\nJURIST\nFACTORY\nCRUSADE\nDINNER\nHYDRA\nCRUTCH\nULCER\nCOMPRISE\nPREFERENCE\nDESSERT\nQUANDARY\nPREVENTIVE\nROTUND\nNUMBER\nSPLINTER\nHATRED\nBRISKET\nPRECIPICE\nFRITTER\nLUMBER\nREQUIRE\nCRYSTAL\nPRINTER\nBRIGHTLY\nHERMIT\nORANGE\nORANGE\nJURIST\nABRUPT\nSTRETCH\nSTAMMER\nRETAIL\nFORCIBLE\nSOPRANO\nMEMORY\nBROTHER\nDOLLAR\nSHRIVEL\nLUXURY\nCRIMSON\nCREDENCE\nCREVICE\nCLATTER\nBUTLER\nFORAGE\nRESOURCE\nWORTHY\nWATER\nAROUND\nBRAZEN\nLAUREL\nPERSPIRE\nUNFAIR\nINSERT\nPRIVATE\nQUARTET\nFREEDOM\nBEVERAGE\nPAINTER\nPORTION\nVERBAL\nTATTER\nCHERUB\nAFFORD\nGUITAR\nPLAYGROUND\nUSHER\nTYRANT\nARMISTICE\nGENERAL\nGIRAFFE\nHYBRID\nHYBRID\nRESTORE\nTREASON\nGRUEL\nPERVADE\nSACRED\nSACRED\nINSERT\nCERTAIN\nPRETTY\nCHAMBER\nCHECKER\nSCHOLAR\nCONSTRUCT\nINVERT\nNEITHER\nCAVALRY\nPRESENTED\nADMIRAL\nLACQUER\nFORFEIT\nPREDICT\nWESTERN\nCURTAIN\nPRACTICE\nSIMILAR\nTARGET\nPURSUE\nCRITIQUE\nLABORER\nCRITIQUE\nPRESENTED\nRUBBISH\nBRILLIANCE\nTHEORY\nSCARCELY\nDEMUR\nGIRDER\nPROCEED\nBRACELET\nRESTRICT\nSTUPOR\nPERSON\nSCARECROW\nGRAFTED\nSERMON\nCYPRESS\nDURABLE\nRECUR\nINSTRUCT\nDREARY\nPREDICT\nPRACTICE\nWAYWARD\nRADICAL\nERMINE\nCRACKER\nCUTLER\nTUMBLER\nWRITER\nSYRUP\nMERCY\nBRIMSTONE\nADDRESS\nDISTRACT\nWEARY\nBUTCHER\nMARKUP\nREFUSAL\nTHEATER\nTURNIP\nWANDER\nSLUMBER\nDOCTRINE\nWORLDLY\nCYPRESS\nTOURIST\nSTRANGER\nUNFAIR\nBUTTER\nPUTTER\nRESULT\nPREVENTIVE\nAFFRONT\nSUPERB\nCRESCENT\nTHUNDER\nMUTTER\nBLUNDER\nRUBBER\nHUNDRED\nHUNDRED\nIVORY\nTURBAN\nRESONANT\nPRESCRIBE\nSUFFER\nMATTRESS\nREWARD\nTYRANNY\nRETURN\nRECEIVE\nBLUSTER\nASSERT\nPRESCRIBE\nREMEDY\nSTORAGE\nREPEAL\nSTORAGE\nBACHELOR\nSUPPER\nTOURIST\nMURDER\nREPAY\nDEBRIS\nCRICKET\nCRICKET\nTHIRTY\nDANGER\nPROTOCOL\nFORWARD\nANSWER\nREFLECTIVE\nRUSSET\nCONTRARY\nCHILDREN\nGOVERNOR\nEAGER\nTRIBUTE\nPROTOCOL\nBURDEN\nSUMMER\nEARLY\nREFRESHING\nDISTRESS\nTARNISH\nSURFEIT\nRUDDER\nDESCRIBE\nSURMOUNT\nFERTILE\nCONFIRM\nSARCASM\nOCCUR\nREFUSE\nSCHOONER\nENRAGE\nPROPERTY\nCOPIER\nPLETHORA\nCHAUFFEUR\nRECRUIT\nABSURD\nPRODUCE\nMANUSCRIPT\nORDERLY\nFORGIVE\nJUROR\nDIRTY\nCUTTER\nAROUND\nCITRON\nDOORMAT\nFOREIGN\nREPEAL\nSCRATCH\nGLACIER\nABREAST\nCARDINAL\nSUPREME\nCASHIER\nPLAYGROUND\nHAIRCUT\nAFFAIR\nFERVOR\nPASSPORT\nTROUSERS\nPRESCHOOL\nCHEDDAR\nTHIRDLY\nGARDENER\nREDUCE\nEVERYBODY\nREDUCE\nTOWARD\nBEAVER\nPREPAY\nFOREIGN\nFURTHER\nTHIRSTY\nMYSTERY\nSHOULDER\nTRANSIENT\nBURGLAR\nTEARFUL\nWHENEVER\nPARAGRAPH\nREPLENISH\nTRIANGLE\nLEATHER\nGROCERY\nPARAGRAPH\nFEATHER\nFIRSTLY\nCARPENTER\nANGULAR\nACROSS\nCONTRARY\nPREFERRED\nCONCERN\nARCHERY\nGROTESQUE\nRESENTMENT\nFEDERAL\nFORGIVE\nBEDROOM\nTORTURE\nPRODUCE\nFRUSTRATE\nIVORY\nFORSAKE\nTOGETHER\nCIRCUS\nHEIRESS\nDECREPIT\nCOMMERCE\nCHAUFFEUR\nPARENTAL\nHISTORY\nPREFERRED\nPREFERRED\nFABRICATE\nWINTER\nDRAMATIC\nWAGER\nHYDRANT\nVOUCHER\nEVERYONE\nSUBVERT\nSOPRANO\nBIRTHRIGHT\nFLUORESCENT\nPOWERFUL\nFLUORESCENT\nDELIVER\nRESIDENT\nWAIVER\nARBITRATE\nFURNISH\nPROSTRATE\nCREATOR\nORPHANAGE\nBUZZARD\nPRUDENT\nBATTERY\nCHRISTMAS\nGENERAL\nRECEIPT\nPREVENTIVE\nSHUTTER\nIRKSOME\nMINISTER\nMINISTER\nPROHIBIT\nOSTRICH\nMARIGOLD\nBOUNDARY\nABSORBENT\nPARAPHRASE\nALREADY\nSCULPTOR\nSLIPPERY\nSURGEON\nBARITONE\nHAPHAZARD\nBROCHURE\nRELEASE\nSHEPHERD\nPROFESSOR\nSCORCH\nWORSHIP\nWORSHIP\nRECEIVER\nGALLERY\nGROUPING\nMISTREAT\nBARBARIC\nMACKEREL\nENTERPRISE\nVICTORY\nCALENDAR\nSERVICE\nSERVICE\nCRITICIZE\nRELIEF\nVERDICT\nPOETRY\nBARBARIC\nDEGREE\nDECREE\nCORPORAL\nSURGEON\nEXTRACT\nEXTRACT\nDISTEMPER\nBARBARISM\nSHUDDER\nDISTURB\nDAYBREAK\nFRICTION\nRECENTLY\nFRANCHISE\nFRACTION\nCONSTRUCT\nAERIAL\nVISITOR\nCLEARANCE\nGRADUATE\nVISITOR\nBEVERAGE\nTREATMENT\nSTUTTER\nSUMMARY\nGRADUATE\nYOURSELF\nCARELESS\nRELIEF\nWONDER\nENTERTAIN\nFEARLESS\nPURSUANT\nFLATTERY\nAFTERMATH\nDRUNKEN\nFURIOUS\nKANGAROO\nARGUMENT\nBREAKFAST\nGEARING\nAVIATOR\nGROUNDLESS\nADDRESS\nENCROACH\nCUSTARD\nPROSPECTUS\nTHIRTY\nSURRENDER\nCONGRESS\nPREVENTIVE\nSOUTHERN\nRECONDITE\nARGUE\nBEFRIEND\nBEGINNER\nGRAVITY\nGRAVITY\nPOPULAR\nRECONCILE\nRELIEVE\nENTERPRISE\nPRESCHOOL\nEARNEST\nINVARIABLE\nTHEORY\nMALEFACTOR\nTORNADO\nRAPPORT\nCORPORAL\nCLERGY\nRECLUSE\nMESMERIZE\nMINISTRY\nMINISTRY\nRECOVER\nRECENTLY\nKEROSENE\nMARINER\nCARBONATE\nDISINTERESTED\nINTRODUCE\nWORKER\nLIBRARY\nRELIEVE\nTRANSPARENT\nPASSENGER\nTREATIES\nMYRIAD\nGORGEOUS\nNOURISH\nMAGISTRATE\nRESEARCH\nPARLIAMENT\nYOURSELF\nROULETTE\nREGULAR\nPURITY\nPURITY\nRETRIEVE\nBRIBERY\nINSTRUMENT\nTHIRTIETH\nEDITOR\nEDITOR\nTHIRTIETH\nCHARACTER\nJOURNAL\nATTORNEY\nJANITOR\nMAGISTRATE\nATTRACTIVE\nMOREOVER\nFORMULA\nTHROUGHOUT\nPREOCCUPY\nOVERRATE\nHISTORY\nALREADY\nBUTTERY\nGUARDIAN\nFRIVOLOUS\nWONDROUS\nINJURY\nARGUING\nRETRIEVE\nWHENEVER\nAFTERWARD\nPRONOUNCE\nMORNING\nCRITICISM\nAFTERNOON\nFLOURISH\nRAILWAY\nREQUIREMENT\nDISINTERESTED\nENORMOUS\nTOOTHBRUSH\nRECOMPENSE\nRAUCOUS\nSATURATE\nRESEARCH\nQUARANTINE\nPRECIOUS\nVICTORY\nVINEGAR\nFAMILIAR\nINCREASE\nAIRPLANE\nPRECEDING\nCENTIGRAM\nRECEIVE\nRECEIVE\nADJOURN\nBEGRUDGE\nMERCHANT\nCATASTROPHE\nPLETHORA\nPERSONAL\nAWKWARD\nSENATOR\nADVISOR\nSYMMETRY\nWHATEVER\nCOURTSHIP\nGRANDFATHER\nATTORNEYS\nEXERCISE\nGOVERNMENT\nGRADUATE\nCREATURE\nMICROCOSM\nWEATHER\nSWEATER\nAWKWARD\nHOSIERY\nPETRIFY\nROOMINESS\nDISAPPROVE\nRECOGNIZE\nBANKRUPTCY\nASTERISK\nANACHRONISM\nDECREASE\nCREDITOR\nCREDITOR\nDISCREET\nDEMOCRAT\nENTERTAIN\nASSESSOR\nMUSCULAR\nINTEGRITY\nEVERYWHERE\nDIRECTORY\nDIRECTORY\nGRANDFATHER\nPARTICULAR\nTHOROUGHBRED\nDRUNKENNESS\nPERSEVERANCE\nA\nA\nI\nAN\nAM\nAN\nBE\nNO\nIN\nIN\nBE\nAT\nON\nME\nTO\nHE\nIF\nIF\nIT\nON\nIT\nSO\nTO\nBY\nOF\nMY\nUP\nBOY\nGO\nOIL\nAS\nAS\nTO\nIS\nTOY\nIS\nDO\nOF\nUS\nOX\nMAP\nBIB\nBAN\nNAP\nPAN\nHAM\nMAN\nPEN\nLAP\nMEN\nPOP\nHEN\nJOY\nNIP\nPIN\nHIM\nMOP\nLIP\nBOIL\nPAT\nTAP\nHOP\nBET\nPET\nFAN\nMET\nTAN\nTHE\nBIT\nTEN\nNET\nTIP\nOWN\nSAP\nFIN\nLET\nHIT\nTIN\nFOIL\nTOP\nPOT\nBAD\nPAD\nTHE\nBED\nAND\nTOIL\nMAD\nSIP\nHOT\nVAN\nNOT\nHAD\nDID\nAND\nTOW\nLOT\nTOP\nSIN\nEND\nDEN\nDID\nSOB\nDIP\nFIT\nAM\nGAG\nDIM\nBAG\nGAP\nLED\nSOIL\nBEG\nCAP\nHID\nPEG\nDIN\nSAT\nOLD\nCAN\nPOD\nHOW\nSET\nHAG\nSOW\nNOW\nLOT\nNAG\nLID\nHUB\nBIG\nCAN\nFED\nBUN\nPIG\nOWL\nLAG\nNOD\nHUM\nITS\nSIT\nLEG\nTHE\nITS\nHAS\nCOB\nTON\nHAS\nSAD\nTAG\nCOIL\nHOG\nUS\nCAT\nTUB\nBUT\nGET\nFLY\nAIM\nFIG\nFUN\nHIS\nILL\nSPY\nHUT\nATE\nHIS\nNEW\nSOW\nFOG\nBEE\nVOID\nLOG\nSOD\nGET\nGOT\nMAY\nSUM\nALL\nCOT\nBUD\nSUN\nJAM\nFOG\nARE\nMUD\nLAW\nPAW\nPUT\nJOB\nDIG\nBATH\nPATH\nEAT\nCOW\nOFF\nFEE\nGEM\nPUG\nMIX\nLAW\nGOD\nCUB\nJOB\nLAMP\nMUG\nGUM\nBOTH\nTOO\nJOIN\nCOD\nBOX\nEGG\nASK\nERR\nHUG\nPLAN\nEBB\nOUT\nGUN\nPOINT\nARE\nHELP\nPALM\nSEA\nLIMP\nJET\nWHO\nDEW\nDOG\nTHIN\nSAY\nSEE\nOAK\nFIX\nTENT\nBUY\nFLAP\nSHE\nBENT\nTHEM\nDAY\nSPOIL\nTUG\nTHAN\nBELT\nBLOW\nSAW\nTINT\nPELT\nCUT\nJOT\nTHEM\nMELT\nBOLT\nMOTH\nTHAN\nMINT\nSNAP\nSPAN\nMOLT\nTHEN\nBYE\nSIX\nDAMP\nSLAB\nWIT\nHINT\nPINT\nUSE\nFLOP\nBAND\nSLAM\nMOIST\nHILT\nANY\nLINT\nBLOT\nBEND\nTHAT\nPLOT\nSPIN\nADD\nHOIST\nFLAT\nDUG\nBLED\nHAND\nOATH\nAWE\nMALT\nSLIP\nMOAN\nFELT\nMYTH\nTHAT\nFLOW\nSTAB\nPUMP\nTEST\nPAST\nHALT\nLAND\nCAMP\nBUMP\nBEST\nMAST\nPEST\nSTEP\nPETS\nMOLD\nLIFT\nWAD\nHOLD\nBOND\nEYE\nAWE\nNIGH\nPULP\nPOND\nHUMP\nSUE\nSENT\nNEST\nCLAP\nSPIT\nSNOW\nBOAT\nLAST\nODD\nDIE\nPLOD\nCLAM\nHAVE\nHOST\nHOWL\nLUMP\nPLUM\nMILD\nSLOW\nHIM\nCLAN\nFLED\nBEEN\nSPOT\nSTOP\nLOAF\nFOAL\nDOT\nCLIP\nTHIS\nPAVE\nFAST\nWAS\nLIST\nCALM\nBELL\nPALE\nSPED\nERR\nTHIS\nMAIM\nLOFT\nSOAP\nUSE\nPILE\nSAND\nLIVE\nTOWN\nFIND\nFLAG\nMILE\nBILL\nGUY\nSLOT\nSEND\nDYE\nLAST\nSALT\nPAIN\nNOTE\nCENT\nBEAM\nGASP\nSLED\nPEEP\nWAS\nMATE\nLIVE\nPAIL\nBLEW\nHILL\nTOILS\nBARE\nSOLD\nHUNT\nBEAN\nTWO\nBEEN\nSOFT\nHATE\nBALL\nNOON\nLOST\nMARE\nSLID\nBEEN\nMEAN\nVAST\nNAIL\nBOON\nLOAD\nFELL\nLEAP\nLATE\nJAW\nHARE\nVEST\nBLIMP\nBACK\nMEAL\nWAS\nMOON\nGOLF\nFLOG\nBONE\nPACK\nTALE\nFILE\nDUMP\nHOME\nTELL\nBAIT\nDOWN\nLOOP\nPOOL\nPLAY\nPLUS\nOATS\nWHY\nFALL\nSOFT\nWAY\nLEAN\nWHY\nFILL\nMILK\nTILE\nLOYAL\nGIFT\nGLAD\nCLOT\nDEAD\nMULE\nNINTH\nHONE\nKEPT\nCLAD\nKEPT\nPAWN\nPAGE\nNAME\nBEAT\nMASS\nNECK\nBEEF\nPICK\nTHAW\nSAVE\nFLEW\nGOLF\nLACK\nSHAM\nMIRE\nGOLD\nPINE\nMESS\nMEAT\nTEAM\nLAME\nFIFTH\nSALE\nTAIL\nBOOT\nSELL\nBEET\nFALL\nCOLD\nMOVE\nMINE\nGOWN\nHEAD\nHEAT\nBASK\nWAS\nHOOF\nLIME\nNEAT\nLOVE\nMUTE\nMUST\nMEET\nTALL\nMICE\nPOUT\nPLANT\nSHIP\nLAWN\nWE\nTENTH\nMASK\nHERE\nBLOWN\nVOTE\nCOWL\nFOOL\nFAME\nFEEL\nMITT\nPAID\nLACE\nGOAT\nMORE\nLINE\nTEXT\nCLUB\nMAID\nSEAM\nFUND\nCOAT\nTONE\nTOOL\nSAIL\nTAME\nWHOM\nPALM\nFILTH\nVAIN\nSHOP\nSEEP\nVOICE\nQUIT\nGIVE\nBEAD\nLOCK\nFIRE\nTIME\nDEAF\nSEEM\nDATE\nFLAX\nWITH\nGAVE\nDEED\nFACE\nFLAW\nPOISE\nFINE\nTHEFT\nNODE\nLAID\nNEXT\nGALE\nSEAL\nCAVE\nSOON\nWITH\nSEEN\nAUNT\nSMITH\nDEEP\nFEET\nMADE\nDARE\nDOLL\nSHOW\nTINE\nDEAN\nSACK\nPOKE\nDEEM\nMULL\nJOLT\nSAME\nFISH\nNOISE\nSTAMP\nBLEND\nSTEW\nDEAL\nHEED\nHULL\nHALF\nMONTH\nTASK\nGAIN\nMOPE\nHUGE\nBAKE\nHIDE\nFROM\nBLUE\nGATE\nPANTS\nTORE\nSAID\nSOUP\nSICK\nEAST\nMAKE\nDECK\nHOPE\nBIKE\nSPENT\nBLAST\nLOSS\nTHIGH\nPLUMP\nTHEY\nABLE\nLOUD\nKIND\nDIME\nCLAMP\nFUME\nPOSE\nSTINT\nSLEPT\nCARE\nSTAY\nBULK\nFOOT\nLAMB\nWANT\nDASH\nFADE\nCALL\nSMELT\nBABY\nHOAX\nMANY\nFOOD\nAUNT\nBLIND\nFEED\nLAKE\nSNUG\nSLANT\nDINE\nWITH\nBONY\nBULL\nNOSE\nONE\nHOOD\nPULL\nWASP\nBOMB\nGAME\nLIKE\nSLUG\nGLEE\nWITH\nTIGHT\nJUMP\nJEST\nCONE\nCOOL\nEON\nCAME\nCLAY\nSWIM\nLIEU\nDOCK\nVASE\nDISH\nHUGE\nWANT\nDESK\nWHEN\nWHIP\nSWAN\nMIGHT\nWAFT\nNEXT\nBANK\nWHIP\nSPEND\nCANE\nHOLY\nCAGE\nGOOD\nTAKE\nONLY\nCYST\nBOMB\nNIGHT\nSOME\nSEED\nCLAW\nTAPE\nLUCK\nWAND\nGUST\nAVOID\nWIND\nHANK\nLIGHT\nSIDE\nCHIP\nBANG\nNOEL\nHUSH\nSWAN\nPINK\nKITE\nFULL\nKEEP\nDULL\nLIFE\nCOG\nWHEN\nFLOAT\nPLATE\nWIND\nMUSK\nMEEK\nINCH\nCHIN\nGONE\nBOOTH\nWILL\nCHOP\nTOAST\nONE\nVEIN\nFIGHT\nHANG\nANOINT\nBOAST\nDONE\nHUSK\nWILD\nTUNE\nCODE\nCLOTH\nCALM\nHALO\nBLOOM\nLURE\nVEIL\nPURE\nMOUTH\nWREN\nFLAIL\nKEEL\nCHEF\nTANK\nKNOW\nBUSH\nDIKE\nJAIL\nGULL\nPAINT\nPUSH\nBLACK\nACTS\nCAST\nPUNY\nCOME\nBOOK\nCULL\nCALF\nBLAME\nVASE\nGLAND\nFANG\nTUBE\nLAST\nSMELL\nSIGHT\nJUST\nCOPE\nSAFE\nMINCE\nSTUMP\nHOOK\nGLUE\nSTUNT\nDEATH\nTHICK\nPLANE\nSMILE\nPLAID\nWILL\nBLESS\nSANK\nSPILL\nTWIG\nPLEAT\nKISS\nGAZE\nDUCK\nSLAVE\nEMPLOY\nDUNE\nBASTE\nNOTES\nFLARE\nPASTE\nLOOK\nNAVY\nDIAL\nTOOTH\nCOMB\nCAPE\nTEETH\nGOOD\nNUMB\nSOLVE\nTOAD\nBLISS\nWEEP\nSPITE\nCLUMP\nDANK\nSTOVE\nMOUNT\nFENCE\nBLOCK\nCLOWN\nTHERE\nSPARE\nWEAN\nHASTE\nTYPE\nLADY\nWOLF\nSTOLE\nNOISY\nWALL\nSINK\nEON\nSEEK\nMONK\nWHAT\nSNAIL\nSLAIN\nFLAME\nSMALL\nTOMB\nSPAWN\nLONG\nWHAT\nSLATE\nSPOON\nJUST\nSNARE\nTINGE\nTOOK\nKICK\nNINE\nSPOOL\nWAIT\nAMPLE\nTUBE\nBLOOD\nSLEEP\nQUILT\nEIGHT\nSMACK\nSPECK\nFIVE\nFLASH\nSING\nSOUTH\nSTAFF\nSHELF\nFLESH\nBLADE\nSNACK\nGUSH\nBOUND\nMUCH\nTALK\nSTILL\nBLEED\nSPAWN\nWIRE\nPOUND\nBEAST\nSPIRE\nSTAIN\nSAINT\nFLEET\nUSED\nCOED\nMOUND\nWHOLE\nSLACK\nNOBLE\nFLASK\nSUIT\nSPINE\nANNOY\nSTEAM\nBIBLE\nFLOCK\nFLOUT\nENJOY\nCUBE\nGANG\nHOUND\nTAUNT\nSTEEP\nMAPLE\nJADE\nBELOW\nSLIME\nEASE\nWASH\nWISH\nWOOL\nSTALL\nSIXTH\nNYMPH\nWORE\nGLEAM\nJOKE\nJIG\nBLAZE\nQUEST\nSLICK\nLEAST\nBADGE\nPLIGHT\nHEAVE\nSONG\nFLOOD\nPATCH\nBUZZ\nGLARE\nLYMPH\nSWAMP\nHUNG\nHAUNT\nSTACK\nHEALTH\nDUPE\nGLOOM\nGLEAN\nSAYS\nCLIFF\nYOU\nSTONE\nSTOOL\nMATCH\nDUMB\nSLEET\nDEBT\nBELOW\nPOISON\nSQUAT\nCLEAN\nLEAVE\nSNORE\nCURE\nNONE\nFOUND\nLUNG\nPLUME\nTOWEL\nHATCH\nFEAST\nFABLE\nSTAGE\nECHO\nPITCH\nSPADE\nFLUTE\nWEED\nSTICK\nSPEED\nSWAMP\nPLUCK\nAGO\nTABLE\nLIMIT\nWIDE\nBENCH\nLEDGE\nEACH\nSPOKE\nTITLE\nGLOVE\nGOES\nFLAKE\nWIDTH\nGLASS\nDUST\nTHANK\nSMOKE\nSAYS\nBOTCH\nBLANK\nHUMAN\nBUILT\nKNEE\nSUCH\nFAULT\nSTOCK\nFLIGHT\nQUOTE\nBLUSH\nLEVEL\nWAKE\nTWIST\nCLASP\nPLUSH\nJUNE\nNEON\nPINCH\nSUNK\nSTORE\nBEVEL\nSOUND\nDULY\nDOES\nSQUAD\nQUILL\nSLIDE\nSABLE\nTHOSE\nSPIKE\nCOUNT\nEMPLOY\nFLUME\nTHINK\nSKULK\nBLINK\nACTS\nWOOD\nSNAKE\nSLOPE\nLODGE\nWRATH\nBESET\nQUAIL\nSHAVE\nSHALL\nQUITE\nKING\nSUNG\nOBEY\nONCE\nDANDY\nSHELL\nEIGHTH\nIT'S\nMIRE\nMIMIC\nTOWEL\nSLIGHT\nTHING\nIT'S\nFIEND\nFLANK\nBUILD\nQUEEN\nFIFTH\nFIELD\nFLUSH\nTHESE\nDOES\nFINCH\nHANDY\nGLADE\nFLANGE\nSANTA\nBANANA\nKNELT\nCLOG\nEVENT\nEVENT\nSWIFT\nWIFE\nSHOE\nGLOSS\nGLIDE\nGABLE\nSTAND\nGLOBE\nSHEEP\nELBOW\nSHARE\nCABLE\nSKILL\nJUG\nSURE\nCLOUD\nZEAL\nHUMID\nWEAK\nGUEST\nSPEAK\nMOUSE\nSKATE\nATOM\nMIDST\nFIRE\nTHUMB\nCANAL\nSOLO\nTHOUGH\nVOWEL\nSCENT\nPIPE\nBOUGHT\nPOACH\nZONE\nENJOY\nHOUSE\nWEEK\nFATAL\nTIRE\nSEVEN\nSNEAK\nSHAME\nWET\nCOED\nCLOSE\nSTUCK\nSHOVE\nTAUGHT\nWING\nBLONDE\nBOUGHT\nPAGAN\nSIEVE\nELECT\nHASTY\nVOYAGE\nSLEEK\nSTATE\nTASTE\nGHOST\nEAVES\nITEM\nSHINE\nPOEM\nFLUKE\nWALK\nLOFTY\nCLIMB\nPIECE\nSCOLD\nBUNCH\nLIVID\nLION\nSPACE\nSANDY\nPUNCH\nSMOOTH\nOPEN\nHUMID\nSHOCK\nTEMPLE\nWINCE\nSLING\nAPPLE\nMUNCH\nCOOK\nOMEN\nSPICE\nSHORE\nCAKE\nCHILD\nNIECE\nGUILT\nWED\nWHALE\nSCOWL\nALLOW\nABATE\nHUNCH\nWHALE\nEPIC\nWALK\nSQUINT\nWHILE\nCOAST\nCHOICE\nHELMET\nWHILE\nLUNCH\nSAMPLE\nCASE\nUPON\nJEWEL\nSWEAT\nDEPEND\nSLICE\nSWEEP\nSTING\nCIVIL\nABASH\nSHADE\nVOYAGE\nPLAQUE\nHAPPY\nPOET\nBLANCH\nAMASS\nWRIST\nBEMOAN\nAWFUL\nWHITE\nSCALE\nCHAFF\nSPONGE\nWHITE\nSIMPLE\nFLAUNT\nCHILL\nTWINE\nWHERE\nCHAIN\nGUILD\nPEACH\nCHEAP\nCLING\nCOLON\nSHAKE\nDIMPLE\nAPPOINT\nSOUGHT\nHANDLE\nGOOSE\nDON'T\nACID\nGEESE\nAWFUL\nGUESS\nSIEGE\nSHAPE\nWHEEL\nMIDST\nBEHEST\nWOUND\nPSALM\nWHEEL\nCLICK\nDEFEND\nSCARE\nINSIST\nSWINE\nCLAUS\nMARRY\nFLUNG\nJEANS\nSWEET\nKNACK\nSTEAD\nAFLOAT\nSNATCH\nWEAVE\nVELVET\nKNEEL\nCAN'T\nWHINE\nCAUGHT\nLAUGH\nOVAL\nCLOCK\nWEALTH\nSLEEVE\nWHOSE\nWHINE\nCLOTHE\nMONEY\nWRITE\nSTABLE\nSOFA\nQUAINT\nSLEDGE\nSTAPLE\nSHEATH\nANGLE\nHONEY\nMANGY\nLASSO\nLAZY\nFLINCH\nCHESS\nBESTOW\nBANJO\nTHIMBLE\nSTAID\nDAILY\nNYLON\nCAUGHT\nMELON\nLEMON\nEXIT\nBLOUSE\nTOUGH\nWATCH\nWITCH\nSLEUTH\nHOBBY\nTUMBLE\nLIBEL\nBAFFLE\nCHASE\nCHORE\nCEMENT\nCEMENT\nINEPT\nCOUGH\nMOSQUE\nJOYOUS\nSQUARE\nENDOW\nLIEU\nARROW\nARROW\nENVY\nSTUNG\nELEMENT\nWATCH\nBASIS\nSQUALL\nBEGAN\nKNEAD\nANVIL\nSCHOOL\nSODA\nSCENE\nUNLOAD\nAMAZE\nFOGGY\nFELON\nCHASM\nFONDLE\nCHILI\nTIMID\nCOUGH\nMOSQUE\nCABIN\nPENAL\nUNITE\nCHIDE\nCLUNG\nANKLE\nBASIN\nTALON\nWIRE\nSHOOK\nSANTA\nISN'T\nSLEIGHT\nMANAGE\nSTOOD\nMANAGE\nCHUTE\nISN'T\nBUNDLE\nPLEASE\nEJECT\nVENOM\nISN'T\nCYCLE\nINTO\nTIGHTEN\nBATTLE\nCLASS\nSORRY\nFEEBLE\nPICKLE\nCHOSE\nLUNGS\nBASIS\nEDIT\nBEETLE\nWALTZ\nCARRY\nCARRY\nANIMAL\nFULLY\nPEBBLE\nBAUBLE\nMELLOW\nWENT\nCLOSE\nSOOTHE\nLIGHTEN\nBILLOW\nMANILA\nPILLOW\nBLEACH\nWHICH\nGUIDE\nTOTAL\nWHICH\nBOTTLE\nFIRED\nWON'T\nMASON\nFICKLE\nNEW\nUNCLE\nAWARE\nSWING\nBUSHY\nINMATE\nQUENCH\nGULLY\nSHEIK\nBOUNTY\nHEIGHT\nDOUBT\nMOTLEY\nCHANCE\nTICKLE\nSALMON\nGYPSY\nFINISH\nJOLLY\nDAISY\nCASH\nFELLOW\nWIDOW\nTALLOW\nSHOT\nGENTLE\nIMAGE\nKINDLE\nNEEDLE\nBOYHOOD\nUNIT\nLEGAL\nFEW\nANTIC\nEXPEND\nMOPPED\nINTENT\nBUSY\nMYSELF\nTONGUE\nDOUBLE\nLIQUID\nLIQUID\nBACON\nEMPTY\nVACANT\nYOUTH\nWEST\nFUNNY\nNOVEL\nEXIT\nCHASTE\nEIGHTH\nINVITE\nFALLOW\nEMIT\nDON'T\nINFANT\nOLIVE\nDEMON\nSPEECH\nFUEL\nMARROW\nDIET\nEFFECT\nEFFECT\nCOMIC\nVACUUM\nBUCKLE\nLOCAL\nHARROW\nIMPINGE\nWRING\nMINUS\nNARROW\nNARROW\nCOUPLE\nTODAY\nPSALM\nHAVOC\nIMAGE\nGAUDY\nSIZE\nOFTEN\nMIDDLE\nUNIT\nSUNNY\nWHOLLY\nIGNITE\nJUICE\nSOLID\nSAUCY\nCATTLE\nGLOOMY\nWELL\nINCITE\nMEADOW\nPEOPLE\nINFLICT\nEXEMPT\nPENCIL\nRHYME\nCURRY\nINTO\nCHAT\nMETHOD\nOLIVE\nTESTY\nKNIVES\nDENY\nELEVEN\nWRONG\nJUDGE\nMENTHOL\nFATHOM\nSHUT\nKIDNAP\nEMINENT\nSWITCH\nFIDDLE\nSEQUEL\nFOCAL\nDOWNTOWN\nTOPIC\nHOMELY\nWHEN\nFAULTY\nMILDEW\nLOCATE\nDETEST\nEQUAL\nDETEST\nINVENT\nBALLAST\nSADDLE\nTOPAZ\nTHIEVES\nSMASH\nCOBBLE\nCOUNTY\nINSIDE\nPOTENT\nOUTFIT\nWHEN\nCOMPEL\nMOMENT\nQUIET\nSPECKLE\nEDDY\nBALLOON\nSTUDY\nTACTIC\nSLASH\nINFINITE\nPUPIL\nWERE\nFORBID\nAWAKE\nAUDIT\nFILLET\nVOCAL\nALONE\nHECTIC\nAMBUSH\nADMIT\nCONTENT\nMETAL\nCLUMSY\nSTEEPLE\nCOAX\nYIELD\nDIVINE\nSHADOW\nWERE\nAGILE\nITSELF\nINVOICE\nCOULD\nDETECT\nIVY\nWINDOW\nCOTTON\nNAPKIN\nCOFFEE\nCOMMON\nATTACK\nPUDDLE\nBLOSSOM\nCANVAS\nGALLEY\nTOKEN\nBAILIFF\nPIECED\nSIGNAL\nMEASLES\nWRENCH\nYACHT\nWOUND\nGALLANT\nHUMAN\nBOYCOTT\nSILENT\nHUDDLE\nBEHIND\nKENNEL\nDISPLAY\nPICNIC\nQUACK\nCOFFEE\nHELPLESS\nLINEN\nYET\nBEFORE\nDWINDLE\nBALLOT\nNAUGHTY\nCLASH\nICY\nMUMMY\nPROTECT\nASPEN\nPLENTY\nSAFETY\nTIMING\nMISSIVE\nQUICK\nVIAL\nDEFECT\nDISMAL\nDIAL\nCOTTON\nYES\nMAMMAL\nINTO\nWAGON\nBERRY\nPULLEY\nCLIENT\nBANISH\nSTOLEN\nPOLITE\nENCODE\nNATIVE\nMUZZLE\nSPRING\nGAUGE\nHUMID\nLABEL\nBUSTLE\nCAPITAL\nGENTLE\nOBJECT\nSPARROW\nBEGAN\nBEFIT\nCLAPPED\nSYNTAX\nBASIC\nCONVENT\nHUSTLE\nFLUID\nUNIQUE\nPENNY\nEXCEL\nPITY\nCHAISE\nSLUSH\nDAINTY\nGALLOP\nDILUTE\nEASY\nSCHISM\nGOSPEL\nINVALID\nPOLICE\nOBLIGE\nCONTENT\nFAMILY\nEMPLOYMENT\nDIMINISH\nCAMEO\nCHANT\nGOING\nCLIQUE\nCHOOSE\nGALLON\nHUMID\nWOULD\nMAGGOT\nBEGIN\nNOTED\nCUBIC\nJUICY\nCUDDLE\nESSENCE\nGIVING\nJUGGLE\nUSEFUL\nADAGE\nADAGE\nSENTINEL\nALWAYS\nFLUID\nEDIBLE\nBECAME\nTODAY\nDELIGHT\nMENTAL\nGOLDEN\nPATENT\nVANISH\nINQUIRE\nSHALLOW\nTABLET\nGOSPEL\nPOCKET\nLAVISH\nFOSSIL\nINTEND\nENDURE\nICICLE\nVALIANT\nOATMEAL\nHAVEN\nLUCID\nHEAVY\nNOTED\nDWELL\nSUBTLE\nSPOKEN\nINSIDE\nGHETTO\nEXALT\nNOVICE\nPLANET\nMONKEY\nCHEST\nENTICE\nBUBBLE\nSPLENDID\nPIVOT\nSHEET\nFINAL\nUNLOCK\nCOUNTY\nCHEEK\nDEFLECT\nETHICS\nSIPHON\nSHOUT\nJELLY\nJOCKEY\nEFFECT\nBLEMISH\nHOSTILE\nSTOIC\nBASEBALL\nVISIBLE\nISSUE\nOBJECT\nCOMPOSE\nJOSTLE\nAMIDST\nFOCUS\nDONKEY\nNAIVE\nINJECT\nSHUFFLE\nBIGOT\nCHOKE\nWINNOW\nTIPPED\nABUSE\nTHEY'RE\nGOSSIP\nRHYTHM\nLINTEL\nSPECIMEN\nBONNET\nANTIQUE\nACQUIT\nENJOYMENT\nYOUNG\nAWAY\nUNKIND\nPUBLIC\nCARROT\nINFLATE\nABSENT\nBEFORE\nDONKEY\nLOCKET\nSPLENDID\nBESIDE\nSOCKET\nCONTEST\nDISMISS\nZIPPED\nDIVIDE\nUNABLE\nDEFINE\nACCEDE\nCARROT\nELATE\nAPPOINTMENT\nCABBAGE\nCABBAGE\nWOMAN\nWALTZ\nMAILBOX\nMILKING\nCOMPARE\nPOSTPONE\nDISTILL\nSHOULD\nCHEMIST\nFOCUS\nSAILBOAT\nUNTIL\nINFLAME\nHOSTILE\nPIQUANT\nEXCEPT\nHORRID\nVITAL\nTWELVE\nPLENTY\nACUTE\nOFTEN\nALIVE\nDELAY\nAMENDED\nCONVENT\nONESELF\nCONSOLE\nGOING\nFAMOUS\nDAMAGE\nDAMAGE\nPROCEED\nSENTENCE\nCAUSTIC\nSECOND\nSHOES\nNEGLECT\nNEGLECT\nEMPTY\nCACTUS\nSORREL\nMENACE\nTEACH\nCHEAT\nABUSE\nMENACE\nMUSIC\nDEVICE\nIGNORE\nPASSABLE\nMALIGNANT\nALMOST\nTINSEL\nAMUSE\nDIGIT\nDIGIT\nHEIGHTEN\nWOODLAND\nTAKEN\nDETAIL\nBEDTIME\nENLIST\nFIFTY\nASSIST\nCAUSTIC\nOCEAN\nHOBBIES\nWHERE\nPASSIVE\nINCLINE\nDEMISE\nOFFICE\nALLAY\nLENGTHEN\nMASSIVE\nPULPIT\nNOONTIME\nHOPING\nSQUASH\nHAPPEN\nEXPIRE\nPILLAGE\nINDEX\nBECAUSE\nELICIT\nANGEL\nCOMPETE\nDEFAULT\nBARREL\nTOUCH\nPISTON\nWHOLESALE\nDOLPHIN\nDISTANT\nPUNISH\nALOFT\nTACTICS\nDOGMA\nTHESIS\nFLIPPANT\nSCUFFLE\nNARRATE\nTWINKLE\nHYPHEN\nKHAKI\nBEHAVE\nBECAUSE\nTHEREFORE\nBILLET\nDEFECT\nVESTIGE\nBILLET\nNEATLY\nMAGIC\nFATIGUE\nSUBLIME\nDEPOSE\nABOUT\nHALFWAY\nCONTEST\nCONSENT\nINSPECT\nFEMALE\nMILLET\nPACKET\nPACKET\nDAMSEL\nDOGGED\nKHAKI\nBARREL\nEGGNOG\nLATTICE\nDUET\nOFFENSE\nKNUCKLE\nABIDE\nPLASTIC\nTORRENT\nDECAY\nDECAY\nOBLIQUE\nCAJOLE\nSUPPLY\nOBTAIN\nDENIZEN\nLOCUST\nLIAISON\nCONNECT\nOPPONENT\nCADET\nBELONG\nDEFICIT\nFATTEN\nBITTEN\nNICKEL\nSNEEZE\nSTEPPED\nBASKET\nMITTEN\nINTIMATE\nTICKET\nDESCENT\nTICKET\nCOOKIE\nATTEND\nDILUTE\nCONSOLE\nACCEPT\nGIANT\nPICKET\nNOTEBOOK\nCANNIBAL\nMEDICINE\nASPHALT\nABOVE\nCALLUS\nUNKNOWN\nCOMMUNE\nCONTEND\nEXPAND\nALIKE\nCANVASS\nHURRY\nTYPHUS\nGOLDFISH\nALOUD\nVACATE\nDEPLORE\nSTOPPED\nELEVEN\nCONTACT\nSOLACE\nVISITING\nLIAISON\nMALADY\nCOLOGNE\nEMPLOYMENT\nCHALK\nCONFIDE\nSUBMIT\nMANURE\nAUSTERE\nINDUCE\nDUEL\nCOLLATE\nFURRY\nEXIST\nEMBEZZLE\nDEBATE\nLADLE\nUNSEEN\nNATURE\nSTATUE\nNATION\nLOVELY\nPUBLISH\nDOESN'T\nWRESTLE\nOPTION\nINTIMATE\nWOODLAND\nCHALK\nSILLY\nIMPULSE\nACCEPT\nDECLINE\nNOTION\nLOGIC\nADOPT\nTIDAL\nASLEEP\nBEING\nNOBODY\nEXPOSE\nCOMMA\nUNTIE\nCOMING\nSPEEDY\nHAZEL\nHAWAII\nPAGEANT\nFLAMBOYANT\nSTUPID\nMILEAGE\nDAYTIME\nVILLAIN\nENABLE\nLEGION\nENTIRE\nOPTION\nIMPEDE\nSADDEN\nBELIE\nBECAME\nCANNON\nARREST\nFLEECY\nFLIGHTY\nAMOUNT\nINFUSE\nTHEMSELVES\nDEBASE\nMISGIVING\nCOMPUTE\nDAYLIGHT\nDEFAME\nMENTION\nASSUME\nCOLONY\nLICENSE\nNOBODY\nSEDATE\nCURRY\nADVICE\nPOSTPONE\nEMBELLISH\nMACHINE\nATHLETE\nLIMESTONE\nWHOLESOME\nDEACON\nEXPECT\nWITHHOLD\nCONNIVE\nENJOYMENT\nUSING\nASCEND\nENTAIL\nENSUE\nAPPEAL\nSEQUENCE\nDEFACE\nSTUPID\nMILEAGE\nDISPATCH\nJEWELRY\nDITTY\nFASTEN\nCOVET\nFLANNEL\nPANCAKE\nEXPLORE\nANALYSIS\nACUMEN\nCOLLEGE\nCHERRY\nFASHION\nPOTATO\nPELICAN\nWANTON\nCLUTCH\nNAMESAKE\nINHABIT\nDICTATE\nWINDY\nKITTEN\nINSECT\nSECOND\nCONCEDE\nSUCCUMB\nEXPLODE\nSHAMBLES\nJEWEL\nTANGIBLE\nSTIFFEN\nTERRIBLE\nFLIMSY\nABSOLVE\nBENEFIT\nENDURE\nELEPHANT\nTUESDAY\nDECLAIM\nDETAIN\nIMPURE\nLEISURE\nSYSTEM\nSMITTEN\nCASCADE\nKINDNESS\nCUE\nDETAIL\nKNOWLEDGE\nCONFINE\nKIDNEY\nENEMY\nCONTENTED\nOPPOSITE\nCLASSIC\nCOMMIT\nIMMUNE\nDISPUTE\nAPPLEBEE\nDEPICT\nMATURE\nEXHIBIT\nALUMINUM\nPOSSIBLE\nCONTAIN\nFAITHFUL\nPAMPHLET\nAGONY\nCOBWEB\nENOUGH\nCABINET\nALONG\nIMBECILE\nPETITE\nSTUCCO\nBAILIFF\nSHAKEN\nPAVEMENT\nAHEAD\nFIREMAN\nOUTSIDE\nSTEADY\nKITTY\nBLANKET\nBLANKET\nDECIMAL\nADVICE\nKNOWLEDGE\nADDICT\nBANQUET\nPASTIME\nWORRY\nESTATE\nTWITCH\nCOUSIN\nSKEPTIC\nDISTINCT\nINCHES\nSPELLING\nINCHES\nWINDY\nHOLIDAY\nAMONG\nJEALOUS\nCHISEL\nINCLUDE\nWANTON\nSEASON\nAPPLY\nDIGEST\nINCOME\nHIGHLAND\nWIDEN\nDIGEST\nGIDDY\nSTUDIES\nMATURE\nDELEGATE\nDOESN'T\nCONVENE\nGALAXY\nSYNOPSIS\nINCLINE\nINVOLVED\nZENITH\nZENITH\nCLIMATE\nCUTICLE\nCLIMATE\nCHAOS\nDESIRE\nABSENCE\nCAPITAL\nGALLING\nMANUAL\nABSOLVE\nIMPULSE\nPOLICEMAN\nCOACH\nDISSOLVE\nDIZZY\nSCAFFOLD\nVIOLENCE\nHOLIDAY\nTOOTHPASTE\nSTICKY\nINVALID\nLOZENGE\nVISITING\nKNAPSACK\nATTEMPT\nTUESDAY\nCANNOT\nINVALID\nZEST\nMOUNTAIN\nCONFUSE\nFANATIC\nAMENDMENT\nBASEMENT\nHOPELESS\nCONCEAL\nABSTAIN\nHOSTAGE\nDISUSE\nAWHILE\nSKILLET\nCONSIST\nCUTICLE\nLITTLE\nAGAIN\nWALLOW\nSCIENCE\nACQUITTAL\nCLOTHING\nEXCITE\nASSESSMENT\nACCUSE\nBECOME\nSOLACE\nHANDSOME\nASHES\nASHES\nCALLOUS\nADDICT\nFUEL\nMANAGEMENT\nFOUNTAIN\nCOMMUTE\nBESIDE\nCANOPY\nBUTTON\nAFFECTS\nAMPUTATE\nADEQUATE\nMUTTON\nFOLKLORE\nNEGLIGENCE\nEMPLOYEE\nSUBDUE\nAPIECE\nDICTATE\nDEVELOP\nSADNESS\nKITCHEN\nACCOST\nCLINCH\nADMISSIBLE\nDOZEN\nLYING\nDEMOLISH\nEMPHASIS\nCHIMNEY\nCOMMUNE\nINSTEAD\nPACIFIC\nLEAVEN\nSULLEN\nGLISTEN\nFAUCET\nSANDWICH\nDISSECT\nFEUD\nBUCKET\nBUCKET\nMAYBE\nMOONSHINE\nDISTANCE\nSELFISH\nFOOLISH\nAMENDED\nEXAMPLE\nPOETIC\nCALICO\nTHEMSELVES\nSOMEONE\nSUMMON\nBECAUSE\nCOUNCIL\nUNLUCKY\nAVAIL\nASSIGN\nCABINET\nISLAND\nMUSKET\nCHANNEL\nIMITATE\nDINGY\nOPPOSITE\nAGAIN\nLETTUCE\nVEHICLE\nNINETEEN\nECLIPSE\nPLAINTIFF\nWRITTEN\nNOMINATE\nOPOSSUM\nFUNNEL\nEBONY\nCONSTANT\nBALCONY\nDELICATE\nPRESENTED\nELASTIC\nALIEN\nHUSBAND\nNINETY\nCUSTOM\nMEDICINAL\nPRESENTED\nDESOLATE\nECLIPSE\nECLIPSE\nPOLITICAL\nACCOUNT\nDEDUCE\nIMBALANCE\nMOVEMENT\nANNUAL\nCOTTAGE\nAPPEASE\nCOTTAGE\nHUNDRED\nEXPONENT\nPUNGENT\nADVANTAGE\nENABLE\nWEDLOCK\nINDULGE\nSECURE\nDECIDE\nFEATURE\nASSUAGE\nDECADE\nSUDDEN\nCOUNSEL\nUNHAPPY\nACTION\nINDICATE\nFACULTY\nSTATEMENT\nASYLUM\nALWAYS\nWOMEN\nINTIMATE\nDEMEAN\nCANNOT\nPOMPOUS\nLOOPHOLE\nBUDGET\nVEGETABLE\nCIVILIZE\nDESOLATE\nMAIDEN\nFIFTIETH\nUSUAL\nDEDUCT\nAPPLIANCE\nOBSCURE\nAUDIBLE\nSUBJECT\nCONSPIRE\nBUSHES\nPUSHES\nADJACENT\nNEWSSTAND\nMOBILIZE\nATTIRE\nENSLAVE\nMOSQUITO\nBECAUSE\nEXHALE\nUNUSUAL\nHOUSEHOLD\nAWAIT\nBLOOMING\nCOCOA\nPOLLUTE\nWAKEN\nCIVILIAN\nFULFILL\nQUICKSAND\nALLOTMENT\nTELEVISE\nEXPEDITE\nDUPLICATE\nASPECT\nPUSHES\nDOMINANT\nDISJOINTED\nHYENA\nNINETEENTH\nADJUST\nLEISURE\nEXUDE\nCOMPETENT\nFAMILY\nPOSITIVE\nCAPTION\nENTWINE\nSANDWICH\nCLIMAX\nSANDWICH\nAMUSEMENT\nCONCEIT\nFELONY\nLITIGATE\nAUTUMN\nNARRATIVE\nAILMENT\nPLAINTIFF\nSYLLABLE\nMYTHICAL\nESTEEM\nAGAINST\nDETACH\nBONDAGE\nEXPANSIVE\nDOMINANCE\nFICTION\nCONGEAL\nIDEA\nBLOCKADE\nMONOLOGUE\nABSTAIN\nNARRATIVE\nBEWARE\nAMBULANCE\nOBSOLETE\nINSISTENT\nHOLLOW\nOBSOLETE\nCOLLEAGUE\nGNAWING\nLOOKOUT\nCLIENTELE\nVANITY\nLANDSLIDE\nVANITY\nACHIEVE\nEMPLOYEE\nLABELING\nBLOODSHED\nSEASHORE\nFOLLOW\nQUICKEN\nDISCUSS\nSWIVEL\nBEGUILE\nMEANWHILE\nAWAKEN\nOBSTACLE\nMIDNIGHT\nACCESS\nWARRANTY\nCAMPAIGN\nSTUDENT\nACCIDENT\nDUET\nATTENDANT\nDOCTRINE\nDELUDE\nANCIENT\nBICYCLE\nEXCHANGE\nDIDACTIC\nANCIENT\nIRRITATE\nSTOCKINGS\nEMBODY\nLUNCHEON\nCHICKEN\nLADYBUG\nEQUIPPING\nGESTURE\nDOUBTFUL\nADVANTAGE\nCONCLUDE\nSTATION\nUNMOVED\nCONTENTED\nAMPHIBIAN\nAGAINST\nDEFEAT\nOBSTINATE\nBELIEF\nCAVITY\nWEEVIL\nPOIGNANT\nSUBSEQUENT\nSQUIRREL\nSUBJECT\nSYMPHONY\nLANDSLIDE\nDIFFICULT\nCONCEIVE\nACQUIRE\nUSUAL\nFAILURE\nYELL\nIMPEACH\nALKALI\nWICKED\nZOOLOGY\nDEFENDANT\nEXCESSIVE\nMUTINY\nSCHEDULE\nDECADE\nWHIMSICAL\nWHIMSICAL\nMONOTONOUS\nTUXEDO\nSKEPTICAL\nUNUSUAL\nHUNDRED\nENOUGH\nCOMEDY\nMANAGEMENT\nDUCHESS\nHATCHET\nECHOING\nLENGTHEN\nVEHICLE\nTEXTURE\nCINNAMON\nVOLCANO\nENGAGE\nBORROW\nNEGLIGENCE\nARRIVAL\nDUNGEON\nNOTICEABLE\nLEGITIMATE\nSIDEWALK\nCONTINUUM\nDISHONEST\nFANTASTIC\nTALKATIVE\nSECLUDE\nENIGMA\nSLUGGISH\nDEVELOPMENT\nEMBARRASS\nWITNESS\nTENDENCY\nASSOCIATE\nCAUTION\nELIGIBLE\nEXTINCT\nINDELIBLE\nEXCUSE\nSTIPULATE\nDETACH\nSUBSIDY\nTERRIFIC\nEXOTIC\nBEWITCH\nCANDIDATE\nIMPOSSIBLE\nADJUNCT\nFLEXIBLE\nLIABLE\nCAUTION\nMAGAZINE\nLANGUAGE\nLANGUAGE\nABSOLUTE\nDYNASTY\nMEETING\nDESPISE\nNUCLEUS\nGEOLOGY\nPICTURE\nEPITAPH\nBELIEVE\nCUSHION\nNOMINATE\nGENUINE\nDISPOSE\nANTIDOTE\nNUISANCE\nOCCASION\nSYNONYM\nPLEASURE\nLECTURE\nPENALTY\nFEASIBLE\nVENGEANCE\nQUANTITY\nOPTIMISM\nACQUAINT\nCANDIDATE\nEDIFY\nAMNESTY\nPAVILION\nIMBECILE\nPETITION\nBESIEGE\nUTOPIA\nELSEWHERE\nCONSISTENT\nFINANCIAL\nMODICUM\nPETULANT\nOBLIGATE\nGIGANTIC\nMULBERRY\nDILEMMA\nANECDOTE\nEXCUSE\nEGOISM\nWILLFUL\nGENUINE\nANTIDOTE\nDUPLICATE\nJUDGMENT\nASSAULT\nALCHEMY\nEMPHASIS\nNOTHING\nEMBASSY\nFACTUAL\nAPOGEE\nHANDLING\nANALYSIS\nALKALINE\nMAINTENANCE\nPOTENTIAL\nADVANTAGE\nMORTGAGE\nMORTGAGE\nPOTENTIAL\nEMANATE\nALCOHOL\nCOMICAL\nDEPOSIT\nDEPOSIT\nADVANTAGE\nSIMPLICITY\nINNOCENT\nMEANNESS\nMETALLIC\nPLANTATION\nSUBSTITUTE\nBELITTLE\nASSEMBLY\nSESSION\nDECEIVE\nECSTASY\nSECTION\nBETWEEN\nBISCUIT\nMAJESTY\nARRANGEMENT\nQUANTITY\nBASKETBALL\nQUIXOTIC\nSIDEWAYS\nGIGANTIC\nDIVISION\nHORRIFIC\nADMONISH\nHANDLING\nDISPOSAL\nEXISTENCE\nCOMMITMENT\nTEACHABLE\nPOLITICAL\nADDITION\nALTITUDE\nSCHEDULE\nJUNCTION\nAPPENDIX\nMOVINGLY\nASSIGNMENT\nCONTINGENT\nMANAGEABLE\nABHORRENT\nCAMOUFLAGE\nINTELLIGIBLE\nASSOCIATE\nINCESSANT\nSOMEWHERE\nMULTITUDE\nPOLLUTION\nBUDGETING\nDIAGNOSIS\nTECHNICAL\nVOLLEYBALL\nDELINQUENT\nDETACHMENT\nHANDICAPPED\nANNOUNCEMENT\nOCCASIONALLY\nACKNOWLEDGMENT\nDESTINATION\nSALVATION\nCOUNTERFEIT\nSIGNIFICANCE\nENCOURAGEMENT\nSINCERELY\nCOUNTERFEIT\nVERIFY\nINFERIOR\nISSUING\nGUILLOTINE\nIMPATIENT\nPOSSESSIVE\nHUMIDOR\nDEFICIENT\nEXTRAVAGANT\nLABORATORY\nORGANIZE\nARCHITECT\nCANCELLATION\nURGENCY\nHEAVILY\nCONJUGATE\nCONJUGATE\nDECEITFUL\nENGINEER\nADVISOR\nALTERCATION\nDECEITFUL\nBULLETIN\nCREATION\nSLIPPERY\nMANEUVER\nCHERRIES\nERRONEOUS\nMETAPHOR\nERRONEOUS\nDESIRABLE\nIMAGINARY\nSECRETARIAL\nINTERIOR\nACCESSORY\nDESIRABLE\nKINDERGARTEN\nIRRESISTIBLE\nHAZARDOUS\nCHARACTERISTIC\nSKEPTICAL\nJOURNALIST\nJOURNALIST\nEXTERIOR\nECSTATIC\nSOLITARY\nEFFICIENT\nMERCHANDISE\nWILDERNESS\nJEOPARDY\nNOTIFY\nJELLYFISH\nPERSUADE\nDESTINATION\nEXTENSION\nQUESTIONNAIRE\nDISCLOSE\nDIFFICULTY\nDIFFICULTY\nDEVOTION\nGUILLOTINE\nDETACHMENT\nCAPRICIOUS\nCALLIGRAPHY\nSYNDICATE\nSYNDICATE\nQUOTATION\nSTRENUOUS\nEARTHQUAKE\nLITERATURE\nUNACCEPTABLE\nJEOPARDIZE\nTESTIMONIAL\nCLASSIFICATION\nANTISEPTIC\nILLUSTRATION\nHESITATE\nSERVICEABLE\nADEQUATE\nSCHOLASTIC\nDISGUISE\nBUFFALO\nTWEEZERS\nEMULATE\nACCOMPANIED\nPACIFY\nNOTORIETY\nNONFICTION\nDECORATOR\nMIGHTILY\nSWEETEN\nOBNOXIOUS\nINNUMERABLE\nCIVILIZATION\nUNNECESSARY\nESTABLISH\nESTABLISH\nSCISSORS\nEVIDENTLY\nFUNDAMENTAL\nUNLIKELY\nPLAUSIBLE\nELLIPTICAL\nRESOLUTE\nIMPATIENCE\nELIMINATE\nVISUAL\nDETRIMENTAL\nDETRIMENTAL\nDESECRATION\nDESECRATION\nINDUCEMENT\nINCREASE\nOCCASIONALLY\nDECREASE\nOCCASIONALLY\nSUBMISSION\nWEASEL\nPATRONIZE\nSINGULAR\nSANCTUARY\nBROTHERHOOD\nCACHET\nBESIEGED\nRECITATION\nOBESITY\nINSTITUTION\nDOMESTIC\nENCOURAGE\nENCOURAGE\nABBREVIATE\nAFTERTHOUGHT\nINNOCENCE\nCEMETERY\nCEMETERY\nACKNOWLEDGMENT\nMEMORABLE\nCOLLATERAL\nBANKRUPTCY\nOBESITY\nSPECULATE\nRECEIPT\nEXCLUDE\nPATRONIZE\nMISFORTUNE\nMALICIOUS\nBARBECUE\nAMPLIFY\nANCESTRY\nHEADQUARTERS\nHEADQUARTERS\nMINIATURE\nLUNCHROOM\nVOLUNTARY\nCOMMUNICATE\nJUSTIFY\nMINIATURE\nMAINTENANCE\nCEILING\nHYGIENE\nMULTITUDE\nSEDITION\nREDUNDANT\nFUNDAMENTAL\nALLOTTED\nINSECURE\nAVENUE\nFORTUNATELY\nEDUCATE\nFORTUNATELY\nBEWILDER\nEDUCATE\nWEAKEN\nLOGICAL\nCOMPENSATION\nCHIVALRY\nJUSTIFIABLE\nREQUIRE\nREQUIRE\nENORMOUS\nDEVOUR\nENORMOUS\nENORMOUS\nASSOCIATE\nAFTERTHOUGHT\nASSOCIATE\nACCELERATE\nREDUCTION\nMISUNDERSTOOD\nANONYMOUS\nREDUCTION\nCONSCIOUS\nINFECTION\nRECREATION\nCOCOANUTS\nSPEECHLESS\nCOLANDER\nCAFETERIA\nARTICHOKE\nCONCURRENT\nARTICHOKE\nINTEGRITY\nCONSECRATE\nCONTIGUOUS\nBACHELOR\nSATELLITE\nINDUSTRY\nPREJUDICE\nEXISTENCE\nFOUNDATION\nCRYSTALLIZE\nEXTRAORDINARY\nEXTRAORDINARY\nGRADUATE\nORGANIZATION\nANNOUNCEMENT\nRADIOACTIVE\nDISCREPANCY\nLIGHTNING\nDEPRECIATION\nTERRITORY\nDESPOTISM\nIMITATION\nDISBURSEMENT\nDISCERNIBLE\nOBEDIENCE\nDISSOCIATE\nLIBERATE\nRECRUIT\nILLITERATE\nDIURNAL\nACCIDENTALLY\nDOGMATIC\nDOGMATIC\nDOMESTICATE\nACCIDENTALLY\nSUBTERFUGE\nGYMNASIUM\nDISCOVER\nARTIFICIAL\nABOLISH\nEXECUTIVE\nIRREVOCABLE\nFACILITY\nENACTMENT\nENACTMENT\nSTATUTORY\nEXPRESSION\nELIGIBLE\nEXPENDITURE\nEPICURE\nINSINUATE\nEXPENDITURE\nEVANESCENT\nWEDNESDAY\nDORMITORY\nEXPEDIENCY\nWEDNESDAY\nACTIVITY\nEXTRANEOUS\nEXTREMITY\nANGELIC\nFACSIMILE\nFASTIDIOUS\nACTIVITY\nCUSTOMER\nJEWELRY\nEXCEPTIONAL\nFURNITURE\nPUNISHMENT\nTRAGEDY\nMEDALLION\nCELEBRATION\nADVENTURE\nADVENTURE\nINSCRIPTION\nFINANCIAL\nFINANCIAL\nFROSTBITTEN\nDISPOSITION\nMISCHIEVOUS\nIRREFUTABLE\nGASEOUS\nREFUSAL\nSUPPORTER\nELECTION\nGLORIFY\nGRATIFY\nTUESDAY\nCOMMERCIAL\nDISAPPROVAL\nMULTIPLY\nACOUSTICS\nHARMONIC\nCOMMITTEE\nUNDERWEAR\nHITHERTO\nHOMOGENIZE\nNECESSARILY\nIDIOSYNCRASY\nIMBUE\nIMMOVABLE\nPERSONALITY\nEDUCATION\nINCANDESCENT\nEDUCATION\nANCESTOR\nHONORARY\nCUSTOMARY\nINFLUENCE\nINSOLUBLE\nUNAWARE\nINTENSIFY\nDELIVERY\nDESTINY\nCONSCIENCE\nVALUE\nITEMIZED\nDENSITY\nJUDICIOUS\nDENSITY\nCOMPETITION\nNEWSPAPER\nDESOLATE\nLABELING\nINAUGURAL\nLABORIOUS\nINAUGURAL\nCURRENCY\nINVENTION\nCOMPENSATE\nRECRUIT\nAVERSION\nTREACHERY\nMEDITATE\nCENTURY\nAUDIENCE\nAUDIENCE\nMALEFACTOR\nYELLOW\nACHIEVING\nMASTODON\nMATERIALISM\nACCUMULATE\nMERCURIAL\nUNFOUNDED\nPREDECESSOR\nMYTHICAL\nSIGNIFICANCE\nDIRECTION\nMISPRONOUNCE\nDIRECTION\nDIRECTION\nDIRECTION\nSUBMARINE\nILLEGAL\nMYSTIFY\nINTRODUCE\nNONDESCRIPT\nNONENTITY\nCONTEMPORARY\nACCESSIBLE\nOREGANO\nOREGANO\nGENIUS\nPANTOMIME\nPARADOXICAL\nLONGITUDE\nHANDKERCHIEF\nEQUILIBRIUM\nPAUCITY\nPERFORATED\nPERFORATED\nPERIODICAL\nPERUSAL\nJUNIOR\nHANDKERCHIEF\nVACATION\nDELEGATE\nDISAPPEAR\nDISAPPEAR\nPOETICALLY\nPOIGNANCY\nPARTICULAR\nUNDERSTOOD\nREGULAR\nCOMMUNITY\nCOMMUNITY\nUNDERDOG\nDISAPPEARED\nDISAPPEARED\nPHYSICAL\nLIEUTENANT\nMANUFACTURER\nDEVASTATE\nOPERATION\nRAPACIOUS\nRAPACIOUS\nBEHAVIOR\nCHOCOLATE\nBEAUTY\nFUNERAL\nCAPITALIZATION\nMAGNIFY\nGRANDMOTHER\nGRANDMOTHER\nGRANDMOTHER\nCOMMUTER\nSEMINARY\nRECEIVER\nADVERTISEMENT\nCUSTODY\nENCYCLOPEDIA\nEVERYWHERE\nADVERTISEMENT\nNECESSARY\nSURGERY\nENCYCLOPEDIA\nCALCULATOR\nGOVERNMENT\nCONTINUE\nWHOEVER\nCONDITION\nAMOROUS\nUNWILLING\nOTHERWISE\nEASIER\nRIGOROUS\nCONSIDER\nSANCTIFY\nARITHMETIC\nRECURRING\nMERCURY\nRECURRING\nARITHMETIC\nSECURITY\nSILHOUETTE\nYESTERDAY\nSOMERSAULT\nSOUNDINGS\nYESTERDAY\nSPHERICAL\nINFORMAL\nLAWYER\nBENEFITED\nDEHYDRATION\nCHARITY\nEVENING\nESPECIALLY\nESPECIALLY\nAPPRECIATE\nDIRECTORY\nSUBMARINE\nANYWHERE\nANYWHERE\nDIRECTORY\nCARBURETOR\nOVERRULE\nRECEIVER\nEFFIGY\nSERIOUS\nCULTIVATE\nSIMPLICITY\nABUSIVE\nBETWEEN\nBEAUTIFUL\nTOMORROW\nTOMORROW\nBUSINESS\nBUSINESS\nWHATEVER\nTURPITUDE\nCOINCIDENT\nTYPIFY\nESCAPADE\nEMPHASIZE\nEXACTLY\nCYLINDER\nYOURSELF\nANOTHER\nCYLINDER\nDEITY\nUNDERSTAND\nEVERYTHING\nZEALOUS\nEXTRICATE\nGRATITUDE\nRETIRE\n";


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function resolveUrlClient(url) {
    if (url.indexOf('./') !== 0) {
        return url;
    }
    var pathname = window.location.pathname;
    var prefix = '/';
    if (pathname.match(/^\/api\//)) {
        prefix = '/api/';
    }
    return resolveUrl_inner(url, prefix);
}
exports.resolveUrlClient = resolveUrlClient;
function resolveUrl(url, pathDepthFromApiRoot) {
    if (pathDepthFromApiRoot === void 0) { pathDepthFromApiRoot = 1; }
    if (url.indexOf('./') !== 0) {
        return url;
    }
    var depthPrefix = getPathDepthPrefix(pathDepthFromApiRoot);
    return resolveUrl_inner(url, depthPrefix);
}
exports.resolveUrl = resolveUrl;
function resolveUrl_inner(url, prefix) {
    url = url.substr(2);
    // If file extension, make file
    if (url.match(/[^/]\.[^/]+$/)) {
        return prefix + "resource/" + url + "/file";
    }
    else {
        return "" + prefix + url + "?q";
    }
}
function resolveAllUrls(content, pathDepthFromApiRoot) {
    return content
        .replace(/"(\.\/[^"]+)"/g, function (x) { return '"' + resolveUrl(x.substr(1, x.length - 2), pathDepthFromApiRoot) + '"'; })
        .replace(/'(\.\/[^']+)'/g, function (x) { return '\'' + resolveUrl(x.substr(1, x.length - 2), pathDepthFromApiRoot) + '\''; });
}
exports.resolveAllUrls = resolveAllUrls;
function getPathDepthPrefix(pathDepthFromApiRoot) {
    var depthPrefix = '';
    for (var i = 0; i < pathDepthFromApiRoot; i++) {
        depthPrefix += '../';
    }
    return depthPrefix;
}
exports.getPathDepthPrefix = getPathDepthPrefix;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Vanilla Ajax Requests
// From: http://stackoverflow.com/a/18078705/567524

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


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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
var P = __webpack_require__(4);
var browser_ajax_1 = __webpack_require__(16);
function setupBrowser() {
    P.Platform.provider = new BrowserPlatformProvider();
    Promise = __webpack_require__(19).Promise;
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


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(4));
__export(__webpack_require__(17));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
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
    var vertx = __webpack_require__(21);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20), __webpack_require__(15)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

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


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
__webpack_require__(5);


/***/ })
/******/ ]);
//# sourceMappingURL=word-to-picture.js.map