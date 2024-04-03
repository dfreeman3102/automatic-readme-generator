const fs = require("fs");
const inquire = require("inquirer");

inquire
    .prompt([
        {
            type:"input",
            name:"title",
            message:"What is the title of your project?",
            validate: (input) => !!input || "Cannot be empty",
        },
        {
            type:"input",
            name:"description",
            message:"What is the description of your project?",
            validate: (input) => !!input || "Cannot be empty",
        },
        {
            type:"input",
            name:"install",
            message:"How do you install your project?",
            validate: (input) => !!input || "Cannot be empty",
        },
        {
            type:"input",
            name:"usage",
            message:"What is the usage information of your project?",
            validate: (input) => !!input || "Cannot be empty",
        },
        {
            type:"input",
            name:"contributing",
            message:"What are your guidelines to contribute to your project?",
            validate: (input) => !!input || "Cannot be empty",
        },
        {
            type:"input",
            name:"test",
            message:"What are the tests of your project?",
            validate: (input) => !!input || "Cannot be empty",
        },
        {
            type:"input",
            name:"github",
            message:"What is your GitHub Url?",
            validate: (input) => !!input || "Cannot be empty",
        },
        {
            type:"input",
            name:"email",
            message:"What is your email?",
            validate: (input) => !!input || "Cannot be empty",
        },
    ])
    .then((data) => {
        // TODO: Create a function to write README file
        fs.writeFile("generatedReadMe.md", `
# ${data.title}


## Description
    ${data.description}
        
## Table-Of-Contents
        
* [Description](https://github.com/dfreeman3102/automatic-readme-generator#Description)
* [Installation](https://github.com/dfreeman3102/automatic-readme-generator#Installation)
* [Usage](https://github.com/dfreeman3102/automatic-readme-generator#Usage)
* [Contributing](https://github.com/dfreeman3102/automatic-readme-generator#Contributing)
* [Tests](https://github.com/dfreeman3102/automatic-readme-generator#Tests)
        
        
## Installation
    ${data.install}
## Usage
    ${data.usage}
## Contributing
    ${data.contributing}
## Tests
    ${data.tests}
## Questions
*${data.github}
*${data.email}
`,
 (err) =>
        err ? console.log(err) : console.log("Success!")
        );
    })

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();