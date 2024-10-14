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
let nav1 = document.querySelector('.nav');
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

const observer1 = new IntersectionObserver(callbackFunc, options);
observer.observe()

function callbackFunc(entries, observer) {
  console.log(entries);
}

// intersection observer //
// const section1 = document.querySelector('#section--1');
// const obsCallback = function(observer, entries) {
//   console.log(observer, entries);

// };
// const obsOptions = {
//   root: null, // this means the viewport,
//   rootMargin: "0px",
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const obsCallback = function (entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const obsOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(header);

// revealing elements //
const sections = document.querySelectorAll('.section');
const revealOptions = {
  root: null,
  threshold: 0.2,
};

const revealCallback = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target)
    }
  });
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
sections.forEach(section => {
  revealObserver.observe(section);
  section.classList.add('section--hidden');
});

// lazy loading images //
const images = document.querySelectorAll('.lazy-img');
const imgOptions = {root: null, threshold: 0.5}
const imgCallback = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('lazy-img');
      observer.unobserve(entry.target)
    }
  })
}

const imgObserver = new IntersectionObserver(imgCallback, imgOptions);
images.forEach(img => {
  imgObserver.observe(img);
})
