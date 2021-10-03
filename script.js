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

///////SLIDER///////////
const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // get current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove(".current");

  //check for next slide

  if (current.nextElementSibling) {
    //add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    //add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => {
    current.classList.remove("current");
  });
};

const prevSlide = () => {
  // get current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove(".current");

  //check for next slide

  if (current.previousElementSibling) {
    //add current to next sibling
    current.previousElementSibling.classList.add("current");
  } else {
    //add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => {
    current.classList.remove("current");
  });
};

//button events
next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);

    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener("click", (e) => {
  prevSlide();
  clearInterval(slideInterval);

  slideInterval = setInterval(nextSlide, intervalTime);
});

///auto-slide
if (auto) {
  //run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
