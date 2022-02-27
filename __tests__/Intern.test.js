const Intern = require('../lib/Intern');

test('checks intern school ', () => {

    const school = "tigard"
    const employee = new Intern('Cooper', 1, "test", school);
    expect(employee.school).toBe(school);
})

test('checks getSchool()', () => {
    const getSchool = "tigard"
    const employee = new Intern('Cooper', 1, "test", getSchool);

    expect(employee.getSchool()).toBe(getSchool)
})

test('checks getRole()', () => {
    const getRole = "Intern";
    const employee = new Intern('Cooper');

    expect(employee.getRole()).toBe(getRole)
})

