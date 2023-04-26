function generateMarkdown(team) {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main>
      ${generateCards(team)}
    </main>
  </body>
  
  </html>
  `;

  return html;
}

function generateCards(team) {
  let cards = "";
  for (let i = 0; i < team.length; i++) {
    cards += `
    <section>
      <h2>${team[i].name}</h2>
      <h3>${team[i].getRole()}</h3>
      <ul>
        <li>ID: ${team[i].id}</li>
        <li>Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
      `;
    if (team[i].getRole() === "Manager") {
      cards += `
        <li>Office Number: ${team[i].officeNumber}</li>
        `;
    } else if (team[i].getRole() === "Engineer") {
      cards += `
        <li>Github: <a href="https://github.com/${team[i].github}" target="_blank">${team[i].github}</a></li>
        `;
    } else if (team[i].getRole() === "Intern") {
      cards += `
        <li>School: ${team[i].school}</li>
        `;
    }
    cards += `
      </ul>
    </section>
    `;
  }
  return cards;
}

module.exports = generateMarkdown;

  