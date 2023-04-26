const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
  const intern = new Intern('John', 1, 'john@example.com', 'University of Arizona');

  expect(intern.name).toBe('John');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's school", () => {
  const intern = new Intern('John', 1, 'john@example.com', 'University of Arizona');

  expect(intern.getSchool()).toEqual(expect.any(String));
});

test("gets intern's role", () => {
  const intern = new Intern('John', 1, 'john@example.com', 'University of Arizona');

  expect(intern.getRole()).toBe('Intern');
});
