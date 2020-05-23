const fs = require('fs-extra');

const Mocker = require('_test/utils/Mocker');

const createComponent = require('./createComponent');

describe('createComponent', () => {
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

	test('COMPONENT_ENTITIES에 따라서 fs.writeFile 호출하는 지', async () => {
		await createComponent('a');

		expect(writeFile.mock).toHaveBeenCalled();
	});
});
