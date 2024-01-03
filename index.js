import inquirer from 'inquirer';
import qr from 'qr-image'
import fs from 'fs';

inquirer
  .prompt([
    {
      message: "put ur URL",
      name: "URL"
    },
  ])
  .then((answers) => {
    //code to create the qr code
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr.png'));

    //this code is a create a log based in the user's data he put in the code
    fs.writeFile('log.txt', `this qr has been created using : ${url}`, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("something went wrong")
    } else {
        console.log("L lol")
    }
  });


