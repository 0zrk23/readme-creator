const inquirer = require('inquirer');
const fs = require('fs');

function generateRM(appInfo){
    console.log(appInfo.install)
    let markup = `# ${appInfo.title}`
    switch(appInfo.license){
        case "MIT License":
            markup += `
[MIT License](https://img.shields.io/github/license/0zrk23/readme-creator)`;
            break;
        case "Apache License 2.0":
            markup += `
[Apache License](https://img.shields.io/badge/license-Apache%202.0-blue)`;
            break;
        case "GNU General Public License v3.0":
            markup += `
[General Publick License License](https://img.shields.io/badge/license-GPL-blue)`;
            break;
        case "BSD 2-Clause 'Simplified' License":
            markup += `
[BSD 2-Clause](https://img.shields.io/badge/license-BDS-green)`;
            break;
        case "BSD 3-Clause 'Simplified' License":
            markup += `
[BSD 3-Clause](https://img.shields.io/badge/license-BDS-green)`;
            break;
        case "Boost Software License 1.0":
            markup +=`
[BS License](https://img.shields.io/badge/license-BSL-green)`;
            break;
        case "Creative Commons Zero v1.0 Universal License":
            markup +=`
[CCZ](https://img.shields.io/badge/license-CCZ-green)`;
            break;
        case "Eclipse Public License 2.0":
            markup += `
[EPL 2.0](https://img.shields.io/badge/license-CCZ-green)`;
            break;
        case "GNU Affero General Public License v3.0":
            markup += `
[GNU](https://img.shields.io/badge/license-GPL-blue)`;
            break;
        case "GNU General Public License v2.0":
            markup += `
[GNU](https://img.shields.io/badge/license-GPL-blue)`;
            break;
        case "GNU Lesser General Public License v2.1":
            markup += `
[GNI](https://img.shields.io/badge/license-GPL-blue)`;
            break;
        case "Mozzila Public License 2.0":
            markup += `
[Mozzila Public License 2.0](https://img.shields.io/badge/license-GPL-blue)`;
            break;
        default:
            markup += `
[The Unlicense](https://img.shields.io/badge/license-Unlicense-green)`;
    }
    markup += `
<p align="center"><img src="https://via.placeholder.com/1794x1080.png?text=Coming+Soon!" alt="Coming Soon" style="box-sizing: border-box; width: 80%;"></p>

## Description

${appInfo.description}

## Table of Contents
`
if(appInfo.install){
markup +=` - [Installation](#installation)
`;
}
markup +=` - [Usage](#usage)
 - [Credits](#credits)
 - [License](#license)
 `;
 if(appInfo.tests){
markup += `- [Tests](#tests)
`;
 }
 markup += `- [Questions](#questions)

`
if(appInfo.install){
markup += `## Installation
${appInfo.install}
`;
}

     markup += `## Usage

${appInfo.usage}

## Credits

${appInfo.credits}

## License

This project is under the ${appInfo.license}

`
     if(appInfo.test){
        `## Tests

        ${appInfo.tests}
        `
     }

     markup += `## Questions
     
${appInfo.questions}

 - [GitHub Profile](${appInfo.github})
 - [Email](${appInfo.email})`; 
      return markup;
}


inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the web application?\n',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select one of the following licenses',
        choices: [
            "MIT License",
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "BSD 2-Clause 'Simplified' License",
            "BSD 3-Clause 'Simplified' License",
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal License",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozzila Public License 2.0",
            "The Unlicense"
        ]
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please Write a description for the web app.\nYou can include:\n - What was your motivation?\n - Why did you build this project?\n - What problem does it solve?\n - What did you learn?\n'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please type in instructions for installing the application.\nLeave blank for N/A\n'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please type in instructions on how to use the application.\n'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please type in the creadits for the project\n'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please type the tests used in this project\nLeave blank for N/A\n'
    },
    {
        type: 'input',
        name: 'questions',
        message: "Please type instructions for how to contact you\n"
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter a link to your GitHub Profile\n"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your email\n"
    }
  ])
  .then((answers) => {
    const readmeContents = generateRM(answers);

    fs.writeFile('generated-README.md', readmeContents, (err) =>
      err ? console.log(err) : console.log('Successfully created README.mn!')
    );
  });