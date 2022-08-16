const Employee = require('../library/Employee');

test('employee object', () => {
    const employee = new Employee('John', '117', 'MChief@cortana.org', 'Spartan');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe('117');
    expect(employee.email).toBe('MChief@cortana.org');
    expect(employee.role).toBe('Spartan');
});

test("get employee's name", () => {
    const employee = new Employee('John', '117', 'MChief@cortana.org', 'Spartan');

    expect(employee.name).toBe('John');
});

test("get employee's id", () => {
    const employee = new Employee('John', '117', 'MChief@cortana.org', 'Spartan');

    expect(employee.id).toBe('117');
});

test("get employee's email", () => {
    const employee = new Employee('John', '117', 'MChief@cortana.org', 'Spartan');

    expect(employee.email).toBe('MChief@cortana.org');
});

test("get employee's role", () => {
    const employee = new Employee('John', '117', 'MChief@cortana.org', 'Spartan');

    expect(employee.role).toBe('Spartan');
});