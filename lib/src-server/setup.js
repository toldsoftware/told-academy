"use strict";
var tslib_1 = require("tslib");
var settings_1 = require("./shared/settings");
var azure_storage_1 = require("azure-storage");
function main(context, request) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var report, log, service, tasks, _loop_1, k;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    report = '';
                    log = function (message) {
                        report += message + "\n";
                        context.log(message);
                    };
                    service = azure_storage_1.createBlobService();
                    tasks = [];
                    log("Creating Tasks START");
                    _loop_1 = function (k) {
                        if (k.indexOf('containerName') !== 0) {
                            return "continue";
                        }
                        var containerName = settings_1.Settings[k];
                        var accessType = k.indexOf('public') > 0 ? azure_storage_1.BlobUtilities.BlobContainerPublicAccessType.BLOB : azure_storage_1.BlobUtilities.BlobContainerPublicAccessType.OFF;
                        var p = new Promise(function (resolve, reject) {
                            log("Container Setup START: '" + containerName + "'");
                            service.createContainerIfNotExists(containerName, { publicAccessLevel: accessType }, function (error, result, response) {
                                if (error) {
                                    context.done(error, null);
                                    reject('FAILED Container Setup: ' + containerName + ' :: ' + error);
                                    return;
                                }
                                log("Container Setup END: '" + containerName + "'");
                                resolve();
                            });
                        });
                        tasks.push(p);
                    };
                    for (k in settings_1.Settings) {
                        _loop_1(k);
                    }
                    log("Creating Tasks END");
                    log("Running Tasks START tasks.length=" + tasks.length);
                    return [4 /*yield*/, Promise.all(tasks)];
                case 1:
                    _a.sent();
                    log("Running Tasks END");
                    context.done(null, {
                        status: 200,
                        headers: {
                            'Content-Type': 'text/plain'
                        },
                        body: 'SUCCESS:\n' + report
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.main = main;
//# sourceMappingURL=setup.js.map