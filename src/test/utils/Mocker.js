class Mocker {
	constructor(module, funcName) {
		this.mock = null;
		this.spy = null;
		this.module = module;
		this.funcName = funcName;
	}

	makeSpy({ module, funcName }) {
		this.spy = jest.spyOn(this.module || module, this.funcName || funcName);
		return this;
	}

	mockResolvedValue(...args) {
		this.mock = this.spy.mockResolvedValue(...args);
		return this;
	}

	mockReturnValue(...args) {
		this.mock = this.spy.mockReturnValue(...args);
		return this;
	}

	mockRejectedValue(...args) {
		this.mock = this.spy.mockRejectedValue(...args);
		return this;
	}
}

module.exports = Mocker;
