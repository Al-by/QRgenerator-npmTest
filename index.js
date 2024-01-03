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
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr.png'));

    console.log("your qr is ready to use");
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("something went wrong")
    } else {
        console.log("L lol")
    }
  });


