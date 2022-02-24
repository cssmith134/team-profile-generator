module.exports = templateData => {
const {engineerName, engineerid, engineerEmail, engineerGithub} = templateData;
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

     
    <div class="card-body">
    <ul class="list-unstyled">
        <li>Employee Name: ${engineerName}</li?
        <li>Employee ID: ${engineerid}</li>
        <li>Email: <a href="mailto:grant@gmail.com">${engineerEmail}</a></li>
        <li>GitHub Username: <a href="https://github.com/nosremetnarg" target="_blank">${engineerGithub}</a></i>
    </u>
</div>
     
    </body>
    </html>
    `;
  
};
  

  