// ****************************************************TASK 1 - OBJECTS****************************************************
const personA = {
    name: "Susan",
    age: 42,
    location: "Manchester",
    likes: "coconuts",
};

const personB = {
    name: "Megan",
    age: 32,
    location: "London",
    likes: "chicken wings",
};

const personC = {
    name: "Rose",
    age: 29,
    location: "Birmingham",
    likes: "popcorn",
};

const personD = {
    name: "George", 
    age: 23,
    location: "Essex",
    likes: "grapes", 
};

function biography(person) {
    return `Hi, my name is ${person.name},
    I am ${person.age},
    I live in ${person.location},
    I like ${person.likes}`    
};

console.log(biography(personC));















// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 6;
const y = 4;

const addition = x + y;

console.log("Addition: x + y " + addition);

const subtraction = x - y;

console.log("Subtraction: x - y " + subtraction);

const multiplication = x * y;

console.log("multiplication: x * y " + multiplication);

const division = x * y;

console.log("Division: x + y " + division);

const powerOf = x**y

console.log("6 to the power of 4 is "  + powerOf);

const myAge = 22;
const minimumDrivingAge = 17;

let check = myAge >= minimumDrivingAge

console.log("Am I old enough to drive? " + check)












// ****************************************************TASK 3****************************************************
function addNumbers(x,y) {
    return x + y
}

function subtractNumbers(x,y) {
    return x - y
}

function multiplyNumbers(x,y) {
    return x * y
}

function divideNumbers(x,y) {
    return x / y
}

const calculator = {
    add: addNumbers,
    subtract: subtractNumbers,
    multiply: multiplyNumbers,
    divide: divideNumbers
}

console.log(calculator.add(2,3))
console.log(calculator.subtract(3,2))
console.log(calculator.multiply(3,2))
console.log(calculator.divide(6,3))












