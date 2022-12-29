let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.navigation');
let list = document.querySelectorAll('.list');

menuToggle.onclick = function() {
  navigation.classList.toggle('active');
}

function activeLink() {
  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((item) =>
 item.addEventListener('click', activeLink));

 VanillaTilt.init(document.querySelector('.home-card'), {
  max: 25,
  speed: 400
 });