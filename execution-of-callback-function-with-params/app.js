const activeGoalElement = document.querySelector('#active-goal h2');
const goalListElement = document.querySelector('#all-goals ul');

const goals = [
  {
    id: 'g1',
    text: 'Learn all about JavaScript!',
  },
  {
    id: 'g2',
    text: 'Understand JavaScript function execution.',
  },
];

function setAsActiveHandler(goalId, event) {
    console.log(event.target); // event param comes from .addEventListener()
  const selectedGoal = goals.find((g) => g.id === goalId);
  activeGoalElement.textContent = selectedGoal.text;
}

function init() {
  for (const goal of goals) {
    const goalElement = document.createElement('li');
    goalElement.innerHTML = `
        <span>${goal.text}</span>
        <button>Set as Active Goal</button>
        `;
    goalElement
      .querySelector('button')
    //   .addEventListener('click', () => {setAsActiveHandler(goal.id);});

      //OR Using .bind()
      .addEventListener('click', setAsActiveHandler.bind(null, goal.id));
    //first argument `this` keyword refer to inside the function (null)
    goalListElement.append(goalElement);
  }
}
// If the function we are pointing with `.bind()` gets a default argument,
// for the .addEventListener we always get the event object that decribes the
// event that occurs, that default argument woll fed as a last argument parameter
// line 16 -"event argument only passes if we use `.bind()` method"-
init();
