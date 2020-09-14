const student = {
  firstName: "John",
  lastName: "Smith",
  class: 12,
};
console.log(
  `${student.firstName} ${student.lastName} is a student in class ${student.class}`
);
//or
function studentInfo(obj) {
  console.log(
    `${obj.firstName} ${obj.lastName} is a student in class ${obj.class}`
  );
}
studentInfo(student);

//2
let person = {
  firstName: "arezoo",
  lastName: "faraji",
  age: "32",
  city: "berlin",
};

function personsInfo(obj) {
  console.log(
    `${obj.firstName} ${obj.lastName} is a ${obj.age} years old and live in ${obj.city}.`
  );
}
personsInfo(person);

//3
function objectLenght(obj) {
  let keyNumber = 0;
  for (let key in obj) {
    keyNumber += 1;
  }
  return keyNumber;
}
console.log(objectLenght(person));

console.log(objectLenght(student));
