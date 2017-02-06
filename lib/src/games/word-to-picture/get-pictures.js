"use strict";
var tslib_1 = require("tslib");
var OCA = require("./get-pictures-open-clip-art");
var PB = require("./get-pictures-pixabay");
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
//# sourceMappingURL=get-pictures.js.map