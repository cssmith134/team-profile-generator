const Employee = require('../lib/Employee');

test("checks name", () => {
    const employee = new Employee('Cooper');
    expect(employee.name).toBe('Cooper');
})

test('Checks employees id', () => {
    const ID = 5;
    const employee = new Employee('Cooper', ID);

    expect(employee.id).toBe(ID)
})

test('checks employee email', () => {
    const employeeEmail = 'yahoo';
    const employee = new Employee('Cooper',1, employeeEmail);

    expect(employee.email).toBe(employeeEmail)
})

test('Checks getName()', () => {
    const getName = 'Cooper';
    const employee = new Employee('Cooper');

    expect(employee.getName()).toBe( getName)
})

test('Checks getId()', () => {
    const getId = 5;
    const employee = new Employee('Cooper', getId);

    expect(employee.getId()).toBe(getId)
})

test('checks getEmail()', () => {
    const getEmail = "yahoo";
    const employee = new Employee('Cooper', 1, getEmail);

    expect(employee.getEmail()).toBe(getEmail)
})

test('checks getRole()', () => {
    const getRole = "Employee";
    const employee = new Employee('Cooper');

    expect(employee.getRole()).toBe(getRole)
})

