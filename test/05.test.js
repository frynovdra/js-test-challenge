const primeCheck = require('./05');

test('Check wether a number is prime', () => {
    expect(primeCheck(29)).toBe(true);
})