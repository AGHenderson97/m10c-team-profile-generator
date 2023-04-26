const generateCards = (employees) => {
  const cards = employees.map((employee) => {
    let roleInfo;
    let roleIcon;
    switch (employee.getRole()) {
      case 'Manager':
        roleInfo = `Office Number: ${employee.getOfficeNumber()}`;
        roleIcon = `<i class="fas fa-mug-hot"></i>`;
        break;
      case 'Engineer':
        roleInfo = `GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
        roleIcon = `<i class="fas fa-glasses"></i>`;
        break;
      case 'Intern':
        roleInfo = `School: ${employee.getSchool()}`;
        roleIcon = `<i class="fas fa-user-graduate"></i>`;
        break;
      default:
        roleInfo = '';
        roleIcon = '';
    }
    return `
      <div class="card">
        <div class="card-header">
          <h2>${employee.getName()}</h2>
          <h3>${roleIcon} ${employee.getRole()}</h3>
        </div>
        <div class="card-body">
          <ul>
            <li>ID: ${employee.getId()}</li>
            <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
            <li>${roleInfo}</li>
          </ul>
        </div>
      </div>
    `;
  });

  return cards.join('');
};

const generateHTML = (employees) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-WarBPW8Vv1CKR6hjmiTKMZ1U6yROU6y61cKhj5mYB/Fk5BILW5ZzG7Mg9jK/9Hb3qyhxntM7AfNzZGp+j8V+bg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="stylesheet" href="style.css">
      <title>My Team</title>
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main>
        ${generateCards(employees)}
      </main>
    </body>
    </html>
  `;
  return html;
};

export default generateHTML;
