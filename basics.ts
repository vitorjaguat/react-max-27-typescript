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
//Using | operator will allow 2-more types
let course: string | number = 'React - the complete guide';
course = 12345; //allowed!

// Type alias
type Dog = {
  name: string;
  age: number;
};
let pets: Dog[];

// Functions & Types

function add(a: number, b: number) {
  return a + b; //this infers that the returned value is necessarily a number
}

function add2(a: number, b: number): number {
  return a + b;
} //explicitly defining the above inference

function printOutput(value: any) {
  console.log(value);
} // as this function doesn't return anything, its infered type is void; void is a function type, it means that the function returns undefined (doesn't return anything)

// Generics
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); //type of updatedArray is inferred to any[]

function insertAtBeginningNew<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArrayNew = [1, 2, 3];
const updatedArrayNew = insertAtBeginning(demoArray, -1); //type of updatedArrayNew is inferred to number[], that's because the Generics syntax will look at the types of the original array items and value, and
