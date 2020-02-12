const isLeapYear = require('./04');

test('Leap year check', () => {
    expect(isLeapYear(2000)).toBe(true);
})