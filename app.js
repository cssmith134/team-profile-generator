const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/html-template.js');

const promptManager = managerData => {

return inquirer
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
};

const promptTeam = teamData => {
console.log (`

================
Add Team Members
================

`);
//if (!teamData.teamMember) {
  //teamData.teamMember = [];
//}

return inquirer.prompt ([

  {
    type: 'confirm',
    name: 'engineer',
    message: 'Would you like to add an engineer to your team?',
    default: false
  },

  {
    type: 'input',
    name: 'engineerName',
    message: "Enter engineers name",
    when: ({engineer}) => engineer

  },

  {
    type: 'input',
    name: 'engineerid',
    message: 'Enter engineers ID',
    when: ({engineer}) => engineer
  },

  {
    type: 'input',
    name: 'engineerEmail',
    message: 'Enter engineers email',
    when: ({engineer}) => engineer
  },

  {
    type: 'input',
    name: 'engineerGithub',
    message: 'Enter engineers Github username',
    when: ({engineer}) => engineer
  },



  {
    type: 'confirm',
    name: 'intern',
    message: 'Would you like to add an intern to your team?',
    default: false
  },

  {
    type: 'input',
    name: 'internName',
    message: 'Enter interns name',
    when: ({intern}) => intern,
  },

  {
    type: 'input',
    name: 'internId',
    message: 'Enter interns ID',
    when: ({intern}) => intern,
  },

  {
    type: 'input',
    name: 'internEmail',
    message: 'Enter interns Email',
    when: ({intern}) => intern,
  },

  {
    type: 'input',
    name: 'internSchool',
    message: 'Enter interns school',
    when: ({intern}) => intern,
  }


])
//.then(promptData => {
 // teamData.teamMember.push(promptData);
  //if (promptData.confirmAddTeam) {
   // return promptTeam(teamData) 
 // } else {
   // return teamData;
 // }
//})

}

promptManager()
  .then (managerData => {
   const manHTML = generatePage(managerData);
  })
  .then(promptTeam)
  .then( teamData => {
      const pageHTML = generatePage( teamData);

    fs.writeFile('./index.html', pageHTML, err => {
     if (err) throw new Error(err);

      console.log('Page created! Check out index.html in this directory to see it!');
     });

     fs.copyFile('./src/style.css', 'style.css', err => {
       if (err) {
         console.log(err);
         return;
       }
       console.log("styles added successfully!")
     })

  });
  
  
//
//
//const pageHTML = generatePage(name);

//fs.writeFile('./index.html', generatePage(name), err => {
  //if (err) throw new Error(err);

  //console.log('Page complete!');
//});

  