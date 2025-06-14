const slides = document.querySelectorAll('.slide');
const pontos = document.querySelectorAll('.ponto');
const btnAnt = document.querySelector('.ante');
const btnProx = document.querySelector('.prox');
const infos = document.querySelectorAll('.info');
let slideAtual = 0;
let slideProx = slideAtual + 1;
let slideAnterior = slideAtual - 1;

function mostrarSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('ativo', i === index);
        slide.classList.toggle('proximo', i === (index + 1) % slides.length);
        slide.classList.toggle('anterior', i === (index - 1 + slides.length) % slides.length);
        pontos[i].classList.toggle('ativo', i === index);
        infos[i].classList.toggle('ativo', i === index);
    });
    slideAtual = index;
} 


btnAnt.addEventListener('click', () => {
    const index = (slideAtual - 1 + slides.length) % slides.length;
    mostrarSlide(index);
});

btnProx.addEventListener('click', () => {
    const index = (slideAtual + 1) % slides.length;
    mostrarSlide(index);
});


pontos.forEach( ponto => {
    ponto.addEventListener('click', () => {
        const index = parseInt(ponto.getAttribute('data-index'));
        mostrarSlide(index);
    });
})

