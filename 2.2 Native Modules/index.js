const fs = require("fs");

fs.writeFile('message.txt', 'Hello from NodeJS', (err) => {
    if (err) throw err;
    console.log('The file hsa been saved.');
});

fs.readFile('', (err, data) => {
    if (err) throw err;
    console.log(data);
})