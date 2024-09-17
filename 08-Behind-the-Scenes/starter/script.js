'use strict';
let elshowehy = {
  name: 'muhammad',
  BOD: 1999,
  job: 'frontend developer',
  calcAge: function () {
    console.log(2024 - this.BOD);
  },
};
window.elshowehy = elshowehy;
// console.log(window);
// console.log(this);

let user = {
  sayHello: function () {
    console.log('hello');
  },
  sayHello() {
    console.log('hello');
  },
  type: 'test',
};

user.sayHello();
elshowehy.calcAge();
let one = {
  1: 1,
}
let two = {
  2: 2
}

two[2] = 1;

console.log(one);
console.log(two); 