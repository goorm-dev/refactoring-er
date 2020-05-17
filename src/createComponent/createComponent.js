const fs = require('fs-extra');
const path = require('path');

const TEMPLATES = {
	INDEX: path.join(__dirname, './data/index.jsx'),
	COMPONENT: path.join(__dirname, './data/component.jsx'),
	STYLE: path.join(__dirname, './data/style.scss')
};

const COMPONENT_ENTITIES = [
	{
		filename: () => 'index.jsx',
		required: () => true,
		content: async ({ name }) => {
			const buf = await fs.readFile(TEMPLATES.INDEX);
			return buf.toString().replace(/\$\{name\}/g, name);
		}
	},
	{
		filename: ({ name }) => `${name}.jsx`,
		required: () => true,
		content: async ({ name }) => {
			const buf = await fs.readFile(TEMPLATES.COMPONENT);
			return buf.toString().replace(/\$\{name\}/g, name);
		}
	},
	{
		filename: ({ name }) => `${name}.scss`,
		required: () => true,
		content: async ({ name }) => {
			const buf = await fs.readFile(TEMPLATES.STYLE);
			return buf.toString().replace(/\$\{name\}/g, name);
		}
	},
]

module.exports = async (dirpath, { withStory }) => {
	const cwd = process.cwd();
	const dirAbsPath = path.resolve(cwd, dirpath);
	const componentName = path.basename(dirAbsPath);
	
	await fs.mkdirp(dirAbsPath);
	
	await Promise.all(
		COMPONENT_ENTITIES.map(async en => {
			const filepath = path.join(dirAbsPath, en.filename({ name: componentName }));
			const content = await en.content({ name: componentName });
			console.log(`Create ${filepath}`);
			return fs.writeFile(filepath, content);
		})
	);
};