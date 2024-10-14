'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

document.addEventListener('click', function () {
  document.body.style.setProperty('--color-primary', 'yellow');
  document.body.style.setProperty('--color-tertiary', 'blue');
});

document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log(e);
  e.stopPropagation();
  // e.preventDefault();

  e.target.style.backgroundColor = 'red';
}, false);

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e);
  e.stopPropagation()
  e.target.style.backgroundColor = 'green';
}, false);

document.querySelector('.nav').addEventListener('click', function (e) {
  console.log(e);
  e.stopPropagation()
  e.target.style.backgroundColor = 'blue';
}, false);

// practice on nav opacity //
let nav = document.querySelector('.nav');
let navItems = document.querySelectorAll('.nav__link');
nav.addEventListener('mouseover', function(e) {
  if (e.target.classList.contains('nav__link')) {
    navItems.forEach((el) => {
      el.style.opacity = 1;
    });
    e.target.style.opacity = 0.5;
  } else {
    navItems.forEach((el) => {
      el.style.opacity = 1;
    });
  }
})
// practice on nav opacity //
window.addEventListener('scroll', function(e) {
  // console.log(window.scrollY);
})

// start intersections observer //
const options = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(callbackFunc, options);
observer.observe()

function callbackFunc(entries, observer) {
  console.log(entries);
}

