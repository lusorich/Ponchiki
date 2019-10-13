let nav = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');

navToggle.addEventListener('click', () => {
  if (nav.classList.contains('nav--closed')) {
      nav.classList.remove('nav--closed');
      nav.classList.add('nav--opened');
    } else {
      nav.classList.add('nav--closed');
      nav.classList.remove('nav--opened');
    }
})
