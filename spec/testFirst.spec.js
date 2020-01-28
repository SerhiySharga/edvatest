const {sayHi} = require('../src/js/javaScript/func');

describe('Test suite hello', () => {
    it('Test1', () => {
        expect(sayHi()).toBe('Hello', 'Result incorrect');
    });
});
