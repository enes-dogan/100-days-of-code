const fahrenheitFormElement = document.querySelector('#f-to-c form');
const fahrenheitInputElement = document.querySelector('#f-to-c input');

const celsiusFormElement = document.querySelector('#c-to-f form');
const celsiusInputElement = document.querySelector('#c-to-f input');

fahrenheitFormElement.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputElementValue = fahrenheitInputElement.value;
  console.log(((inputElementValue - 32) * (5 / 9)).toFixed(2));
  const result = ((inputElementValue - 32) * (5 / 9)).toFixed(2);
  const resultElement = document.getElementById('f-result');
  resultElement.textContent = `
  ${inputElementValue} Fahrenheit is ${result} Celsius
  `;
});

celsiusFormElement.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputElementValue = celsiusInputElement.value;
  console.log((inputElementValue * (9 / 5) + 32).toFixed(2));
  const result = (inputElementValue * (9 / 5) + 32).toFixed(2);
  const resultElement = document.getElementById('c-result');
  resultElement.textContent = `
  ${inputElementValue} Celsius is ${result} Fahrenheit
  `;
});