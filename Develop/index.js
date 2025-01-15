// Import required packages
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// Questions for user input
const questions = [
  { type: 'input', name: 'github', message: 'What is your GitHub username?' },
  { type: 'input', name: 'email', message: 'What is your email address?' },
  { type: 'input', name: 'title', message: "What is your project's name?" },
  { type: 'input', name: 'description', message: 'Please write a short description of your project:' },
  { 
    type: 'list', 
    name: 'license', 
    message: 'What kind of license should your project have?', 
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'] 
  },
  { 
    type: 'input', 
    name: 'installation', 
    message: 'What command should be run to install dependencies?', 
    default: 'npm install' 
  },
  { 
    type: 'input', 
    name: 'tests', 
    message: 'What command should be run to run tests?', 
    default: 'npm test' 
  },
  { 
    type: 'input', 
    name: 'usage', 
    message: 'What does the user need to know about using the repo?' 
  },
  { 
    type: 'input', 
    name: 'contributing', 
    message: 'What does the user need to know about contributing to the repo?' 
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md created successfully!')
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  });
}

// Initialize app
init();
