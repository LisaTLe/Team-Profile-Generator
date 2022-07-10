const fs = require("fs");
const inquirer = require("inquirer");

const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

const generateHTML = require("./assets/generateHTML");

const team = [];

function init() {
  addManager();
  addEngineer();
  addIntern();
  writeFile();
  generateHTML();

  function getNext(option) {
    if (option === "addEngineer") {
      addEngineer();
    }
    if (option === "addIntern") {
      addIntern();
    }
    if (option === "finish") {
      team.saveFile();
    }
  }

  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the Manager name of this team?",
        },
        {
          type: "input",
          name: "employeeId",
          message: "What is the employee's id number?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the employee's email?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the manager's office number?",
        },
        {
          name: "addMore",
          type: "list",
          choices: [
            {
              value: "addEngineer",
              name: "Add Engineer",
            },
            {
              value: "addIntern",
              name: "Add Intern",
            },
            {
              value: "allDone",
              name: "All Done",
            },
          ],
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.name,
          answers.employeeId,
          answers.email,
          answers.officeNumber
        );
        team.push(manager);
        getNext(answers.addMore);
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the Engineer's name of this team?",
        },
        {
          type: "input",
          name: "employeeId",
          message: "What is the employee's id number?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the employee's email?",
        },
        {
          type: "input",
          name: "gitHub",
          message: "What is the engineer's GitHub username?",
        },
        {
          name: "addMore",
          type: "list",
          choices: [
            {
              value: "addEngineer",
              name: "Add Engineer",
            },
            {
              value: "addIntern",
              name: "Add Intern",
            },
            {
              value: "allDone",
              name: "All Done",
            },
          ],
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.name,
          answers.employeeId,
          answers.email,
          answers.gitHub
        );
        team.push(engineer);
        getNext(answers.addMore);
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the Intern's name?",
        },
        {
          type: "input",
          name: "employeeId",
          message: "What is the intern's id number?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the intern's email?",
        },
        {
          type: "input",
          name: "school",
          message: "What school is the intern attending at?",
        },
        {
          name: "addMore",
          type: "list",
          choices: [
            {
              value: "addEngineer",
              name: "Add Engineer",
            },
            {
              value: "addIntern",
              name: "Add Intern",
            },
            {
              value: "allDone",
              name: "All Done",
            },
          ],
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.name,
          answers.employeeId,
          answers.email,
          answers.achool
        );
        team.push(intern);
        getNext(answers.addMore);
      })
      .then((answers) => {
        fs.writeFile(
          "./dist/index.html",
          generateHTML(answers),
          "utf-8",
          (err) => {
            if (err) {
              console.log(err);
              return;
            } else {
              console.log("Team Profile has been created successfully!");
            }
          }
        );
      });
  }
}
init();
// writeFile();
// generateHTML();
