const { stringContaining } = require("expect");
const intern = require('../lib/intern');

test('gets school', () => {
    const school = intern.school;
    expect(stringContaining("a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",  "u", "v", "w", "x", "y", "z"))
})