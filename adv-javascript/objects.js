const job = {
  title: 'Developer',
  location: 'New York',
  salary: 50000,
};

console.log(job);

console.log(new Date().toISOString());

const job2 = {
  title: 'Cook',
  location: 'Munic',
  salary: 35000,
};

console.log(job2);
//Class || Constructure
class Job {
  constructor(name, place, income) {
    this.title = name;
    this.location = place;
    this.salary = income;
  }

  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`
    );
  }
}

const job3 = new Job('developer', 'india', '100$');

console.log(job3);

job3.describe();

//Object && Array Destructuring

//ARRAY destructuring
const userInput = ['Hello', 'World'];

const firstInput = userInput[0];
const secondInput = userInput[1];
// OR a quicker way
const [ilkGiris, ikinciGiris] = userInput;

console.log(firstInput);
/* SAME AS */ console.log(ilkGiris);
console.log(secondInput);
/* SAME AS */ console.log(ikinciGiris);

//OBJECT destructuring
const jobb = {
  title: 'Developer',
  location: 'Amsterdam',
};

const isAdi = jobb.title;
const isYeri = jobb.location;
// OR a quicker way
const { title, location } = jobb;
//If we wanna asign new names to properties of the object we destructuring
const { title: jobbTitle, place: jobbPlace } = jobb;
