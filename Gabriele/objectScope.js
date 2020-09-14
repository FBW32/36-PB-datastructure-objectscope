// 1. Create the following object:
// const student = { 
// firstName: "John", 
// lastName: "Smith", 
// class: 12 };


// Create a method that prints the following:
"John smith is a student in class 12"

const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12,
    printFunc: function() {
        return this.firstName + " " + this.lastName + " is a student in " + "class " + this.class;
    }
};
console.log(student.printFunc());  // John Smith is a student in class 12


// 2. Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France". 
// + 
// 3. Write a method to get the length of the person object.

const person = {
    name: "John",
    lastName: "Smith",
    age: "28",
    job: "engineer",
    city: "Montpellier",
    nationality: "Scottish",
    personFunc: function() {
    return `${this.name} ${this.lastName} is a ${this.age} years old ${this.job} who lives in ${this.city} but he is not French, he is ${this.nationality}`;
    },
    objectSize: function() {
        return Object.keys(person).length;
    }

};
console.log(person.personFunc());  // John Smith is a 28 years old engineer who lives in Montpellier but he is not French, he is Scottish
console.log(person.objectSize());  // 8



