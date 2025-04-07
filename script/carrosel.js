const slides = document.querySelectorAll(".slide"); 
const btnProx = document.getElementById("btn-prox"); 
const btnAnte = document.getElementById("btn-ante");

let indexAtual = 0;

function mostrarSlide(index) {
  slides.forEach(slide => slide.classList.remove("on")); 
  slides[index].classList.add("on");
}

btnProx.addEventListener("click", () => {
  indexAtual++; 
  if (indexAtual >= slides.length) {
      indexAtual = 0;
  }
  mostrarSlide(indexAtual);
});

btnAnte.addEventListener("click", () => {
  indexAtual--;
  if (indexAtual < 0) {
      indexAtual = slides.length - 1; 
  }
  mostrarSlide(indexAtual);
});