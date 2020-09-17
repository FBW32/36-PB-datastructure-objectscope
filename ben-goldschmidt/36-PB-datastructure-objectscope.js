console.log("# SCOPE **Instructions**")
console.log("")
console.log("QUESTION 1. Create the following object:")
// ```javascript
// const student = { 
// firstName: "John", 
// lastName: "Smith", 
// class: 12 };
// ```
// * Create a method that prints the following: 
// ```javascript
// "John smith is a student in class 12"
// ```

const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    about: function () {
        console.log(`${this.firstName} ${this.lastName} is in class ${this.class}!`)
    }
};
student.about();




console.log("")
console.log("QUESTION 2. Create a person object.")
// Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

let personObject = {
    firstName: "John",
    lastName: "Smith",
    age: 12,
    job: "John",
    city: "Smith",
    information: function () {
        console.log(`${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} living in ${this.city}!`)
    },
    length: function () {
        let count = 0;
        for (let key in personObject) {
            count++
        }
        console.log(`The length of this object is ${count}!`);
    }
};
personObject.information();





// ## Bonus
console.log("")
console.log("BONUS QUESTION 3. Write a method to get the length of the person object.")


personObject.length();