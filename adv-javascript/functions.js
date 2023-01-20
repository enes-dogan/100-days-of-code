// Default arguments in functions
function greetUser(greetingPrefix, name = 'user') {
  console.log(greetingPrefix + ' ' + name + '!');
}

greetUser('hi', 'enes');
greetUser('hello');

// Rest Parameters && Spead Operator

function sumUp(num1, num2, num3) {
  return num1 + num2 + num3;
}
// Limitation with this functions is we can -actually must-
// accept 3 parameters and not very flexible
console.log(sumUp(1, 2)); // NaN  (undefined + integer)

//Array method

function sumUp2(numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }
  return result;
}

console.log(sumUp2([1, 6, 12, 4])); // 23

// Rest Parameters

function sumUp3(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }
  return result;
}

console.log(sumUp3(1, 8, 15, 23)); // 47

//Also can be used on array to turn it individual lists of item

function sumUp4(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }
  return result;
}

const inputNumbers = [1, 6, 12, 4];
console.log(sumUp4(...inputNumbers)); // 23

// Template literals
function greetUser2(greetingPrefix, name = 'user') {
  console.log(`${greetingPrefix} ${name}!`);
}

greetUser('hi', 'enes');
greetUser('hello');
