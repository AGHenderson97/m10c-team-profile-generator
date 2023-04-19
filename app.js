const generateHTML = require('./generateHTML');
const inquirer = require('inquirer');

const promptManager = async () => {
    const managerQuestions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the team manager\'s employee ID?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the team manager\'s email address?',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the team manager\'s office number?',
      },
    ];
  
    const answers = await inquirer.prompt(managerQuestions);
  
    return {
      name: answers.name,
      id: answers.id,
      email: answers.email,
      officeNumber: answers.officeNumber,
    };
  };

  const promptEngineer = async () => {
    const engineerQuestions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the engineer\'s name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the engineer\'s employee ID?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the engineer\'s email address?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s GitHub username?',
      },
    ];
  
    const answers = await inquirer.prompt(engineerQuestions);
  
    return {
      name: answers.name,
      id: answers.id,
      email: answers.email,
      github: answers.github,
    };
  };
  
  const promptIntern = async () => {
    const internQuestions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the intern\'s name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the intern\'s employee ID?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the intern\'s email address?',
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is the intern\'s school name?',
      },
    ];
  
    const teamMembers = [];

  const managerAnswers = await inquirer.prompt(managerQuestions);
  const manager = {
    name: managerAnswers.name,
    id: managerAnswers.id,
    email: managerAnswers.email,
    officeNumber: managerAnswers.officeNumber,
    role: 'Manager',
  };
  teamMembers.push(manager);

  let moreEngineers = true;
  while (moreEngineers) {
    const engineerAnswers = await inquirer.prompt(engineerQuestions);
    const engineer = {
      name: engineerAnswers.name,
      id: engineerAnswers.id,
      email: engineerAnswers.email,
      github: engineerAnswers.github,
      role: 'Engineer',
    };
    teamMembers.push(engineer);

    const { addMore } = await inquirer.prompt({
      type: 'confirm',
      name: 'addMore',
      message: 'Would you like to add another engineer?',
    });

    moreEngineers = addMore;
  }

  let moreInterns = true;
  while (moreInterns) {
    const internAnswers = await inquirer.prompt(internQuestions);
    const intern = {
      name: internAnswers.name,
      id: internAnswers.id,
      email: internAnswers.email,
      school: internAnswers.school,
      role: 'Intern',
    };
    teamMembers.push(intern);

    const { addMore }

