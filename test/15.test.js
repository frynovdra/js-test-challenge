const romanize = require('./15');

test('give roman number', () => {
    expect(romanize(1).toBe("I"));
});