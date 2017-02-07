"use strict";
var http = require("http");
var https = require("https");
var url = require("url");
function httpRequest(requestUrl, method) {
    if (method === void 0) { method = 'GET'; }
    return httpRequest_inner(requestUrl, method, true);
}
exports.httpRequest = httpRequest;
function httpRequest_raw(requestUrl, method) {
    if (method === void 0) { method = 'GET'; }
    return httpRequest_inner(requestUrl, method, false);
}
exports.httpRequest_raw = httpRequest_raw;
function httpRequest_inner(requestUrl, method, shouldParseJson) {
    return new Promise(function (resolve, reject) {
        var urlObj = url.parse(requestUrl);
        var requestOptions = urlObj;
        requestOptions.method = method;
        var httpClient = (urlObj.protocol.match(/https/) ? https : http);
        httpClient.request(requestOptions, function (res) {
            var body = '';
            res.on('data', function (d) {
                body += d;
            });
            res.on('end', function () {
                var statusCode = res.statusCode;
                var isSuccess = res.statusCode >= 200 && res.statusCode < 300;
                var statusMessage = res.statusMessage;
                var hasFailedToParseJson = false;
                var bodyObj = null;
                if (shouldParseJson) {
                    try {
                        bodyObj = JSON.parse(body);
                    }
                    catch (err) {
                        bodyObj = body;
                        isSuccess = false;
                        hasFailedToParseJson = true;
                    }
                }
                else {
                    bodyObj = body;
                }
                var responseObj = {
                    requestUrl: requestUrl,
                    body: bodyObj,
                    isSuccess: isSuccess,
                    hasFailedToParseJson: hasFailedToParseJson,
                    statusCode: statusCode,
                    statusMessage: statusMessage,
                    responseRawHeaders: res.rawHeaders
                };
                resolve(responseObj);
            });
        }).end();
    });
}
function httpRequest_stream(requestUrl, method) {
    return new Promise(function (resolve, reject) {
        var urlObj = url.parse(requestUrl);
        var requestOptions = urlObj;
        requestOptions.method = method;
        var httpClient = (urlObj.protocol.match(/https/) ? https : http);
        httpClient.request(requestOptions, function (res) {
            resolve({ stream: res, length: res.headers['content-length'] });
        }).end();
    });
}
exports.httpRequest_stream = httpRequest_stream;
//# sourceMappingURL=node-utils.js.map