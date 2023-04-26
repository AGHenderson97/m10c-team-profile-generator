const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
  const engineer = new Engineer("John", 1, "john@example.com", "johngithub");

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's name", () => {
  const engineer = new Engineer("John", 1, "john@example.com", "johngithub");

  expect(engineer.getName()).toEqual(expect.any(String));
});

test("gets engineer's ID", () => {
  const engineer = new Engineer("John", 1, "john@example.com", "johngithub");

  expect(engineer.getId()).toEqual(expect.any(Number));
});

test("gets engineer's email", () => {
  const engineer = new Engineer("John", 1, "john@example.com", "johngithub");

  expect(engineer.getEmail()).toEqual(expect.any(String));
});

test("gets engineer's GitHub username", () => {
  const engineer = new Engineer("John", 1, "john@example.com", "johngithub");

  expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("gets engineer's role", () => {
  const engineer = new Engineer("John", 1, "john@example.com", "johngithub");

  expect(engineer.getRole()).toBe("Engineer");
});
