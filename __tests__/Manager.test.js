const Manager = require('../library/Manager');

test('Manager object', () => {
    const manager = new Manager('John', '117', 'MChief@cortana.org', '1170');

    expect(manager.name).toBe('John')
    expect(manager.id).toBe('117')
    expect(manager.email).toBe('MChief@cortana.org')
    expect(manager.officeNumber).toBe('1170')
});

test('Manager office number', () => {
    const manager = new Manager('John', '117', 'MChief@cortana.org', '1170');

    expect(manager.getOfficeNumber()).toBe('1170');
});

test('Manager detail', () => {
    const manager = new Manager('John', '117', 'MChief@cortana.org', '1170');

    // expect(manager.getRole()).toHaveProperty('name')
    // expect(manager.getRole()).toHaveProperty('id')
    // expect(manager.getRole()).toHaveProperty('email')
    expect(manager.getRole()).toBe('Manager')
});

