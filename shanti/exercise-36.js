// Scope

/* 1. Create the following object:
    const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12 };
    Create a method that prints the following:
    "John smith is a student in class 12"
*/
const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12,
    prints() {
        console.log(`${student.firstName} ${student.lastName} is a student in class ${student.class}.`);
    }
};
student.prints(); // John Smith is a student in class 12.

/* 2. Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France". */
const person = {
    name: "John Smith",
    age: 41,
    job: "engineer",
    city: "France"
};
function personDetails(obj) {
    console.log(`${obj.name} is a ${obj.age} year old ${obj.job} living in ${obj.city}.`);
}
personDetails(person); // John Smith is a 41 year old engineer living in France.

// Bonus

/* 3. Write a method to get the length of the person object */
function objectLength() {
    return Object.keys(person).length;
}
console.log(objectLength()); // 4

// OR

function objectLenght1(obj) {
    let counts = 0;
    for (let count in obj) {
      counts += 1;
    }
    return counts;
  }
  console.log(objectLenght1(person)); // 4
  