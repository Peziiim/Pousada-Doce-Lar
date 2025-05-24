var ponteiro = document.getElementById("ponteiro");
var card = document.querySelector(".header-card");
var x = document.getElementById("close-card");

ponteiro.addEventListener("click", () => {
    ponteiro.classList.toggle('jump');
    card.classList.toggle('pop-show')
})

x.addEventListener("click", () => {
        card.classList.remove('pop-show');
        ponteiro.classList.add('jump');
} )
