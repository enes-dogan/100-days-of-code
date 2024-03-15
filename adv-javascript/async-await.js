const fs = require('fs/promises');

async function readFile() {
  try {
    const data = await fs.readFile('data.txt');
    console.log(data.toString());
    console.log('File parsing done.');
  } catch (error) {
    console.log(error);
  }

  console.log('Hi there.');
}

readFile();

console.log('Hello world.');
