const fs = require('fs-extra');
const path = require('path');

const TEMPLATES = {
	INDEX: path.join(__dirname, './data/index.jsx'),
	COMPONENT: path.join(__dirname, './data/component.jsx'),
	STYLE: path.join(__dirname, './data/style.scss'),
};

let scssExtension = '.scss';

const getScssFileName = (name) => `${name}.${scssExtension}`;

const COMPONENT_ENTITIES = [
	{
		filename: () => 'index.jsx',
		required: () => true,
		content: async ({ name }) => {
			const buf = await fs.readFile(TEMPLATES.INDEX);
			return buf.toString().replace(/\$\{name\}/g, name);
		},
	},
	{
		filename: ({ name }) => `${name}.jsx`,
		required: () => true,
		content: async ({ name }) => {
			const buf = await fs.readFile(TEMPLATES.COMPONENT);
			return buf
				.toString()
				.replace(/\$\{name\}/g, name)
				.replace(/\$\{scssPath\}/g, getScssFileName(name));
		},
	},
	{
		filename: ({ name }) => getScssFileName(name),
		required: () => true,
		content: async ({ name }) => {
			const buf = await fs.readFile(TEMPLATES.STYLE);
			return buf.toString().replace(/\$\{name\}/g, name);
		},
	},
];

const setScssExtension = (scssExt) => {
	if (scssExt) {
		scssExtension = scssExt;
	}
};

module.exports = async (dirpath, { scssExt } = {}) => {
	const cwd = process.cwd();
	const dirAbsPath = path.resolve(cwd, dirpath);
	const componentName = path.basename(dirAbsPath);

	await fs.mkdirp(dirAbsPath);

	setScssExtension(scssExt);

	await Promise.all(
		COMPONENT_ENTITIES.map(async (en) => {
			const filepath = path.join(
				dirAbsPath,
				en.filename({ name: componentName }),
			);
			const content = await en.content({ name: componentName });
			console.log(`Create ${filepath}`);
			return fs.writeFile(filepath, content);
		}),
	);
};
