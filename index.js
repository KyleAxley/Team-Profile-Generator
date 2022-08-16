//import for inquirer
const { prompt } = require("inquirer");
const fs = require("fs");
const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");

const officeTeam = [];

const initialQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter the manager's name:",
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
    message: " Please enter the manager's Id",
    validate: (idInput) => {
      if (idInput && !idInput.match(/[^0-9]/gi)) {
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
    message: " Please enter the manager's email",
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
  {
    type: "input",
    name: "officeNumber",
    message: " What is the manager's office number?",
    validate: (officeNumberInput) => {
      if (officeNumberInput && !officeNumberInput.match(/[^0-9]/gi)) {
        return true;
      } else {
        console.log(" That is an invalid entry for office number");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "role",
    message: " What is the employee's role being added to the team?",
    choices: ["Engineer", "Intern"],
  },
  {
    type: "input",
    name: "engName",
    message: "What is this engineer's name?",
    validate: (engNameInput) => {
      if (engNameInput && !engNameInput.match(/[^a-zA-Z]/gi)) {
        return true;
      } else {
        console.log(" Please enter a valid name!");
        return false;
      }
    },
    when: ({ role }) => {
      if (role === "Engineer") {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "engId",
    message: "What is this engineer's id?",
    validate: (engIdInput) => {
      if (engIdInput && !engIdInput.match(/[^0-9]/gi)) {
        return true;
      } else {
        console.log(" That is not a valid id!");
        return false;
      }
    },
    when: ({ role }) => {
      if (role === "Engineer") {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "engEmail",
    message: "What is this Engineer's email?",
    validate: (engEmailInput) => {
      if (
        engEmailInput &&
        engEmailInput.match(/\w+([\.-]?\w+)*\@\w+(\.-]?\w+)*(\.\w{2,3})+$/g)
      ) {
        return true;
      } else {
        console.log(" That is not a valid email entry!");
        return false;
      }
    },
    when: ({ role }) => {
      if (role === "Engineer") {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is this engineer's github?",
    validate: (githubInput) => {
      if (
        githubInput &&
        !githubInput.match(/\w+([\.-]?\w+)*\@\w+(\.-]?\w+)*(\.\w{2,3})+$/g)
      ) {
        console.log(" Please enter a valid name");
        return true;
      } else {
        return false;
      }
    },
    when: ({ role }) => {
      if (role === "Engineer") {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "intName",
    message: "What is this intern's name?",
    validate: (intNameInput) => {
      if (intNameInput && !intNameInput.match(/[^a-zA-Z]/gi)) {
        console.log(" Please enter a valid name");
        return true;
      } else {
        return false;
      }
    },
    when: ({ role }) => {
      if (role === "Intern") {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "intId",
    message: "What is this int's id?",
    validate: (intIdInput) => {
      if (intIdInput && !intIdInput.match(/[^0-9]/gi)) {
        console.log(" Please enter a valid id");
        return true;
      } else {
        return false;
      }
    },
    when: ({ role }) => {
      if (role === "Intern") {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "intEmail",
    message: "What is this Intern's email?",
    validate: (intEmailInput) => {
      if (
        intEmailInput &&
        intEmailInput.match(/\w+([\.-]?\w+)*\@\w+(\.-]?\w+)*(\.\w{2,3})+$/g)
      ) {
        return true;
      } else {
        console.log(" That is not a valid email entry!");
        return false;
      }
    },
    when: ({ role }) => {
      if (role === "Intern") {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "school",
    message: "Where did the intern go to school?",
    validate: (schoolInput) => {
      if (schoolInput && !schoolInput.match(/[^a-zA-Z]/gi)) {
        console.log(" Please enter a valid name");
        return true;
      } else {
        return false;
      }
    },
    when: ({ role }) => {
      if (role === "Intern") {
        return true;
      } else {
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
