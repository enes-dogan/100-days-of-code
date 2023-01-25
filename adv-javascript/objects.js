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
}

const job3 = new Job('developer', 'india', '100$');

console.log(job3);
