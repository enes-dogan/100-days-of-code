const fs = require('fs');

function readFile() {
  fs.readFile('data.txt', function (error, data) {
    if (error) {
      console.log('An error occurred.');
    } else {
      console.log('File parsing done.');
      console.log(data.toString());
    }
  });

  console.log('Hi there.');
}

console.log('Hello world.');

readFile();
