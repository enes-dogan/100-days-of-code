// .async await
const fs = require('fs/promises');
// try catch only usable in async await method not with .then()
// or callback function passed as a parameter to readFile
async function readFile() {
  try {
    const data = await fs.readFile('data.txt');
    console.log('File parsing done.');
    console.log(data.toString());
  } catch (error) {
    console.log(error);
  }

  console.log('Hi there.');
}

console.log('Hello world.');

readFile();
