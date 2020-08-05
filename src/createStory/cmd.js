const createStory = require('./createStory.js');

//test
module.exports = (program, conf) =>
	program
		.command('createStory <componentDirPath>')
		.option('-p, --storiesPath <path>', 'config stories dir path')
		.description('create a story using component path')
		.action(async (componentDirPath, opts) => {
			await createStory(
				componentDirPath,
				opts.storiesPath || conf.storiesPath,
			);
		});
