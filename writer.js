const fs = require('fs');

fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err.message);
    }

    console.log(data);
});

const writeData = (content) => {
    fs.appendFile('./example.txt', content, (err) => {
        if (err) {
            console.log(err.message);
        }

        console.log("File write successful")
    });
}

writeData("\nnew line being added 3")