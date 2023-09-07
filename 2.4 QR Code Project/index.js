import inquirer from 'inquirer';
import qr from 'qr-image';
import fs, { writeFile } from 'fs';

inquirer
    .prompt([
        {
            message: 'Type in you URL: ',
            name: "URL",
        }])
    .then((answers) => {
        const url = answers.URL;
        console.log(url);
        var qr_image = qr.image(url);
        qr_image.pipe(fs.createWriteStream('qr_image.png'));

        fs.writeFile('URL.txt', url, (err) => {
            if (err) throw err;
            console.log('The qr-code has been created.');
        })

    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
