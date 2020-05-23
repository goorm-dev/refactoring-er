module.exports = {
	env: {
		node: true
	},
	extends: ['eslint:recommended', 'airbnb/base', 'prettier'],
	ignorePatterns: ['*.test.js', 'src/test/**'],
	rules: {
		indent: [
			2,
			'tab',
			{
				ignoredNodes: ['ConditionalExpression *'],
				SwitchCase: 1,
				ObjectExpression: 'off'
			}
		],
		'no-tabs': 0,
		'no-underscore-dangle': 0,
		'comma-dangle': [0, 'never'],
		'eol-last': [0, 'never'],
		'object-curly-newline': [0, 'never'],
		'arrow-parens': [2, 'as-needed'],
		'implicit-arrow-linebreak': [0, 'never'],
		'no-await-in-loop': [0, 'never'],
		'no-unused-vars': 1,
		'no-empty': ['error', { allowEmptyCatch: true }],
		'function-paren-newline': [0, 'naver'],
		'no-underscore-dangle': 0,
		'consistent-return': 0,
		'global-require': 0,
		'react/destructuring-assignment': 0,
		'no-underscore-dangle': 0,
		'new-cap': 0,
		camelcase: 0,
		'arrow-parens': 0
	}
};