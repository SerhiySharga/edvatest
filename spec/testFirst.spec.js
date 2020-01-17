const {sayHi} = require("../src/func");

describe('Test suite hello', () => {
    it('Test1', () => {
        expect(sayHi()).toBe('Hello', 'Result incorrect');
    })
})
