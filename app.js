const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.length)

const [name] = profileDataArgs;


const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
     
    </body>
    </html>
    `;
  };

  fs.writeFile('index.html', generatePage(name), err => {
    if (err) throw err;

    console.log('Page complete!')
  })