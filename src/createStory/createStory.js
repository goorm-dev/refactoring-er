const fs = require('fs-extra');
const path = require('path');

const TEMPLATES = {
	STORY: path.join(__dirname, './data/story.jsx'),
};

const ENTITIES = [
	{
		filename: ({ name }) => `${name}.story.jsx`,
		required: () => true,
		content: async ({ name, componentDirPath }) => {
			const buf = await fs.readFile(TEMPLATES.STORY);
			console.log();
			return buf
				.toString()
				.replace(/\$\{name\}/g, name)
				.replace(/\$\{componentDirPath\}/g, componentDirPath);
		},
	},
];

const getComponentNameUsingComponentDirPath = (comDirPath) => {
	const cwd = process.cwd();
	const dirAbsPath = path.resolve(cwd, comDirPath);
	return path.basename(dirAbsPath);
};

const genStoryPath = (storiesPath, componentName) =>
	path.join(storiesPath, componentName);

module.exports = async (componentDirPath, storiesPath) => {
	const componentName = getComponentNameUsingComponentDirPath(
		componentDirPath,
	);

	await fs.mkdirp(storiesPath);

	await Promise.all(
		ENTITIES.map(async (en) => {
			const filepath = path.join(
				storiesPath,
				en.filename({ name: componentName }),
			);
			const content = await en.content({
				name: componentName,
				componentDirPath,
			});
			console.log(`Create ${filepath}`);
			return fs.writeFile(filepath, content);
		}),
	);
};
