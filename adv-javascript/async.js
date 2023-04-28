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

  console.log('Hi there.'); // without async this code doesn't wait.
}
readFile();

console.log('Test.'); // without async this code doesn't wait.

