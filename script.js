const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const toggle = document.querySelector(".theme");
const logos = document.querySelectorAll(".logo");
const body = document.body;
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");



cards.forEach(card => {
  const slider = card.querySelector(".input");


  if (slider.checked) {
    card.classList.add("active");
    card.classList.remove("inactive");
  } else {
    card.classList.remove("active");
    card.classList.add("inactive");
  }

  slider.addEventListener("change", (e) => {
    if (e.target.checked) {
      card.classList.add("active");
      card.classList.remove("inactive");
    } else {
      card.classList.remove("active");
      card.classList.add("inactive");
    }
  });
  
  
});




toggle.addEventListener("click", () => {
  // Mostrar Elementos
  moon.classList.toggle("show");
  sun.classList.toggle("show");
  logos.forEach(logo => {
    logo.classList.toggle("show");
  });
  // Fim Mostrar Elementos

  // Mudar tema
  body.classList.toggle("dark");
  // Fim Mudar tema

  // Animação
  toggle.classList.toggle("sun")
  // Fim Animação
});

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove a classe ativa de todos  tira a parte vermelha 'clicada'
    buttons.forEach(b => b.classList.remove("active-btn"));
    // Adiciona a parte vermelha no clicado
    btn.classList.add("active-btn");
  });
});