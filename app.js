const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter team managers name',
    },

    {
      type: 'input',
      name: 'id',
      message: 'Enter team managers employee ID',
    },

    {
      type: 'input',
      name: 'email',
      message: 'Enter team managers email address',
    },

    {
      type: 'input',
      name: 'officenum',
      message: 'Enter team managers office number'
    },

  ])
  .then(answers => console.log(answers))
//const fs = require('fs');
//const generatePage = require('./src/html-template.js');
//const pageHTML = generatePage(name);

//fs.writeFile('./index.html', generatePage(name), err => {
  //if (err) throw new Error(err);

  //console.log('Page complete!');
//});

  