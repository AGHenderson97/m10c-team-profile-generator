const Manager = require("../lib/Manager");

test("creates a Manager object", () => {
  const manager = new Manager("John", 1, "john@example.com", "101");

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(String));
});

test("gets manager's name", () => {
  const manager = new Manager("John", 1, "john@example.com", "101");

  expect(manager.getName()).toEqual(expect.any(String));
});

test("gets manager's ID", () => {
  const manager = new Manager("John", 1, "john@example.com", "101");

  expect(manager.getId()).toEqual(expect.any(Number));
});

test("gets manager's email", () => {
  const manager = new Manager("John", 1, "john@example.com", "101");

  expect(manager.getEmail()).toEqual(expect.any(String));
});

test("gets manager's office number", () => {
  const manager = new Manager("John", 1, "john@example.com", "101");

  expect(manager.getOfficeNumber()).toEqual(expect.any(String));
});

test("gets manager's role", () => {
  const manager = new Manager("John", 1, "john@example.com", "101");

  expect(manager.getRole()).toBe("Manager");
});
