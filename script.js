////navbar

const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", function () {
  nav.classList.toggle("active");
});

/////sticky navbar
const nav2 = document.querySelector(".full-nav");
window.addEventListener("scroll", function () {
  nav2.classList.toggle("sticky", window.scrollY > 600);
});

// /////GALLERY
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

//set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach((img) => {
  img.addEventListener("click", imgClick);
});

function imgClick(e) {
  //reset all imgs opacity
  imgs.forEach((img) => {
    img.style.opacity = 1;
  });
  //change img to src img
  current.src = e.target.src;

  //add fadeIn class
  current.classList.add("fade-in");
  //remove fadein class after 0.5s
  setTimeout(() => current.classList.remove("fade-in"), 500);
  //change opacity
  e.target.style.opacity = opacity;
}

//////animation

window.addEventListener("scroll", reveal);

function reveal() {
  const reveal = document.querySelector(".reveal");
  const windowHeight = window.innerHeight;
  const revealPoint = 150;
  const revealTop = reveal.getBoundingClientRect().top;

  if (revealTop < windowHeight - revealPoint) {
    reveal.classList.add("active");
  } else {
    reveal.classList.remove("active");
  }
}
