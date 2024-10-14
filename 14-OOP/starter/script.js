'use strict';
// function Person(fname, lname) {
//   this.fname = fname;
//   this.lname = lname;

//   this.fullName = function () {
//     return this.fname + ' ' + this.lname;
//   };
// }

// const elshowehy = new Person('Muhammad', 'Elshowehy');
// const gemy = new Person('Gamal', 'Elshowehy');

// console.log(elshowehy.fullName());
// console.log(gemy.fullName());

// let str = "kkkk"
// console.log(Number.prototype);
// console.log(String.prototype);

// Person.prototype.test = function() {
//   return 'test';
// }
// console.log(Person.prototype);
// console.log(elshowehy.test());

// Person.prototype.hello = 'hello';
// console.log(Person.prototype);
// console.log(elshowehy.hello);

// console.log(elshowehy.hasOwnProperty('fname'));
// console.log(elshowehy.hasOwnProperty('lname'));
// console.log(elshowehy.hasOwnProperty('fullName'));
// console.log(elshowehy.hasOwnProperty('hello'));
// console.log(elshowehy.hasOwnProperty('test'));

// // get proto of proto:
// console.log(elshowehy.__proto__.__proto__);
// // end of proto chain:
// console.log(elshowehy.__proto__.__proto__.__proto__);

// start challenge:
// function Car({speed, name}) {
//   this.speed = speed;
//   this.name = name;
// }

// Car.prototype.accelerate = function() {
//   this.speed = parseInt(this.speed) + 10;
//   return `${this.name.toUpperCase()} going at ${this.speed} km/h`;
// }

// Car.prototype.brake = function() {
//   this.speed = parseInt(this.speed) - 5;
//   return `${this.name.toUpperCase()} going at ${this.speed} km/h`;
// }

// const bmw = new Car({name: 'bmw', speed: 120});
// const mercedes = new Car({name: 'mercedes', speed: 95});
// console.log(bmw.accelerate());
// console.log(bmw.brake());
// console.log(bmw.accelerate());
// console.log(mercedes.brake());
// end challenge:

// start challenge:
// class Car {
//   constructor(speed, name) {
//     this.speed = speed;
//     this.name = name;
//   }

//   accelerate() {
//     this.speed = parseInt(this.speed) + 10;
//     return `${this.name.toUpperCase()} going at ${this.speed} km/h`;
//   };

//   brake() {
//     this.speed = parseInt(this.speed) - 5;
//     return `${this.name.toUpperCase()} going at ${this.speed} km/h`;
//   };

//   get speedUS() {
//     return parseInt(this.speed) / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = parseInt(speed) * 1.6;
//   }
// }
// const ford = new Car(120, 'ford');
// console.log(ford);
// console.log(ford.speedUS);
// console.log(ford.speedUS = 100);
// console.log(ford.accelerate());
// console.log(ford.brake());
// end challenge:

// start inheritance //
// function Person(fname, birthDate) {
//   this.fname = fname;
//   this.birthDate = birthDate;
// }

// Person.prototype.calcAge = function () {
//   return 2024 - parseInt(this.birthDate);
// };
// const one = new Person('Muhammad', '1999');
// // console.log(Person.prototype);
// // console.log(one.__proto__);

// function Student(fname, birthDate, course) {
//   this.fname = fname;
//   this.birthDate = birthDate;
//   this.course = course;
// }

// Student.prototype.introduce = function () {
//   return `I'm ${this.fname} and i'm studying ${this.course}.`;
// };
// const john = new Student('john', 1998, 'JS')
// console.log(john);
// console.log(john.introduce());
// end inheritance //

/** inheritance using classes **/
class Person {
  #id;
  constructor(id, fullName, birthDate) {
    this.#id = id;
    this.fullName = fullName;
    this.birthDate = birthDate;
  }

  calcAge() {
    return 2024 - parseInt(this.birthDate);
  }
}

const one = new Person('Muhammad Elshowehy', 1999);
console.log(one.__proto__);

class Student extends Person {
  constructor(id, fullName, birthDate, course) {
    super(id, fullName, birthDate);
    this.course = course;
  }
}

const two = new Student(1, 'Ali Ali', 1980, 'TS');
console.log(two.id);

