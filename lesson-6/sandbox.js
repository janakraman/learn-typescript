// dynamic types
var age = 25;
age = "test";
console.log(age);
age = true;
console.log(age);
age = {
    name: "Luigi"
};
console.log(age);
var mixed = [];
mixed.push(5);
mixed.push("Mario");
mixed.push(false);
mixed.push({ name: "Mario" });
console.log(mixed);
var ninja;
ninja = { name: "Yoshi", age: 25 };
console.log(ninja);
ninja = { name: 25, age: 'Yoshi' };
console.log(ninja);
