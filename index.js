const fs = require("fs");
const inquire = require("inquirer");
const renderLicense = require("./utils/generateMarkdown.js")
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
            choices:["MIT", "BSD", "CDDL"]
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
        // Generate license badge
        const licenseBadge = renderLicense(data.license);
    
        // Generate README content
        const readmeContent = `
# ${data.title}
    
## License
    ${licenseBadge}
    
## Description
    
    ${data.description}
    
## Table of Contents
    
    - [License](#license)
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
## Installation
    
    ${data.install}
    
## Usage
    
    ${data.usage}
    
## Contributing
    
    ${data.contributing}
     
## Tests
    
    ${data.test}
    
## Questions
    
    For questions about the project, please contact [${data.github}](${data.github}) via GitHub or email ${data.email}.
    `;
    
        // Write README file
        fs.writeFile("generatedReadMe.md", readmeContent, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("Success!");
          }
        });
      });