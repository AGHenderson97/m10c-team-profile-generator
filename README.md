# m10c-team-profile-generator

 ## Description
  
  This is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package. The generated README file includes information on the app's purpose, how to use it, how to install it, how to report issues, and how to make contributions. 
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  To install the necessary dependencies and run the application, use the following commands:
  
  \`\`\`
  npm install
  node app.js
  \`\`\`
  
  ## Usage
  
  After running the command above, follow the prompts to enter information about your application repository. Once you've completed all the prompts, a high-quality README.md file will be generated in the root directory of your project.
  
  ## License
  
  This application is licensed under the MIT license.
  
  ## Contributing
  
  Contributions to this project are welcome! To contribute, please fork this repository and create a new pull request.
  
  ## Tests
  
  To test the application, run the following command:
  
  \`\`\`
  npm test
  \`\`\`
  
  ## Questions
  
  If you have any questions about the repository, open an issue or contact me directly at agh.pe.gatech@outlook.com. You can find more of my work at https://github.com/AGHenderson97.

User Story:
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

Acceptance Criteria:
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
