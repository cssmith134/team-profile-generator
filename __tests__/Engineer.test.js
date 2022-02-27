const Engineer = require('../lib/Engineer');

test("checks engineers gitHub", () => {
    const engineerGithub = 'github'
    const employee = new Engineer('Cooper', 1, "test",  engineerGithub);

    expect(employee.github).toBe(engineerGithub)
})