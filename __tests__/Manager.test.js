const Manager = require('../lib/Manager');

test('Checks manager officeNumebr', () => {
    const officeNum = '5';
    const employee = new Manager('Cooper',1,'test', officeNum);

    expect(employee.officeNumber).toBe(officeNum)
})

test('checks getRole()', () => {
    const getRole = "Manager";
    const employee = new Manager('Cooper');

    expect(employee.getRole()).toBe(getRole)
})



