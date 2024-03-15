const fs = require('fs/promises');

function readFile() {
  fs.readFile('data.txt')
    .then(function (data) {
      console.log('File parsing done.');
      console.log(data.toString());
    })
    .then(function () {
      console.log('Hi there.'); // executes only after async readFile() is done
    })
    .catch(function (error) {
      console.log(error);
    });

  console.log('Executes asap.'); // don't wait while fs.readFile() is working
}

console.log('Hello world.');

readFile();
