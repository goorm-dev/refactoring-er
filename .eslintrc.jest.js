module.exports = {
	parserOptions: {
		ecmaVersion: 2018
	},
	env: {
		'jest/globals': true
	},
	extends: ['plugin:jest/recommended', 'prettier'],
	plugins: ['jest'],
	rules: {
		indent: [2, 'tab', { SwitchCase: 1 }],
		'no-tabs': 0,
		'comma-dangle': [0, 'never'],
		'eol-last': [0, 'never'],
		'object-curly-newline': [0, 'never'],
		'arrow-parens': [2, 'as-needed'],
		'implicit-arrow-linebreak': [0, 'never'],
		'no-await-in-loop': [0, 'never'],
		'consistent-return': 0,
		'global-require': 0,
		'react/destructuring-assignment': 0,
		'no-underscore-dangle': 0,
		'new-cap': 0,
		'jest/no-test-callback': 0,
		'jest/no-standalone-expect': 0
	}
};