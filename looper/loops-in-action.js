//? ---------------------------------------------------------------------------------
const userNumberInput = document.getElementById('user-number');
const calculateSumButton =
  document.querySelector('.control ').nextElementSibling;
const outputParagraph = document.getElementById('calculated-sum');

calculateSumButton.addEventListener('click', calculateSum);

function calculateSum(event) {
  const userNumber = +userNumberInput.value;

  let sum = 0;
  if (userNumber < 0 || userNumber == 0) {
    alert('choose a number bigger than zero');
  } else if (userNumber == 1) {
    outputParagraph.textContent = 1;
    outputParagraph.style.display = 'block';
  } else {
    for (let i = 0; i <= userNumber; i++) {
      sum += i;
    }
    outputParagraph.textContent = sum;
    outputParagraph.style.display = 'block';
  }
}

//? ---------------------------------------------------------------------------------
const highlightButton = document.querySelector('#highlight-links button');
const links = document.querySelectorAll('#highlight-links a');

function highlightLinks(event) {
  for (const link of links) {
    link.classList.add('highlight');
  }
}

highlightButton.addEventListener('click', highlightLinks);

//? ---------------------------------------------------------------------------------
const displayUserDataButton = document.querySelector('#user-data button');
const outputUserData = document.querySelector('#output-user-data');

const user = {
  firstName: 'Enes',
  surName: 'Dogan',
  age: 24,
};

displayUserDataButton.addEventListener('click', showUserInfo);

function showUserInfo(event) {
  for (const key in user) {
    const list = document.createElement('li');
    list.textContent = `${key.toUpperCase()}: ${user[key]}`;
    outputUserData.append(list);
  }
}
//? ---------------------------------------------------------------------------------
const diceInput = document.getElementById('user-target-number');
const diceRollButton = document.querySelector('#statistics button');
const diceRollsList = document.getElementById('dice-rolls');
const totalRoll = document.getElementById('output-total-rolls');
const targetNumber = document.getElementById('output-target-number');

diceRollButton.addEventListener('click', outPutDiceRolls);

function rollDice() {
  const result = Math.floor(Math.random() * 6) + 1;
  return result;
}

function outPutDiceRolls(event) {
  const diceInputValue = +diceInput.value;
  if (diceInputValue <= 0 || diceInputValue > 6) {
    alert('choose number between 1 and 6');
  } else {
    let result = 0;
    let counter = 0;
    diceRollsList.textContent = '';
    while (result != diceInputValue) {
      result = rollDice();
      console.log(result);
      const listElement = document.createElement('li');
      listElement.innerHTML = `You rolled <strong>${result}</strong>.`;
      diceRollsList.append(listElement);
      counter++;
    }
    totalRoll.textContent = counter;
    targetNumber.textContent = diceInputValue;
  }
}

//* 20/06/23