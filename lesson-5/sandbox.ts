// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

character = "Mario";
age = 12;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];
// let ninjas: string[]; both are possible
ninjas = ["Yoshi", "Mario"];

// union types
let mixed: (string | number)[] = [];
mixed.push("Hello");
mixed.push(20);
// mixed.push(true)

console.log(mixed);

let uid: string | number;
uid = "123";
uid = 123;
// uid = false

// objects
let ninjaOne: object;
ninjaOne = {
  name: "Yoshi",
  age: 30,
};
// ninjaOne = 'Mario'

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaTwo = {
  name: "Mario",
  age: 20,
  beltColour: "black",
};
