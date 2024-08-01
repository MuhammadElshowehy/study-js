"use strict";

// function declaration: //
function one() {
  console.log("one");
}
one();

// function expression: //
const two = function () {
  console.log("two");
};
two();

function testStrict() {
  console.log("strict");
}
testStrict();
// object //
const muhammad = {
  fName: "Muhammad",
  lName: "Elshowehy",
  birthYear: 1999,
  job: "frontend developer",
  calcAge: function () {
    this.age = 2024 - Number(this.birthYear);
    return this.age;
  },
};
const test = "job";
console.log(muhammad.fName);
console.log(muhammad["lName"]);
console.log(muhammad.test); // => undefined
console.log(muhammad[test]);

console.log(muhammad.calcAge());
console.log(muhammad["calcAge"]());
console.log(muhammad);
// loop //
