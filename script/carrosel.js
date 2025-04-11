const btnprox = document.getElementById('btn-prox');
const btnante = document.getElementById('btn-ante');
const slider = document.querySelector('.carroselImg');
const conteiner = document.querySelector('.conteiner');

const carroselWidth = parseInt(window.getComputedStyle(conteiner).width);
const carroselImgWidth = parseInt(window.getComputedStyle(slider).width);

let slideAtual = 0;

const slideProps = {
  width: carroselWidth,
  scroll: 0,
};

function setPontoA() {
  const pontos = document.querySelectorAll('.ponto');
  pontos.forEach((ponto) => ponto.classList.remove('atual'));
  if (pontos[slideAtual]) {
    pontos[slideAtual].classList.add('atual');
  }
}

function controlSlide({ target: { id } }) {
  const totalSlides = slider.children.length;

  switch (id) {
    case 'btn-prox': {
      slideAtual = (slideAtual + 1) % totalSlides;
      setPontoA();
      if (slideProps.scroll + slideProps.width < carroselImgWidth) {
        slideProps.scroll += slideProps.width;
      } else {
        slideProps.scroll = 0;
      }
      conteiner.scrollLeft = slideProps.scroll;
      break;
    }
    case 'btn-ante': {
      slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
      setPontoA();
      if (slideProps.scroll - slideProps.width >= 0) {
        slideProps.scroll -= slideProps.width;
      } else {
        slideProps.scroll = carroselImgWidth - slideProps.width;
      }
      conteiner.scrollLeft = slideProps.scroll;
      break;
    }
    default:
      break;
  }
}

btnprox.addEventListener('click', controlSlide);
btnante.addEventListener('click', controlSlide);

window.onload = () => {
  const pontosNav = document.querySelector('.pontosNav');
  const pontoModelo = document.querySelector('.ponto');

  if (pontosNav && pontoModelo) {
    const lengthcontent = slider.children.length;
    for (let index = 1; index < lengthcontent; index++) {
      const novoPonto = pontoModelo.cloneNode(); 
      pontosNav.appendChild(novoPonto); 
    }
  }
  setPontoA();
};