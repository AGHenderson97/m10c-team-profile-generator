const fs = require('fs');
const util = require('util');
const path = require('path');
const { createRequire } = require('module');
const requireESM = createRequire(import.meta.url);
let inquirer;

(async () => {
  inquirer = await requireESM('inquirer').then(module => module.default);
})();

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require(path.resolve(__dirname, './src/generateHTML'));

const teamMembers = [];

const createManager = async () => {
  console.log("Please build your team");
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the manager's office number?",
    }
  ]);

  const manager = new Manager(
    answers.name,
    answers.id,
    answers.email,
    answers.officeNumber
  );

  teamMembers.push(manager);

  console.log("Manager created!");
};

const createEngineer = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineer's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email address?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's GitHub username?",
    }
  ]);

  const engineer = new Engineer(
    answers.name,
    answers.id,
    answers.email,
    answers.github
  );

  teamMembers.push(engineer);

  console.log("Engineer created!");
};

const createIntern = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the intern's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email address?",
    },
    {
      type: "input",
      name: "school",
      message: "What is the name of the intern's school?",
    }
  ]);

  const intern = new Intern(
    answers.name,
    answers.id,
    answers.email,
    answers.school
  );

  teamMembers.push(intern);

  console.log("Intern created!");
};

const createTeam = async () => {
  await createManager();

  let done = false;

  while (!done) {
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "employeeType",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"]
      }
    ]);

    switch (answers.employeeType) {
      case "Engineer":
        await createEngineer();
        break;
      case "Intern":
        await createIntern();
        break;
      default:
        done = true;
        break;
    }
  }

  const html = generateHTML(teamMembers);

  fs.writeFile('./dist/team.html', html, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Success!');
    }
  });
};
createTeam();