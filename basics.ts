// Primitives: number, string, booleans (null, undefined)
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 39;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[]; //an array of strings
hobbies = ['Sports', 'Cooking'];

let person: any; //anything is allowed
person = {
  name: 'Max',
  age: 32,
};

let person2: {
  name: string;
  age: number;
}; //defining the type person2

// person2 = {
//     isEmployee: false
// } //not allowed!

let people: {
  name: string;
  age: number;
}[]; //defining a type people that is structured as an array of objects, each object containing a property called name, whose value must be a string, and a property called age, whose value must be a number

// Type inference
let title = 'React - The complete guide';
// title = 12345 //not allowed cause it's not a string!

// Union type
let course: string | number = 'React - the complete guide';
course = 12345;
