// Scope


// Create the following object:

// Create a method that prints the following:
// "John smith is a student in class 12"
const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12,
    printPhrase() {
        return`${student.firstName} ${student.lastName} is a student in class ${student.class}.`
    }
};
console.log(student.printPhrase());

//OR


// Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

const person = {
    firstName: 'Talia',
    lastName: 'Johnson', 
    age: 28,
    job: 'Designer', 
    city: 'Berlin', 
    printPhrase() {
        return `${person.firstName} ${person.lastName} is ${person.age} years old, ${person.job} and living in ${person.city}.`
    } 
};
console.log(person.printPhrase()); //Talia Johnson is 28 years old, Designer and living in Berlin.

// Write a method to get the length of the person object.

Object.size = function(obj) {
    let size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size -1;
};
let size = Object.size(person);
console.log(`The person objcet has the length of ${size} keys.`); //The person objcet has the length of 5 keys.