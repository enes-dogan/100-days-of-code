const num = 25; // value itself is stored

const hobbies = ['sports', 'cooking']; // a pointer to the array is stored

hobbies.push('coding'); // address of the array doesn't change
// hence we can push new values into constant and thats valid

console.log(hobbies); // [ 'sports', 'cooking', 'coding' ]

// Primitive values: numbers, strings, booleans & more (undefined etc.)
// Reference values: Objects (arrays and functions are also objects)

const age = 25; // value itself is stored

function getAdultYears(p) {
  p = p - 18;
  return p;
}

console.log(age); // 25
console.log(getAdultYears(age)); //7
console.log(age); // 25
//value did not change because its primitive value

const person = { age: 24 };

function getAdultYears2(human) {
  return human.age - 18;
}

console.log(person); // {age: 24}
console.log(getAdultYears2(person)); // 6
console.log(person); // {age: 24}
//Object still intact and not changed because we take the value inside object
// and made a calculation with that and return a result

const alien = { age: 250 };

function getAdultYears3(p) {
  //   p.age = p.age - 18;
  //   return p.age;
  return (p.age -= 18);
}

console.log(alien); // {age: 250}
console.log(getAdultYears3(alien)); // 232
console.log(alien); // {age: 232}
// In this case the object itself and the value it holds changed because
// we made a deduction on the property of the object itself

console.log(alien); // {age: 232}
console.log(getAdultYears3({ ...alien })); // 214
console.log(alien); // {age: 232}

// With "Spead Operator"(...) we can copy the object and use the copy of it
// if we do that original object is untouched
