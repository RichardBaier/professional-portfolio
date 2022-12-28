window.onload = function () {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-nav')

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');

});
};
