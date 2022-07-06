const { intern } = require("../lib/intern");

test("New Intern", () => {
  const employee = new intern("Name", 123, "email@gmail.com", "school");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.school).toEqual(expect.any(String));
});

test("Check all areas for Engineer is filled out", () => {
  const employee = new engineer("Name", 123, "email@gmail.com", "school");

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getSchool()).toBe(employee.school);
  expect(employee.getRole()).toBe("Intern");
});
