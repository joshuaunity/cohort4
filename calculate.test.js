const { add, subtract, multiply, divide, isZero, validNum } = require('./utils/calculate');

test('testing for addition', () => {
    expect(add(2, 3)).toBe(5);
})