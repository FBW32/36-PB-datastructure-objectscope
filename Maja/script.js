
/* 1. 
Create the following object:
const student = { 
firstName: "John", 
lastName: "Smith", 
class: 12 };
Create a method that prints the following:
"John smith is a student in class 12" */

const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12,
    function: function() {
        return `${student.firstName} ${student.lastName} is a student in class ${student.class}`
    }
};
    console.log(student.function());  // John Smith is a student in class 12

/*  2. 
    Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France". */

let person = {
    firstName: "Maya",
    lastName: "Marek",
    age: 40,
    job: "designer",
    city: "Berlin",
    allInfo: function() {
        return `${person.firstName} ${person.lastName} is a ${person.age} year old ${person.job} from ${person.city}.`
    }
}
console.log(person.allInfo());  // Maya Marek is a 40 year old designer from Berlin.
