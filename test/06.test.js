const repeatString = require('./06');

test('Repeat String n times', () => {
    expect(repeatString('Makan!', 3)).toBe('Makan! Makan! Makan!');
})