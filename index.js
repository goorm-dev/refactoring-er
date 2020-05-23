#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const appRoot = require('app-root-path');
const { program } = require('commander');

const pkg = require('./package.json');

const getConf = () => {
	const confPath = appRoot + '.refactoring_er.config.js';
	return fs.existsSync(confPath) ? require(confPath) : {};
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


