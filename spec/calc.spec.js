const {addFunc} = require("../src/calc");

describe('Adding two numbers', () => {
    it('Test2', () => {
        expect(addFunc(2, 4)).toBe(2 + 4, "Result correct");
    })
});
