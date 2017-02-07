var functions = [
    {name: 'default', main: require('./../../lib/src-server/default').main },
	{name: 'resource', main: require('./../../lib/src-server/resource').main },
	{name: 'setup', main: require('./../../lib/src-server/setup').main },
	{name: 'word-to-picture-record-answer', main: require('./../../lib/src-server/word-to-picture-record-answer').main }
];

module.exports = require('@told/azure-functions-server/lib/src-server/test-main').setDirName(__dirname).serve(functions);