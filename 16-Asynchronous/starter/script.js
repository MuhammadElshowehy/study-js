// 'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////
// function getCountryData(country) {
//   let request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [res] = JSON.parse(this.responseText);

//     let currencies = [];
//     for (let cur in res.currencies) {
//       currencies.push(cur);
//     }
//     currencies = currencies.join(' - ');

//     const temp = `
//     <article class="country">
//       <img class="country__img" src="${res?.flags?.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${res.name.common}</h3>
//         <h4 class="country__region">${res.region}</h4>
//         <p class="country__row"><span>👫</span>${res.population / 1e6} M</p>
//         <p class="country__row"><span>🗣️</span>${res.languages.ara}</p>
//         <p class="country__row"><span>💰</span>${currencies}</p>
//       </div>
//     </article>
//   `;
//     countriesContainer.innerHTML += temp;
//     countriesContainer.style.opacity = 1;
//   });
// }

// getCountryData('egypt');
// getCountryData('palestine');

// // fetch //
// function fetchCountryData(country) {
//   const request = fetch(`https://restcountries.com/v3.1/name/${country}`);
//   request
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));
// }
// fetchCountryData('canada');

// console.log('time start')
// console.time('1st')
// console.time('2nd')
// setTimeout(() => {
//   console.log("I'm logging after 5 sec")
//   console.timeEnd('1st')
// }, 5000);
// setTimeout(() => {
//   console.log("I'm logging after 1 sec")
//   console.timeEnd('2nd')
// }, 1000);

// console.log('script start');
// setTimeout(function () {
//   console.log('setTimeout');
// }, 0);
// Promise.resolve()
//   .then(function () {
//     console.log('promise1');
//   })
//   .then(function () {
//     console.log('promise2');
//   });
// console.log('script end');

console.log('start');
setTimeout(() => {
  console.log('timer');
}, 0);
Promise.resolve('promise1').then(res => console.log(res));
Promise.resolve('promise2').then(res => {
  for (let i = 0; i < 100; i++) {
    console.log(res);
  }
});
console.log('end');
