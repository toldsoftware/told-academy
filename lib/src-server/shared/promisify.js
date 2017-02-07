"use strict";
function promisify(f, thisContext) {
    if (thisContext === void 0) { thisContext = null; }
    return function () {
        var args = Array.prototype.slice.call(arguments);
        return new Promise(function (resolve, reject) {
            args.push(function (err, result) { return err !== null ? reject(err) : resolve(result); });
            try {
                f.apply(thisContext, args);
            }
            catch (err) {
                reject(err);
            }
        });
    };
}
exports.promisify = promisify;
//# sourceMappingURL=promisify.js.map