const { stringContaining } = require("expect");
const employee = require("../lib/employee");

test('gets name', () => {
    const name = employee.name;
expect(stringContaining("a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"))
})