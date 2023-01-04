const inquirer = require('inquirer');
const fs = require('fs');

function generateRM(appInfo){
    let markup = `# ${appInfo.title}`
    switch(appInfo.license){
        case "MIT":
            markup += `
            [MIT License](https://img.shields.io/github/license/0zrk23/readme-creator)
            `;
            break;
        case "Apache":
            markup += `
            [Apache License](https://img.shields.io/badge/license-Apache%202.0-blue)
            `;
            break;
        case "GNU General Public License v3.0":
            markup += `
            [General Publick License License](https://img.shields.io/badge/license-GPL-blue)
            `;
            break;
        case "BSD 2-Clause 'Simplified' License":
            markup += `
            [BSD 2-Clause](https://img.shields.io/badge/license-BDS-green)
            `;
            break;
        case "BSD 3-Clause 'Simplified' License":
            markup += `
            [BSD 3-Clause](https://img.shields.io/badge/license-BDS-green)
            `;
            break;
        case "Boost Software License 1.0":
            markup +=`
            [BS License](https://img.shields.io/badge/license-BSL-green)
            `;
            break;
        case "Creative Commons Zero v1.0 Universal License":
            markup +=`
            [CCZ](https://img.shields.io/badge/license-CCZ-green)
            `;
            break;
        case "Eclipse Public License 2.0":
            markup += `
            [EPL 2.0](https://img.shields.io/badge/license-CCZ-green)
            `;
            break;
        case "GNU Affero General Public License v3.0":
            markup += `
            [GNU](https://img.shields.io/badge/license-GPL-blue)
            `;
            break;
        case "GNU General Public License v2.0":
            markup += `
            [GNU](https://img.shields.io/badge/license-GPL-blue)
            `;
            break;
        case "GNU Lesser General Public License v2.1":
            markup += `
            [GNI](https://img.shields.io/badge/license-GPL-blue)
            `;
            break;
        case "Mozzila Public License 2.0":
            markup += `
            [Mozzila Public License 2.0](https://img.shields.io/badge/license-GPL-blue)
            `;
            break;
        default:
            markup += `
            [The Unlicense](https://img.shields.io/badge/license-Unlicense-green)
            `;
    }
    markup += `<p align="center"><img src="http's://via.placeholder.com/1794x1080.png?text=Coming+Soon!" alt="Coming Soon" style="box-sizing: border-box; width: 80%;"></p>
    
    ## Description

    ${appInfo.description}
    
    ## Table of Contents
    
     - [Installation](#installation)
     - [Usage](#usage)
     - [Credits](#credits)
     - [License](#license)
     - [Tests](#tests)
     - [Questions](#questions)
     
     ## Installation

     ${appInfo.install}
     
     ## Usage

     ${appInfo.usage}
     
     ## Credits

     ${appInfo.credits}
     
     ## License

     This project is under the ${appInfo.license}
     
     ## Tests

     ${appInfo.tests}
     
     ## Questions
     
     ${appInfo.questions}

      - [GitHub Profile](${appInfo.github})
      - [Email](${appInfo.email})`; 
}


inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the web application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select one of the following licenses',
        choices: [
            "MIT",
            "Apache",
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
        message: 'Please Write a description for the web app.\nYou can include:\n - What was your motivation?\n - Why did you build this project?\n - What problem does it solve?\n - What did you learn?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please type in instructions for installing the application.\nLeave blank for N/A'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please type in instructions on how to use the application.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please type in the creadits for the project'
    },
    {
        license
    },
    {
        test
    },
    {
        questions
    }
    {
        github
    }
    {
        email
    }
  ])
  .then((answers) => {
    const readmeContents = generateRM(answers);

    fs.writeFile('README.md', readmeContents, (err) =>
      err ? console.log(err) : console.log('Successfully created README.mn!')
    );
  });