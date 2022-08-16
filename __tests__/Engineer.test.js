const Engineer = require('../library/Engineer');

test('Engineer object', () => {
    const engineer = new Engineer('John', '117', 'MChief@cortana.org', 'KyleAxley');

    expect(engineer.name).toBe('John')
    expect(engineer.id).toBe('117')
    expect(engineer.email).toBe('MChief@cortana.org')
    expect(engineer.github).toBe('KyleAxley')
});

test("Engineer's github", () => {
    const engineer = new Engineer('John', '117', 'MChief@cortana.org', 'KyleAxley');
    
    expect(engineer.getGitHub()).toBe('KyleAxley')
});

test("Engineer's role", () => {
    const engineer = new Engineer('John', '117', 'MChief@cortana.org', 'KyleAxley');
    
    expect(engineer.getRole()).toHaveProperty('name')
    expect(engineer.getRole()).toHaveProperty('id')
    expect(engineer.getRole()).toHaveProperty('email')
    expect(engineer.getRole()).toHaveProperty('github')
});