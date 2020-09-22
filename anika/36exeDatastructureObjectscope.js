// ************* EXERCISE 36 DATA STRUCTURE OBJECT SCOPE****************

// # Scope

// **Instructions**
// 1. Create the following object:
// ```javascript
// const student = {
// firstName: "John",
// lastName: "Smith",
// class: 12 };

// * Create a method that prints the following:
// ```javascript
// "John smith is a student in class 12"
// ```

const student = {
  firstName: "John",
  lastName: "Smith",
  class: 12,
  q1Method: function () {
    console.log(
      `${student.firstName} ${student.lastName} is a student in class ${student.class}`
    );
  },
};

student.q1Method(); // John Smith is a student in class 12

// 2. Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

person = {
  name1: "mario",
  name2: "somthing italian",
  age: 34,
  job: "plumber",
  city: "rome",

  q2Print: function () {
    return console.log(
      `${this.name1} ${this.name2} is a ${this.age} years old ${this.job} who lives in ${this.city}`
    );
  },
};

person.q2Print();
// mario somthing italian is a 34 years old plumber who lives in rome

// ## Bonus

// 3. Write a method to get the length of the person object.

person2 = {
  name1: "mario",
  name2: "somthing italian",
  age: 34,
  job: "plumber",
  city: "rome",

  q2Print: function () {
    return console.log(
      `${this.name1} ${this.name2} is a ${this.age} years old ${this.job} who lives in ${this.city}`
    );
  },
  bonus: function () {
    let bonusLength;
    let count = 1;
    for (let a in this) {
      bonusLength = count++;
    }
    return console.log(bonusLength);
  },
};

person2.bonus(); // 7
