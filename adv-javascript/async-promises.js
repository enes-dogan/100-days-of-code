// .then()
const fs = require('fs/promises');

function readFile() {
  fs.readFile('data.txt')
    .then(function (data) {
      console.log('File parsing done.');
      console.log(data.toString());
      // return anotherAsyncOperation;
    })
    .then(function () {})
    .catch(function (error) {
      console.log(error);
    });

  console.log('Hi there.');
}

console.log('Hello world.');

readFile();
