const mebiToKibi = require('./03');

test('Convert Mebi to Kibi', () => {
    expect(mebiToKibi(1)).toBe(1024);
})