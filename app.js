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
  