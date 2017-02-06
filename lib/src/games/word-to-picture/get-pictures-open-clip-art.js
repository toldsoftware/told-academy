"use strict";
var tslib_1 = require("tslib");
var lib_1 = require("@told/platform/lib");
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
//# sourceMappingURL=get-pictures-open-clip-art.js.map