const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const toggle = document.querySelector(".theme");
const logos = document.querySelectorAll(".logo");
const body = document.body;
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");
const btnActive = document.getElementById("active")
const btnInactive= document.getElementById("inactive");

function reportElements(className, label) {
  const qtd = document.querySelectorAll(`.${className}`).length;
  
  if (qtd === 0) {
    console.log(`Não existem elementos ${label}s na página`);
    
  } else {
    const verbo = qtd > 1 ? "Existem" : "Existe";
    const plural = qtd > 1 ? "s" : "";

    console.log(
      `${verbo} ${qtd} elemento${plural} ${label}${plural} na página`
    );

  }
}
// ao ocorrer o click filtra e esconde o card 


  btnActive.addEventListener("click", () => {
    reportElements("active", "ativo");    
  });

  btnInactive.addEventListener("click", () => {
    reportElements("inactive", "inativo");
  });

// btnActive.addEventListener("click", () => {
//   const actives = document.querySelectorAll(".active");
//   const qtd = actives.length;
// if (qtd === 0) {
//   console.log("Não existem elementos ativos na página");
// } else {
//   console.log(
//     `${qtd > 1 ? "Existem" : "Existe"} ${qtd} ${qtd > 1 ? "elementos ativos" : "elemento ativo"} na página`
//   );
// }
// });


// btnInactive.addEventListener("click", () => {
//  const inactives = document.querySelectorAll(".inactive")
//  const qtd = inactives.length;
// if (qtd === 0) {
//   console.log("Não existe elementos inativos na página");
// } else {
//   console.log(
//     `${qtd > 1 ? "Existem" : "Existe"} ${qtd} ${qtd > 1 ? "elementos inativos" : "elemento inativo"} na página`
//   );
// }
  
// })


// console.log('Existem' + 4 + 'elementos ativos na pagina')

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