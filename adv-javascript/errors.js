const fs = require('fs');

function readFile() {
  try {
    const fileData = fs.readFileSync('data.json');
  } catch (error) {
    console.log('Error occurred.');
    console.log(error.message);
  }
  console.log('End of function.');
}

readFile();

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

try {
  let result = divide(5, 0);
  console.log(result);
} catch (e) {
  console.log(e.message); // "Cannot divide by zero"
}
