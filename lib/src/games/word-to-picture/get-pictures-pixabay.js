"use strict";
var tslib_1 = require("tslib");
var lib_1 = require("@told/platform/lib");
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
//# sourceMappingURL=get-pictures-pixabay.js.map