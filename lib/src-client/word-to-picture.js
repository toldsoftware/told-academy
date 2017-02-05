"use strict";
var canvas_game_1 = require("../src/canvas-game");
var game_1 = require("../src/games/word-to-picture/game");
function setup() {
    var host = document.getElementById('host');
    canvas_game_1.hostGame(host, function (access) { return new game_1.Game(access); });
}
setup();
//# sourceMappingURL=word-to-picture.js.map