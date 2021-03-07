// let greet = () => {
//   console.log("Hello world")
// }

let greet: Function;
greet = () => {
  console.log("Hello world");
};

// const add = (a: number, b: number, c: number | string = 10) => { // set default value to c
const add = (a: number, b: number, c?: number | string) => {
  // conditional parameter c
  console.log(a + b);
  console.log(c); // optional parameter
};

add(5, 10);

const minus = (a: number, b: number): number => {
  // can define what the function is going to return
  return a - b;
};

let result = minus(10, 7);
// result = 'string' // inferred in line 23 to be number
