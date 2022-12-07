// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ Title, Description, Installation, Usage, Contributing, Test, License, username, email }) =>
`# ${Title}
* created by ${username}

# Table of Contents
1. [Description](#1-description)
2. [Installation](#2-installation)
3. [Usage](#3-usage)
4. [Contributing](#4-contributing) 
5. [Test](#5-test)
6. [License](#5-license)
7. [Questions](#6-questions)


## 1. Description
This application can be described as: ${Description}. 

## 2. Installation: 
In order to intall this application please follow these instructions: ${Installation}. 

## 3. Usage: 
The intended useage of this application is to: ${Usage}.

## 4. Contributing: 
This application was devleoped by the works of: ${Contributing}.

## Test 
This application can be tested by ${Test}

## 5. License 
This application uses the ${License} license. 

## 6. Questions
Please contact the developer(s) at ${username}@github.com or email the developer(s) at ${email}.
`;

const licenseArray = ["MIT","Apache","GPL","BSD",]

// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your application?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'How would you describe your application?',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'What are the instructions to install your application?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'What is the intended use of your application?',
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'What developers and sources would you like to credit in your application development?',
    },
    {
      type: 'input',
      name: 'Test',
      message: 'What are your testing instructions for your application?',
    },
    {
      type: 'list',
      name: 'License',
      message: 'What license would you like to use?',
      choices: licenseArray,
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',

    },
  ])
  .then((answers) => {
    const READMEPageContent = generateREADME(answers);

    fs.writeFile('README.md', READMEPageContent, (err) =>
      err ? console.log(err) : console.log('Thank you for your content. We have successfully created README.md for your application!')
    );
  });

  function renderLicenseBadge(license) {
    if (license === "no license used"){
      return " ";
    } else if (license ==="MIT"){
      return `[![License: ${license}](https://img.shields.io/badge/license-${license}-blue.svg)`; 
    } else if (license ==="Apache"){
      return `[![License: ${license}](https://img.shields.io/badge/license-${license}-blue.svg)`;
    } else if (license ==="GPL"){
      return `[![License: ${license}](https://img.shields.io/badge/license-${license}-blue.svg)`;
    } else if (license ==="BSD"){
    return `[![License: ${license}](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === "none"){
      return " ";
  } else if (license === "MIT"){
  return "(https://opensource.org/licenses/MIT)";
  }else if (license === "Apache"){
  return "(https://opensource.org/licenses/Apache-2.0)";
  }else if (license === "GPL"){
  return "(https://www.gnu.org/licenses/gpl-3.0)";
  }else if (license === "BSD"){
  return "(https://opensource.org/licenses/BSD-3-Clause)";
  }
}

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== `None`){
      return (
        ` #License 
        This proejct uses the ${license} license`
      )
    }
    return ``
  }

