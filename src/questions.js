const managerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the team manager\'s name?',
      validate: function (input) {
        if (!input) {
          return 'Please enter a name.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the team manager\'s employee ID?',
      validate: function (input) {
        if (!input) {
          return 'Please enter an employee ID.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the team manager\'s email address?',
      validate: function (input) {
        if (!input) {
          return 'Please enter an email address.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the team manager\'s office number?',
      validate: function (input) {
        if (!input) {
          return 'Please enter an office number.';
        }
        return true;
      }
    }
  ];
  
  const engineerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the engineer\'s name?',
      validate: function (input) {
        if (!input) {
          return 'Please enter a name.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the engineer\'s employee ID?',
      validate: function (input) {
        if (!input) {
          return 'Please enter an employee ID.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the engineer\'s email address?',
      validate: function (input) {
        if (!input) {
          return 'Please enter an email address.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the engineer\'s GitHub username?',
      validate: function (input) {
        if (!input) {
          return 'Please enter a GitHub username.';
        }
        return true;
      }
    }
  ];
  
  const internQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the intern\'s name?',
      validate: function (input) {
        if (!input) {
          return 'Please enter a name.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the intern\'s employee ID?',
      validate: function (input) {
        if (!input) {
          return 'Please enter an employee ID.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the intern\'s email address?',
      validate: function (input) {
        if (!input) {
          return 'Please enter an email address.';
        }
        return true;
      }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the name of the intern\'s school?',
        validate: function (input) {
          if (!input) {
            return 'Please enter a school name.';
          }
          return true;
        }
      },
    ]