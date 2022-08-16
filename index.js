//import for inquirer
const {prompt} = require("inquirer");
const fs = require("fs");
const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");

const officeTeam = [];

const initialQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter the employee's name:",
    validate: (nameInput) => {
      if (nameInput && !nameInput.match(/[^a-zA-Z]/gi)) {
        return true;
      } else {
        console.log(" Please enter a valid employee name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: " Please enter the employee's Id",
    validate: (idInput) => {
      if (idInput && idInput.match(/[^0-9]/gi)) {
        return true;
      } else {
        console.log(" That is not a valid id!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: " Please enter the employee's email",
    validate: (emailInput) => {
      if (
        emailInput &&
        emailInput.match(/\w+([\.-]?\w+)*\@\w+(\.-]?\w+)*(\.\w{2,3})+$/g)
      ) {
        return true;
      } else {
        console.log(" That is not a valid email entry!");
        return false;
      }
    },
  },

];

async function init() {
    const answers = await prompt(initialQuestions);
    console.log(answers);
}

init();