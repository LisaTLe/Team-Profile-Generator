const { manager } = require("../lib/manager");

test("New Manager", () => {
  const employee = new manager("Name", 123, "email@gmail.com", "office number");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.officeNumber).toEqual(expect.any(Number));
});

test("Check all areas for Engineer is filled out", () => {
  const employee = new manager("Name", 123, "email@gmail.com", "office number");

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getOfficeNumber()).toBe(employee.officeNumber);
  expect(employee.getRole()).toBe("Manager");
});
