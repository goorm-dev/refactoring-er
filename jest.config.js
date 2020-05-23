const path = require('path');

module.exports = {
	rootDir: path.join(__dirname, './'),
	verbose: true,
	coverageReporters: ['text', 'html'],
	coverageDirectory: '<rootDir>/reports/coverage/',
	restoreMocks: true,
	moduleNameMapper: {
		'^_test/(.*)': '<rootDir>/src/test/$1.js'
	},
	coverageReporters: ['text', 'html'],
	coverageDirectory: '<rootDir>/reports/coverage',
	coverageThreshold: {
		global: {
			statements: 75,
		}
	}
};