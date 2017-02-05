"use strict";
var tslib_1 = require("tslib");
var lib_1 = require("@told/platform/lib");
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
//# sourceMappingURL=get-pictures-open-clip-art.js.map