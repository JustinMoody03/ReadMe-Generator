// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs").promises
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your application?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions of your application?"
    },
    {
        type: "input",
        name: "usage",
        message: "What are the usage instructions of your application?"
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines of your application?"
    },
    {
        type: "input",
        name: "tests",
        message: "What are the test instructions of your application?"
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
fs.writeFile(path.join(__dirname, fileName), generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (answers) {
            console.log(answers)
            writeToFile("ReadME.md", answers)
        })
}

// Function call to initialize app
init();
