#!/usr/bin/env node

const fs = require('fs');
const appRoot = require('app-root-path');
const { program } = require('commander');

const pkg = require('./package.json');

const getConf = () => {
	const confPath = appRoot + '.refactoring_er.config.js';
	return fs.existsSync(confPath) ? require(confPath) : {};
};

const conf = getConf();

const createComponentCmd = require('./src/createComponent/cmd.js')(program, conf);

program.parse(process.argv);