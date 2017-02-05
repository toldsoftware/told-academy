"use strict";
var canvas_access_1 = require("./canvas-access");
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
//# sourceMappingURL=canvas-game.js.map