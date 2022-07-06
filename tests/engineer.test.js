const { engineer } = require("../lib/engineer");

test("New Engineer", () => {
  const employee = new engineer("Name", 123, "email@gmail.com", "githubUser");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.gitHubUser).toEqual(expect.any(String));
});

test("Check all areas for Engineer is filled out", () => {
  const employee = new engineer("Name", 123, "email@gmail.com", "githubUser");

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getGithubUser()).toBe(employee.gitHubUser);
  expect(employee.getRole()).toBe("Engineer");
});
