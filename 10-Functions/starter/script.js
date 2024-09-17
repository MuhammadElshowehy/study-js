'use strict';
// return func from func //
function logName(hi) {
  return function (name) {
    // console.log(hi, name);
  };
}
logName('Hi')('muhammad');

// start call & apply //
const testObjOne = {
  name: 'muhammad',
  age: 25,
  job: 'frontend developer',
};
const testObjTwo = {
  name: 'ahmed',
  age: 25,
  job: 'backend developer',
};

function logData(flag) {
  // console.log(
  //   `Hello ${this.name}, your job is ${this.job} and this your ${flag}`
  // );
}

logData.call(testObjOne, 'good');
logData.call(testObjTwo, 'very good');

logData.apply(testObjOne, ['goooooooooooooooood']);
logData.apply(testObjTwo, ['oooh']);
// end call & apply //
// start bind //
let bindObj = {
  name: 'Muhammad',
  birthDate: '30-03-1999',
};
function logBindData() {
  // console.log(
  //   `Hello ${this.name}, your BOD is ${this.birthDate}.`
  // );
}
let log = logBindData.bind(bindObj);
setTimeout(() => {
  log();
}, 3000);
// end bind //
// start immediately invoked function expression //
(function () {
  // console.log('111111111');
})();
(() => {
  // console.log('222222222');
})();
// end immediately invoked function expression //
// start closure //
// it's easy
// end closure //
