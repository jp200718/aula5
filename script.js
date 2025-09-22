const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const toggle = document.querySelector(".theme");

toggle.addEventListener("click", () => {
  moon.classList.toggle("show");
  sun.classList.toggle("show");
});