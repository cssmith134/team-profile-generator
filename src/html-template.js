const Choices = require("inquirer/lib/objects/choices");



const generateManager = managerData => {
    return `
    <div class = "col-sm-6 col-md-4 col-lg-3 col-12">
    <div class = "card">
    <div class = "card-header bg-primary">
    <h4 class = "text-white text-center"> ${managerData.name}</h4>
    </div>

    <div class = "card-body">
      <ul class="list-unstyled text-center">
         <li>Employee ID: ${managerData.id}</li>
         <li>Email: <a href="mailto:cssmith134@gmail.com"> ${managerData.email}</a></li>
         <li>Office Number:${managerData.officeNumber}</i>
     </ul>
     </div>
     </div>
     </div>
     
     
     `
 }
 const generateEngineer = engineerData => {
     return `
     <div class = "col-sm-6 col-md-4 col-lg-3 col-12">
     <div class = "card">
     <div class = "card-header bg-primary">
     <h4 class = "text-white text-center"> ${engineerData.name}</h4>
     </div>
     <ul class="list-unstyled text-center">
   
     <li>Engineer ID: ${engineerData.id}</li>
     <li>Engineer Email: <a href="mailto:cssmith134@gmail.com"> ${engineerData.email}</a></li>
     <li>GitHub Username: <a href="https://github.com/${engineerData.github}">Github Account</a></i>
    </ul>
    </div>
    </div>
    </div>
     `
 }
 const generateIntern = internData => {
    return `
  
    <div class = "col-sm-6 col-md-4 col-lg-3 col-12">
    <div class = "card">
    <div class = "card-header bg-primary">
    <h4 class = "text-white text-center"> ${internData.name}</h4>
    </div>
    <ul class="list-unstyled text-center">
  
    <li>Intern Name: ${internData.name}</li>
    <li>Intern ID: ${internData.id}</li>
    <li>Intern Email: <a href="mailto:cssmith134@gmail.com"> ${internData.email}</a></li>
    <li>Intern School:${internData.school}</li>
</ul>
    </div>
    </div>
    </div>
    `
}
const generatePage = teamArray => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    </head>

    <body>

    <div class="header">
    <div class="jumbotron bg-danger">
        <h1 class="display-4 text-white text-center"> My Team </h1>

    </div>
    </div>
  
    <div class = "row">
 

    <div>

    ${generateManager(teamArray[0])}

    </div>


    <div>

    ${generateEngineer(teamArray[1])}

    </div>

    <div>

    ${generateIntern(teamArray[2])}

    </div>

   
    </div>
   
     
    </body>
    </html>
    `;
  
};

module.exports = generatePage;




