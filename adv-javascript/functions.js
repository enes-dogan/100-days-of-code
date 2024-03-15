// Default arguments in functions
function greetUser(greetingPrefix, name = 'user') {
  console.log(greetingPrefix + ' ' + name + '!');
}

greetUser('hi', 'enes'); // hi enes!
greetUser('hello'); // hello user!

// Rest Parameters && Spead Operator

function sumUp(num1, num2, num3) {
  return num1 + num2 + num3;
}
// Limitation with this functions is we must accept 3 parameters and not very flexible
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

const myFunc1 = function () {
  console.log('myFunc1');
};

myFunc1();

function myFunc2() {
  console.log('myFunc2');
}

myFunc2();

const myFunc3 = arg => {
  console.log(arg);
};

myFunc3('myFunc3');

const multiply = number => {
  return number * 2;
};

console.log(multiply(4));

const multiply2 = number => number * 4; //return in one line

console.log(multiply2(3));

const divide = (number, number2) => number / number2;

console.log(divide(9, 3));

//ES6

class Human {
  constructor() {
    this.age = 24;
  }

  printAge() {
    console.log(this.age);
  }
}

class Person extends Human {
  constructor() {
    super(); // super(); because class extends
    this.name = 'Enes';
    this.age = 'using method from other class but with different data';
  }

  printName() {
    console.log(this.name);
  }
}

const person = new Person();
const human = new Human();

person.printName();
person.printAge();
human.printAge();

//ES7

class Human2 {
  age = 2023;

  printAge = () => {
    console.log(this.age);
  };
}

class Person2 extends Human2 {
  name = 'ES7';
  age = 'Newest syntax';

  printName = () => {
    console.log(this.name);
  };
}

const person2 = new Person2();
const human2 = new Human2();

person2.printName();
person2.printAge();
human2.printAge();

//Spread

const numbers = [1, 2, 3];

console.log(numbers); // [1, 2, 3]

const newArray = [...numbers, 4];

console.log(newArray); // [1, 2, 3, 4]

// Without spread operator

const newArray2 = [numbers, 4];

console.log(newArray2); // [[1, 2, 3], 4]

const homoSapien = {
  name: 'John',
  surname: 'Doe',
};

console.log(homoSapien); // {name: 'John', surname: 'Doe'}

const newSapien = {
  ...homoSapien,
  age: 35,
};

console.log(newSapien); // {name: 'John', surname: 'Doe', age: 35}

const newSapien2 = {
  homoSapien,
  age: 35,
};

console.log(newSapien2); // {homoSapien: {name: 'John', surname: 'Doe'}, age: 35}

// Rest

const filter = (...params) => {
  return params.filter(el => el === 1); // with arrow function
};

console.log(filter(1, 2, 3));

const filter2 = (...params) => {
  return params.filter(function element(el) {
    return el === 2; // without arrow function
  });
};

console.log(filter2(1, 2, 3));

// Destructuring

function factor(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factor(num - 1);
  }
}

console.log(factor(6));

function factorial(num) {
  if (num < 0) {
    return -1; // factorial of negative numbers is undefined
  } else if (num == 0) {
    return 1; // factorial of 0 is 1
  } else {
    return num * factorial(num - 1); // recursive call to calculate factorial
  }
}

console.log(factorial(5)); // prints 120

function factorial2(num) {
  if (num < 0) {
    return -1; // factorial of negative numbers is undefined
  } else if (num == 0) {
    return 1; // factorial of 0 is 1
  } else {
    var result = 1;
    for (var i = num; i > 0; i--) {
      result *= i; // multiply the result by the current number in each iteration
    }
    return result; // return the final result
  }
}

console.log(factorial2(4)); // prints 120
