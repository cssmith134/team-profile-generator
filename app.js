const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/html-template.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArray = [];



const promptManager = () => {

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
      name: 'officeNumber',
      message: 'Enter team managers office number'
    },
  ])
  .then((managerData) => {
    const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
    teamArray.push(manager)

    promptTeam();
  })

};

const promptEngineer = () => {


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
])

  .then((engineerData) => {

    const engineer = new Engineer(engineerData.engineerName, engineerData.engineerid, engineerData.engineerEmail, engineerData.engineerGithub)
    teamArray.push(engineer);


    promptTeam()

  })

};

  const promptIntern = () => {

  inquirer.prompt([

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

  .then((internData) => {

    const intern = new Intern(internData.internName, internData.internId, internData.internEmail, internData.internSchool)
    teamArray.push(intern)

      promptTeam()
  })

};

const promptTeam = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choices',
      message: 'Would you like to add a Engineer, add a Intern, or exit?',
      choices: [
          'Engineer',
          'Intern',
          'Exit'
      ]
    }
  ])

  .then((choices) =>{

    

    if (choices.choices == "Engineer") {
       promptEngineer()
       
    } else if (choices.choices == 'Intern') {
       promptIntern()
       
    } else {
     htmlPage()
    }
    

  })

};

  
 
const htmlPage = () => {
      const pageHTML = generatePage(teamArray);

    fs.writeFile('./dist/index.html', pageHTML, err => {
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

  };
  



promptManager()
  
//
//
//const pageHTML = generatePage(name);

//fs.writeFile('./index.html', generatePage(name), err => {
  //if (err) throw new Error(err);

  //console.log('Page complete!');
//});

  