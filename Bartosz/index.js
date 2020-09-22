// # Scope

// **Instructions**
// 1. Create the following object: 

// const student = { 
// firstName: "John", 
// lastName: "Smith", 
// class: 12 };

// * Create a method that prints the following: 
// "John smith is a student in class 12"

const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12 
};

let studentInfo = (obj) => {
    return `${obj.firstName} ${obj.lastName} is a student in class ${obj.class}`
}

console.log(studentInfo(student));     // John Smith is a student in class 12

// 2. Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

const objPerson = {
    firstName: 'John',
    lastName: 'Doe',
    age: 66,
    job: 'Developer',
    city: 'Berlin',
    
}

let personInfo = (obj) => {
    return `${obj.firstName} ${obj.lastName} is a ${obj.age} old ${obj.job} living in ${obj.city}`
}

console.log(personInfo(objPerson));     // John Doe is a 66 old Developer living in Berlin

// ## Bonus
// 3. Write a method to get the length of the person object.

console.log('Length of the persons object:' ,Object.keys(objPerson).length); // Length of the persons object: 5