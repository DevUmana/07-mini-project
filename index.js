import fs from "fs";
import inquirer from "inquirer";
import colors from "colors";

//Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL.
inquirer
  .prompt([
    {
      type: "input",
      message: colors.brightMagenta("What is your name?"),
      name: "name",
    },
    {
      type: "input",
      message: colors.brightMagenta("Where are you located?"),
      name: "location",
    },
    {
      type: "input",
      message: colors.brightMagenta("Please write a short bio about yourself:"),
      name: "bio",
    },
    {
      type: "input",
      message: colors.brightMagenta("What is your LinkedIn URL?"),
      name: "linkedin",
    },
    {
      type: "input",
      message: colors.brightMagenta("What is your GitHub URL?"),
      name: "github",
    },
  ])

  .then((response) => {
    const html = generateHTML(response);
    fs.writeFile("index.html", html, (err) =>
      err
        ? console.error(err)
        : console.log(
            "Success! Your portfolio has been generated in index.html"
          )
    );
  });

//Your application should generate an HTML file that displays this information, styled however you like.
const generateHTML = (response) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Generator</title>
    <link rel="stylesheet" href="./assets/css/styles.css">
</head>
<body>
    <header>
        <h1>Portfolio Generator</h1>
    </header>
    <main>
        <section>
            <ul>
                <li>My Name is: ${response.name}</li>
                <li>About me: ${response.bio}</li>
                <li>Where I live: ${response.location}</li>
                <li>My LinkedIn: ${response.linkedin}</li>
                <li>My GitHub: ${response.github}</li>
            </ul>
        </section>
    </main>
</body>
</html>`;
