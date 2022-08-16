const Intern = require('../library/Intern');

test('intern object', () => {
    const intern = new Intern('John', '117', 'MChief@cortana.org', 'USNC Spartan Project');

    expect(intern.name).toBe('John');
    expect(intern.id).toBe('117');
    expect(intern.email).toBe('MChief@cortana.org');
    expect(intern.school).toBe('USNC Spartan Project');
});

test('get intern school', () => {
    const intern = new Intern('John', '117', 'MChief@cortana.org', 'USNC Spartan Project');

    expect(intern.getSchool()).toBe('USNC Spartan Project');
})

test('intern roles', () => {
    const intern = new Intern('John', '117', 'MChief@cortana.org', 'USNC Spartan Project');

    // expect(intern.getRole()).toHaveProperty('name')
    // expect(intern.getRole()).toHaveProperty('id')
    // expect(intern.getRole()).toHaveProperty('email')
    expect(intern.getRole()).toBe('Intern')
})