const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('getName', () => {
    it('should return the name of the employee', () => {
      const employee = new Employee('John', 123, 'john@example.com');
      expect(employee.getName()).toBe('John');
    });
  });
});
