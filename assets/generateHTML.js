const Employee = require("../lib/Employee");

const teamDiv = (team) => {
  //manager card

  const createManager = (manager) => {
    return ` 
<div class="card, border border-info, rounded">
  <div class="card-title">${manager.getName()}</div>
  <div class="card-subtitle, h5">${manager.getRole()}</div>
  <div class="card-body">
  <ul class="card-list">
    <li class="list-item"> ID: ${manager.getId()} </li>
    <li class="list-item"> Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</li>
    <li class="list-item"> Office Number: ${manager.getOfficeNumber()} </li>
  </ul>
</div>  
</div>`;
  };

  //engineer card

  const createEngineer = (engineer) => {
    return ` 
<div class="card, border border-info, rounded">
  <div class="card-title">${engineer.getName()}</div>
  <div class="card-subtitle, h5">${engineer.getRole()}</div>
  <div class="card-body">
  <ul class="card-list">
    <li class="list-item"> ID: ${engineer.getId()} </li>
    <li class="list-item"> Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</li>
    <li class="list-item"> GitHub: <a href ="https://github.com/${engineer.getGitHub()}"> ${engineer.getGitHub()} </li>
  </ul>
</div>  
</div>`;
  };

  //intern card
  const createIntern = (intern) => {
    return ` 
<div class="card, border border-info, rounded">
  <div class="card-title">${intern.getName()}</div>
  <div class="card-subtitle, h5">${intern.getRole()}</div>
  <div class="card-body">
  <ul class="card-list">
    <li class="list-item"> ID: ${intern.getId()} </li>
    <li class="list-item"> Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</li>
    <li class="list-item"> Attending School: ${intern.getSchool()} </li>
  </ul>
</div>  
</div>`;
  };

  //join all cards into one
  const teamHTML = [];

  teamHTML.push(
    team
      .filter((Employee) => Employee.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );

  teamHTML.push(
    team
      .filter((Employee) => Employee.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
      .join("")
  );

  teamHTML.push(
    team
      .filter((Employee) => Employee.getRole() === "Intern")
      .map((intern) => createIntern(intern))
      .join("")
  );

  return teamHTML.join("");
};

//html template page

module.exports = (team) => {
  return `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <!-- CSS only -->
         <link
         href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
         rel="stylesheet"
         integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
         crossorigin="anonymous"
       />
        <title>Team Profile</title>
      </head>
      <header class="h1, text-center"> Welcome, Meet The Team!</header>
      <body>
        
      ${teamDiv(team)}
            
      </body>
    </html>`;
};
