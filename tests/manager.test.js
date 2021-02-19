const { expect } = require('@jest/globals');
const manager = require('../lib/manager');
const employee = require('../lib/employee');

test('gets office number', () => {
    const test = 100;
    const boi = new manager("number", 1, "boi@yaboi.com", test);

    expect(boi.getOfficeNumber()).toBe(test);
})