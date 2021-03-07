let character = "mario";
let age = 30;
let isBlackBelt = false;

character = "luigi";
age = 12;
isBlackBelt = true;

const circumference = (diameter: number) => {
  return Math.PI * diameter;
};

console.log(circumference(12));

let names = ["Luigi", "Mario", "Yoshi"];

names.push("Toad");
// names.push(123);
// names.push(true);

let numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('12')

let mixed = ["ken", 3, "chun-li", 8, 9, true];
mixed.push(123);
mixed.push("ryu");
mixed.push(false);
mixed[0] = 1;

let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};

ninja.age = 40;
ninja.name = "luigi";
// ninja.age = "mario";
// ninja.skills = ['sleeping']

ninja = {
  name: 'yoshi',
  belt: 'orange',
  age: 45
}
