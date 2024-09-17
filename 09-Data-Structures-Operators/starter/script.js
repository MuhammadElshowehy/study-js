'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// catch categories //
let categories = restaurant.categories;
// console.log(categories);
let [one, two, three, four] = restaurant.categories;
// console.log(one, two, three, four);
// merge two arrays //
const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(allMenu);

let obj = {
  fname: 'muhammad',
  lname: 'elshowehy',
  job: 'frontend',
  phone: '01012345678',
  age: 25
}
// for(let item of Object.entries(obj)) {
//   console.log(item);
// }
const objValues = [];
for(let [index, value] of Object.entries(obj)) {
  // console.log(index, value);
  objValues.push(value);

}
// console.log(objValues);
// start Set() //
const ingredients = new Set(['onion', 'tomato', 'cucumber', 'salt', 'water', 'water', 'potatoes']);
// console.log(ingredients.size);
// console.log(ingredients.keys());
// console.log(ingredients.values());
// console.log(ingredients.has('water'));
ingredients.add('ice');
// console.log(ingredients);
// console.log(Array.isArray( ingredients));
// ingredients.forEach(item => {
//   console.log(item);
// })
for (let [index, value] of ingredients.entries()) {
  // console.log(index);
  // console.log(value);
}
let uniqueIngredients = [...ingredients];
// console.log(uniqueIngredients);
// end Set() //
// start map //
const countries = new Map();
// console.log(countries);
countries.set('egypt', 'poor');
for(let [key, value] of countries) {
  // console.log(key, value);
}
// console.log(countries.get('egypt'));
// console.log(countries);
// end map //

let testObj = {
  name: 'muhammad',
  age: 25,
  job: 'frontend'
}

// for (let key in testObj) {
//   console.log(`${key}: ${testObj[key]}`);
// }
for(let [key, value] of Object.entries(testObj)) {
  // console.log(key, value);
}

countries.set([1, 2], 'numbers');
// console.log(countries);

for(let [key, value] of countries.entries()) {
  // console.log(key, value);
}