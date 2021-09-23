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
