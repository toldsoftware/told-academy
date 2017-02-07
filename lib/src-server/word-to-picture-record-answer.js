"use strict";
var tslib_1 = require("tslib");
var node_utils_1 = require("./shared/node-utils");
var blob_utils_1 = require("./shared/blob-utils");
var settings_1 = require("./shared/settings");
function main(context, request) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var word, imageUrl, containerName, blobBaseName, service, appendBlobName, result, imageBlobName, props, response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    context.log('START', 'request.query', request.query);
                    word = request.query.word;
                    imageUrl = request.query.imageUrl;
                    containerName = settings_1.Settings.containerName_wordPictures;
                    blobBaseName = request.query.word;
                    service = blob_utils_1.createBlobService();
                    appendBlobName = blobBaseName + '/usage.append.txt';
                    return [4 /*yield*/, service.appendText(containerName, appendBlobName, imageUrl)];
                case 1:
                    result = _a.sent();
                    context.log('Saved Usage', 'appendBlobName', appendBlobName, 'committedBlockCount', result.committedBlockCount);
                    imageBlobName = blobBaseName + '/image/' + imageUrl;
                    return [4 /*yield*/, service.getBlobProperties(containerName, imageBlobName)];
                case 2:
                    props = _a.sent();
                    if (!!props.exists) return [3 /*break*/, 5];
                    context.log('Copy Image START', 'imageBlobName', imageBlobName);
                    return [4 /*yield*/, node_utils_1.httpRequest_stream(imageUrl, 'GET')];
                case 3:
                    response = _a.sent();
                    context.log('Downloaded Image', 'response.length', response.length);
                    return [4 /*yield*/, service.createBlockBlobFromStream(containerName, imageBlobName, response.stream, response.length)];
                case 4:
                    _a.sent();
                    context.log('Copy Image END', 'imageBlobName', imageBlobName);
                    _a.label = 5;
                case 5:
                    context.done(null, {
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json',
                        },
                        body: {
                            ok: true,
                        }
                    });
                    context.log('END');
                    return [2 /*return*/];
            }
        });
    });
}
exports.main = main;
//# sourceMappingURL=word-to-picture-record-answer.js.map