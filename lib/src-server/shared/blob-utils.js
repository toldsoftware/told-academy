"use strict";
var tslib_1 = require("tslib");
var azure_storage_1 = require("azure-storage");
var promisify_1 = require("./promisify");
function createBlobService() {
    var service = azure_storage_1.createBlobService();
    var promisified = promisifyBlobService(service);
    var extended = tslib_1.__assign({}, promisified, { appendText: function (container, blob, content) { return appendText(promisified, container, blob, content); }, doesBlobExist: function (container, blob) { return doesBlobExist(promisified, container, blob); } });
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
function doesBlobExist(service, container, blob) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var exists, blobProps, err2_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    exists = false;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, service.getBlobProperties(container, blob)];
                case 2:
                    blobProps = _a.sent();
                    exists = blobProps.exists;
                    return [3 /*break*/, 4];
                case 3:
                    err2_1 = _a.sent();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, exists];
            }
        });
    });
}
function appendText(service, container, blob, content, shouldIncrementIfFull) {
    if (shouldIncrementIfFull === void 0) { shouldIncrementIfFull = true; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 6]);
                    return [4 /*yield*/, service.appendBlockFromText(container, blob, content)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    err_1 = _a.sent();
                    return [4 /*yield*/, doesBlobExist(service, container, blob)];
                case 3:
                    if (!!(_a.sent())) return [3 /*break*/, 5];
                    return [4 /*yield*/, service.createAppendBlobFromText(container, blob, content)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [3 /*break*/, 6];
                case 6: throw 'Failed to appendText to blob: ' + container + '/' + blob;
            }
        });
    });
}
//# sourceMappingURL=blob-utils.js.map