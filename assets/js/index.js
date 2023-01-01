let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.navigation');
let list = document.querySelectorAll('.list');
var x = window.matchMedia("(min-width: 1100px)")

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

function myFunction(x) {
  if (x.matches) { // If media query matches
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}

function sendEmail() {
  Email.send({
    SecureToken: "28c7270f-d1fe-4736-8609-394f1e465151",
    To : 'bearbaier@gmail.com',
    From : document.getElementById("email").value,
    Subject : "Portfolio Contact",
    Body : "Name: " + document.getElementById("firstName").value + document.getElementById("lastName").value 
    + "<br> Email: " + document.getElementById("email").value 
    + "<br> Mobile: " + document.getElementById("mobile").value
    + "<br> Message: " + document.getElementById("message").value
}).then(
  message => alert("Message Sent Successfully")
);
};

myFunction(x);
x.addListener(myFunction);