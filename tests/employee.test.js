const Employee = require("../lib/employee");

test("New Employee", () => {
  const employee = new Employee("First Last", 1234, "email@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("Check that all areas are filled out", () => {
  const employee = new Employee("First Last", 1234, "email@gmail.com");

  expect(employee.getName()).toBe(newEmployee.name);
  expect(employee.getId()).toBe(newEmployee.id);
  expect(employee.getEmail()).toBe(newEmployee.email);
  expect(employee.getRole()).toBe("Employee");
});
