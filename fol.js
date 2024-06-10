let co = document.querySelector(".boxs");
let nav = document.querySelector(".nav");
let btnlog = document.querySelector(".login");
let modal = document.getElementById("id1");
btnlog.addEventListener("click", handler);
function handler(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

co.addEventListener("click", () => {
  co.classList.toggle("change");
  if (nav.style.display == "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});
window.onscroll = function scrolli() {
  if (document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
};

let typed = new Typed(".type", {
  strings: [
    "Alex Smith",
    "Designer",
    "Developer",
    " Freelancer",
    "Photographer",
  ],
  typeSpeed: 100,
  backspeed: 200,

  loop: true,
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// btnLogin.addEventListener("click", (e) => {
//   if (e.target == footer) {
//     footer.style.display = "block";
//     console.log(footer);
//   } else {
//     e.target.style.display = "";
//   }
// });

// When the user clicks anywhere outside of the modal, close it
