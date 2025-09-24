const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const toggle = document.querySelector(".theme");
const logos = document.querySelectorAll(".logo");
const body = document.body;


toggle.addEventListener("click", () => {
  moon.classList.toggle("show");
  sun.classList.toggle("show");

  body.classList.toggle("dark");

  toggle.classList.toggle("sun")

  logos.forEach(logo => {
    logo.classList.toggle("show");
  });
});

// Seleciona todos os botões
const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove a classe ativa de todos  tira a parte vermelha 'clicada'
    buttons.forEach(b => b.classList.remove("active-btn"));
    // Adiciona a parte vermelha no clicado
    btn.classList.add("active-btn");
  });
});