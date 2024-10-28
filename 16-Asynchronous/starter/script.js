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

// fetch //
// async function fetchCountryData(country) {
//   const request = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     let data = request.json();
//     console.log(data);
//     data.then(data => console.log(data))
//     // .catch(err => console.error(err));
// }
// fetchCountryData('canada');

// console.log(
//   navigator.geolocation.getCurrentPosition(position => {
//     console.log(position);
//   }),
//   err => {
//     console.error(err);
//   }
// );

// console.log('#############  Event Loop  #############');

/** simple example **/
// console.log('script start');
// setTimeout(function () {
//   console.log('Timer');
// }, 0);
// Promise.resolve()
//   .then(function () {
//     console.log('Promise');
//   });
// console.log('script end');

/** you can create a microtask **/
// console.log('script start');
// setTimeout(function () {
//   console.log('Timer');
// }, 0);
// Promise.resolve()
// .then(function () {
//   console.log('Promise');
// });
// queueMicrotask(() => {console.log('Queue micro task')});
// console.log('script end');

/** js is a weak, cause it's a single thread language **/
// const start = performance.now();
// // console.log('script start: ', start);
// setTimeout(function () {
//   console.log('Time out');
// }, 1000);
// for (let i = 0; i <= 55000; i++) {
//   console.log(i);
// }
// const end = performance.now();
// // console.log('end script: ', end);
// console.log('Time: ', ((end - start) / 1000).toFixed(2), 'second');

/** Question **/
// setTimeout(() => {
//   console.log(num);
// }, 0);
// let num = 10;
// console.log('#############  Event Loop  #############');

// start generic function to call API //
async function callAPI(endpoint) {
  try {
    let request = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return request.json();
  } catch (err) {
    return err;
  }
}

async function getEgyData() {
  try {
    let [data] = await callAPI('https://restcountries.com/v3.1/name/egypt');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
getEgyData();
// end generic function to call API //
