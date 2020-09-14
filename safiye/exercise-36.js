//1
const student = {
  firstName: "John",
  lastName: "Smith",
  class: 12,
};
function asentence(obj) {
  let sentence = `${obj.firstName} ${obj.lastName} is a student in class ${obj.class}.`;
  console.log(sentence);
}
asentence(student);

//2
const person = {
  firstName: "John",
  lastName: "Smith",
  age: 41,
  city: "Paris",
  country: "France",
  job: "engineer",
};
function aperson(obj) {
  let sentence = `${obj.firstName} ${obj.lastName} is a ${obj.age} years old ${obj.job} living in ${obj.country}.`;
  console.log(sentence);
}
aperson(person);

//3
function gettinglength(obj) {
  let counter = 0;
  for (element in obj) {
    counter += 1;
  }
  return counter;
}
console.log(gettinglength(person));
