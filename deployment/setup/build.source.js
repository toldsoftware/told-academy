// Intentionally global
___export = require('@told/azure-functions-server/lib/src-server/azure-server').setDirName(__dirname).serve(require('./../../lib/src-server/setup').main);
module.exports = ___export;