#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const { program } = require('commander');
const { cosmiconfigSync } = require('cosmiconfig');

const pkg = require('./package.json');

const getConf = () => {
	const explorer = cosmiconfigSync('refactoring_er');
	const { config = {} } = explorer.search() || {
		scssExt: 'scss',
		storiesPath: './src/stories'
	};
	return { ...config };
};

const conf = getConf();

const srcPath = path.resolve(__dirname, './src');
const srcs = fs.readdirSync(srcPath).filter(name => name !== 'test');
srcs.forEach(s => {
	const parentPath = path.join(srcPath, s);
	const cmdNames = fs.readdirSync(parentPath).filter(name => name === 'cmd.js');
	const cmdName = cmdNames && cmdNames[0];
	if (cmdName) {
		const cmdPath = path.join(parentPath, cmdName);
		require(cmdPath)(program, conf);	
	}
});


program.parse(process.argv);
