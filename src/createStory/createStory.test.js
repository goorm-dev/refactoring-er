const fs = require('fs-extra');

const Mocker = require('_test/utils/Mocker');

const createStory = require('./createStory');

describe('createStory', () => {
	const mkdirp = new Mocker();
	const writeFile = new Mocker();

	beforeEach(() => {
		mkdirp
			.makeSpy({
				module: fs,
				funcName: 'mkdirp',
			})
			.mockResolvedValue();
		writeFile
			.makeSpy({
				module: fs,
				funcName: 'writeFile',
			})
			.mockResolvedValue();
	});

	test('fs.writeFile 호출하는 지', async () => {
		await createStory('a', '../src/stories');

		expect(writeFile.mock).toHaveBeenCalled();
	});
});
