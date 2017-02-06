"use strict";
function randomize(items) {
    return items.map(function (x) { return ({ x: x, rand: Math.random() }); }).sort(function (a, b) { return a.rand - b.rand; }).map(function (x) { return x.x; });
}
exports.randomize = randomize;
//# sourceMappingURL=randomize.js.map