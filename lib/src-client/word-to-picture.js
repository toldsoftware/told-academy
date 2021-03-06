"use strict";
var tslib_1 = require("tslib");
var lib_1 = require("@told/platform/lib");
var utils_1 = require("../src/utils");
var canvas_game_1 = require("../src/canvas-game");
var unixode_loader_1 = require("../src/subjects/unixode-loader");
var word_to_picture_game_1 = require("../src/games/word-to-picture/word-to-picture-game");
var word_list_knowledge_tree_1 = require("../src/subjects/word-list-knowledge-tree");
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
//# sourceMappingURL=word-to-picture.js.map