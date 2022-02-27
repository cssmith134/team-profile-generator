const Choices = require("inquirer/lib/objects/choices");



const generateManager = managerData => {
    return `
      <ul class="list-unstyled">
         <li>Employee Name: ${managerData.name}</li>
         <li>Employee ID: ${managerData.id}</li>
         <li>Email: ${managerData.email}</li>
         <li>Office Number:${managerData.officeNumber}</i>
     </ul>`
 }

 const generateEngineer = engineerData => {
     return `
     
     <ul class="list-unstyled">
     <li>Employee Name: ${engineerData.engineerName}</li>
     <li>Employee ID: ${engineerData.engineerid}</li>
     <li>Email: ${engineerData.engineerEmail}</li>
     <li>Office Number:${engineerData.engineerGithub}</i>
 </ul>
     
     
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
    <div class="jumbotron bg-warning">
        <h1> My Team </h1>

    </div>
    </div>
  
    <div>

       ${generateManager(teamArray[0])}

    </div>


    <div>

    ${generateEngineer(teamArray[1])}


    ${
        teamArray.map((engineerData) => {
            if(engineerData.name == 'engineer') {
                return generateEngineer(engineerData)
            }
        }).join("")
    }

    </div>
     
    </body>
    </html>
    `;
  
};

module.exports = generatePage;




