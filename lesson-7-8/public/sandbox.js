"use strict";
// let greet = () => {
//   console.log("Hello world")
// }
var greet;
greet = function () {
    console.log("Hello world");
};
// const add = (a: number, b: number, c: number | string = 10) => { // set default value to c
var add = function (a, b, c) {
    // conditional parameter c
    console.log(a + b);
    console.log(c); // optional parameter
};
add(5, 10);
var minus = function (a, b) {
    // can define what the function is going to return
    return a - b;
};
var result = minus(10, 7);
// result = 'string' // inferred in line 23 to be number
