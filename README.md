# m10c-team-profile-generator

 ## Description
  
This is a command-line application that generates a team profile in HTML format. It prompts the user for information about their team, such as the team name, the names and roles of team members, and their contact information. It then creates an HTML file that displays the team profile, which can be customized as needed.

  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
To use this application, you will need to have Node.js installed on your computer. You can download and install Node.js from the official website: https://nodejs.org/en/download/

Once you have Node.js installed, clone this repository to your local machine and navigate to the project directory in your terminal. Then,  run the following command to install the required dependencies: npm install

  
  ## Usage
  
To use the application, navigate to the project directory in your terminal and run the following command:
You will be prompted to enter the name of your team, as well as information about each team member. Once you have entered all of the necessary information, the application will generate an HTML file that displays your team profile. This file will be saved in the 'output' directory.

  
  ## License
  
This application is licensed under the MIT license.
  
  ## Contributing
  
Contributions to this project are welcome! To contribute, please fork this repository and create a new pull request.
  
  ## Tests
  
To run the tests for this application, navigate to the project directory in your terminal and run the following command: npm run test
  
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

Screenshot:
<img width="1425" alt="Screenshot 2023-04-27 at 12 38 05 AM" src="https://user-images.githubusercontent.com/113946573/234760777-9835a2c6-1c83-4e9a-90da-5098b215ca0c.png">

Walkthrough:
https://drive.google.com/file/d/1CvuO0eLsxM9HwuOcsoziBkQYvn83fFQV/view?usp=share_link
