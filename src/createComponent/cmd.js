const createComponent = require('./createComponent.js');

module.exports = (program, conf) =>
	program
		.command('createComponent <dirpath>')
		.description('create a component')
		.option('-s, --withStory', 'with story')
		.action(async (dirpath , opts) => {
			await createComponent(dirpath, {...opts, ...conf});
		});