// "use strict";
console.log("hello world");

test = "test";
console.log(test);
const now = 2024;

console.log(now - 2000 > now - 2020);
let one, two;
one = two = 10;
console.log(one, two); //10 10
// ##################
console.log("################ start challenge");
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95; 

let markBMI = markWeight / (markHeight ** 2);
let johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
console.log("################ end challenge");
// ##################