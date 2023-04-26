function generateMarkdown(data) {
    return `# ${data.title}
  
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
  `;
  }
  
  module.exports = generateMarkdown;
  