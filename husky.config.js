const path = require('path');

const tasks = arr => arr.join(' && ');

module.exports = {
	hooks: {
		'pre-push': 'npm run test',
		'pre-commit': 'lint-staged --no-stash'
	}
};