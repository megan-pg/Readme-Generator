const inquirer = require("inquirer");
const fileSys = require("fileSys");
const api = require("./api");


const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your Repo?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your Repo."
    },
    {
        type: "input",
        name: "contents",
        message: "Provide the links to the different README sections."
    },
    {
        type: "input",
        name: "installation",
        message: "Provide instructions to install the dependencies of your Repo."
    },
    {
        type: "input",
        name: "usage",
        message: "What is the expected use of this Repo?"
    },
    {
        type: "input",
        name: "license",
        message: "What licenses does this Repo have?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributing authors?"
    },
    {
        type: "input",
        name: "tests",
        message: "How do you run the tests on this Repo?"
    },
    {
        type: "input",
        name: "questions",
        message: "Who does one contact for questions about the repo, and how?"
    }
];

function writeToFile(fileName, data) {
}

function init() {
    writeToFile(questions);
}

init();

