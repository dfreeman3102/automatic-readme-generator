const fs = requrie("fs");
const inquire = require("inquirer");

inquire
    .prompt([
        {
            type:"input",
            name:"title",
            message:"What is the title of your project?"
        },
        {
            type:"input",
            name:"description",
            message:"What is the description of your project?"
        },
        {
            type:"input",
            name:"install",
            message:"How do you install your project?"
        },
        {
            type:"input",
            name:"usage",
            message:"What is the usage information of your project?"
        },
        {
            type:"input",
            name:"contributing",
            message:"What are your guidelines to contribute to your project?"
        },
        {
            type:"input",
            name:"test",
            message:"What are the tests of your project?"
        },

    ])
    .then((data) => {
        // TODO: Create a function to write README file
        function writeToFile(fileName, data) {}

    })

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();