const fs = require("fs");
const inquire = require("inquirer");

inquire
//prompts to input all relevant data
    .prompt([
        {
            type:"input",
            name:"title",
            message:"What is the title of your project?",
            validate: (input) => !!input || "Cannot be empty",
        },
        {
            type:"list",
            name:"license",
            message:"Choose what license to use.",
            choices:["MIT", "BSD", "CPL"]
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
        //function to write README file
        fs.writeFile("generatedReadMe.md", `
# ${data.title}

## License
* ${data.license}

## Description
    ${data.description}
        
## Table-Of-Contents

* [License](#License)
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
        
        
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