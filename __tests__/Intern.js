const Intern = require('../lib/Intern');

test('checks intern school ', () => {

    const school = "tigard"
    const employee = new Intern('Cooper', 1, "test", "tigard");
    expect(employee.school).toBe(school);


})