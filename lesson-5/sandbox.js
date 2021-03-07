// explicit types
var character;
var age;
var isLoggedIn;
character = "Mario";
age = 12;
isLoggedIn = true;
// arrays
var ninjas = [];
// let ninjas: string[]; both are possible
ninjas = ["Yoshi", "Mario"];
// union types
var mixed = [];
mixed.push("Hello");
mixed.push(20);
// mixed.push(true)
console.log(mixed);
var uid;
uid = "123";
uid = 123;
// uid = false
// objects
var ninjaOne;
ninjaOne = {
    name: "Yoshi",
    age: 30
};
// ninjaOne = 'Mario'
var ninjaTwo;
ninjaTwo = {
    name: "Mario",
    age: 20,
    beltColour: "black"
};
