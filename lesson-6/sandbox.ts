// dynamic types
let age: any = 25;

age = "test";
console.log(age);

age = true;
console.log(age);

age = {
  name: "Luigi",
};
console.log(age);

let mixed: any[] = [];
mixed.push(5);
mixed.push("Mario");
mixed.push(false);
mixed.push({ name: "Mario" });
console.log(mixed);

let ninja: { name: any; age: any };

ninja = { name: "Yoshi", age: 25 };
console.log(ninja)

ninja = { name: 25, age: 'Yoshi' };
console.log(ninja)
