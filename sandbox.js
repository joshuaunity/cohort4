const { add, subtract } = require('./utils/calculate');
const fs = require('fs');

console.log(add(5, 3));
console.log(subtract(7, 5));


fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

const content = 'Hello, this is some content to write to the file.';

fs.writeFile('example.txt', content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File has been written successfully.');
  }
});


const content2 = '\nThis is additional content to append to the file.';

// Appending to the file asynchronously
fs.appendFile('example.txt', content2, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
  } else {
    console.log('Content appended successfully.');
  }
});