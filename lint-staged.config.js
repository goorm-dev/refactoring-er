const linter = {
	node: filenames =>
		`eslint --ext js,json ${filenames.join(
			' '
		)}`,
	jest: filenames =>
		`eslint -c ./.eslintrc.jest.js --ext test.js ${filenames.join(
			' '
		)}`
};

module.exports = {
	'src/**/*.js': linter.node,
	'src/**/*.test.js': linter.jest
};