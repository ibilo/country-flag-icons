import FLAGS, { RU } from '../react/3x2/index'

describe('exports/react/3x2', () => {
	it('should export ES6', () => {
		FLAGS.RU.should.be.a('function')
		RU.should.be.a('function')
	})

	it('should export CommonJS', () => {
		const Library = require('../react/3x2/index.commonjs')
		// Library.RU.should.be.a('function')
		Library.RU.should.be.a('function')
		expect(Library.default).to.be.undefined
	})
})