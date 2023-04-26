import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown.mjs';
import Manager from './lib/Manager.js';
import Engineer from './lib/Engineer.js';
import Intern from './lib/Intern.js';
import generateHTML from './src/generateHTML.mjs';

const employees = [];

async function createManager() {
  const managerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the team manager's ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the team manager's email?",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the team manager's office number?",
    },
  ];

  const answers = await inquirer.prompt(managerQuestions);
  const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
  employees.push(manager);
}

async function createEngineer() {
  const engineerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the engineer's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the engineer's ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the engineer's email?",
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the engineer's GitHub username?",
    },
  ];

  const answers = await inquirer.prompt(engineerQuestions);
  const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
  employees.push(engineer);
}

async function createIntern() {
  const internQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the intern's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the intern's ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the intern's email?",
    },
    {
      type: 'input',
      name: 'school',
      message: "What is the intern's school?",
    },
  ];

  const answers = await inquirer.prompt(internQuestions);
  const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
  employees.push(intern);
}

async function createTeam() {
  await createManager();

  let inProgress = true;

  while (inProgress) {
    const nextAction = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do next?',
        choices: ['Add Engineer', 'Add Intern', 'Finish building my team'],
      },
    ]);

    switch (nextAction.action) {
      case 'Add Engineer':
        await createEngineer();
        break;
      case 'Add Intern':
        await createIntern();
        break;
      case 'Finish building my team':
        inProgress = false;
        break;
    }
  }

  const markdown = generateMarkdown(employees);
  fs.writeFile('output/team.md', markdown, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Successfully created team.md in the output folder.');
    }
  });

  const html = generateHTML(employees);
  fs.writeFile('output/team.html', html, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Successfully created team.html in the output folder.');
    }
  });
}

createTeam();

