const btn = document.querySelector('.menu-toggle');

btn.addEventListener('click', () => {
  btn.classList.toggle('is-active');
});

AOS.init({
  once: false,
});


AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  once: false, // whether animation should happen only once - while scrolling down
});

