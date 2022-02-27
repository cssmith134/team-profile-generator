const dataArray = [
    {
        color: "red",
        number: 1
    },
    {
        color: "blue",
        number: 1
    },
    {
        color: "yellow",
        number: 2
    },
    {
        color: "green",
        number: 2
    },
    {
        color: "orange",
        number: 3
    }
]


const generateH1 = (data) => {
    return `
        <h1>${data.color}</h1>
    `
}

const generateH2 = (data) => {
    return `
        <h2>${data.color}</h2>
    `
}

const generateH3 = (data) => {
    return `
        <h3>${data.color}</h3>
    `
}


const generatePage = (dataArray) => {
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

    ${
        dataArray.map((data) => {
            if(data.number == 1) {
                return generateH1(data)
            }

            if(data.number == 2) {
                return generateH2(data)
            }

            if(data.number == 3) {
                return generateH3(data)
            }
        }).join("")
    }
     
    </body>
    </html>
    
    `
}




const output = generatePage(dataArray);

console.log(output)