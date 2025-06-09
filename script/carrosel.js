const slides = document.querySelectorAll('.slide');
const pontos = document.querySelectorAll('.ponto');
const btnAnt = document.querySelector('.ante');
const btnProx = document.querySelector('.prox');
const infos = document.querySelectorAll('.info');
let slideAtual = 0;

function mostrarSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('ativo', i === index);
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

