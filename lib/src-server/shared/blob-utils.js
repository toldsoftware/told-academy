"use strict";
var tslib_1 = require("tslib");
var azure_storage_1 = require("azure-storage");
var promisify_1 = require("./promisify");
function createBlobService() {
    var service = azure_storage_1.createBlobService();
    var promisified = promisifyBlobService(service);
    var extended = tslib_1.__assign({}, promisified, { appendText: function (container, blob, content) {
            return appendText(promisified, container, blob, content);
        } });
    return extended;
}
exports.createBlobService = createBlobService;
function promisifyBlobService(service) {
    if (service == null) {
        return null;
    }
    return {
        createBlockBlobFromText: promisify_1.promisify(service.createBlockBlobFromText, service),
        createBlockBlobFromStream: promisify_1.promisify(service.createBlockBlobFromStream, service),
        getBlobToText: promisify_1.promisify(service.getBlobToText, service),
        appendBlockFromText: promisify_1.promisify(service.appendBlockFromText, service),
        createAppendBlobFromText: promisify_1.promisify(service.createAppendBlobFromText, service),
        getBlobProperties: promisify_1.promisify(service.getBlobProperties, service),
    };
}
var example = promisifyBlobService(null);
function appendText(service, container, blob, content, shouldIncrementIfFull) {
    if (shouldIncrementIfFull === void 0) { shouldIncrementIfFull = true; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var err_1, blobProps;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 6]);
                    return [4 /*yield*/, service.appendBlockFromText(container, blob, content)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    err_1 = _a.sent();
                    return [4 /*yield*/, service.getBlobProperties(container, blob)];
                case 3:
                    blobProps = _a.sent();
                    if (!!blobProps.exists) return [3 /*break*/, 5];
                    return [4 /*yield*/, service.createAppendBlobFromText(container, blob, content)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [3 /*break*/, 6];
                case 6: throw 'Failed to appendText to blob: ' + container + '/' + blob;
            }
        });
    });
}
//# sourceMappingURL=blob-utils.js.map