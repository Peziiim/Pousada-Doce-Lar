
var ponteiro = document.getElementById("ponteiro");
var card = document.querySelector(".header-card");
var x = document.getElementById("close-card");
//QA
const buttons = document.getElementsByClassName("QA-button")
const QA = document.querySelector(".QA-main")
const QAcont = document.querySelector(".QA-block")
const removeBtn = document.querySelector("#return")
const QAbuttons = document.querySelector(".QA-buttons")
const container = document.querySelector(".QA-text")
const text = document.getElementById("QA-content")
const title = document.getElementById("QA-title")
const QaForm = document.getElementById("QA-form")
//QA

let respostas = [
    "-check-in: 14h \n\n-check-out: 11h\n\nO horário de check-in na pousada tem início às 14h, permitindo que a equipe prepare cuidadosamente os quartos para a chegada dos hóspedes. Já o check-out deve ser realizado até às 11h, garantindo tempo adequado para a limpeza e organização dos espaços antes da próxima hospedagem.", 
    "Sim! 🐾 Aceitamos pets com muito carinho. \n\nSabemos como eles são parte da família, por isso, sua companhia é bem-vinda em nossa pousada.",
    "Atualmente, contamos com 3 quartos confortáveis, todos com capacidade para até 3 pessoas.\n\nCada quarto é equipado com ar-condicionado, Wi-Fi, banheiro privativo e ambiente acolhedor para garantir o seu conforto.",
    "Sim! Nosso café da manhã está incluso na hospedagem e é servido com muito carinho para começar bem o seu dia.\n\nOferecemos uma seleção simples e caseira com bolos variados, pães, manteiga, café, leite, achocolatado e iogurte. Tudo é preparado com aquele jeitinho acolhedor de interior"

]

let count = 0;


Array.from(buttons).forEach((button, i) => {

    button.addEventListener("click", () => {
        QAbuttons.style.display = "none"
        container.style.display = "block"

        if(i < 4){
            text.innerHTML = respostas[i].replace(/\n/g, "<br>");
            QaForm.style.display = "none";
            text.style.display = "block"
        } else {
            QaForm.style.display = "flex";
            text.style.display = "none"
            container.style.padding = "20px 40px 20px 40px"
        }
     
        title.textContent = button.textContent
        title.style.fontSize = "18px"
        
        count = 1
        console.log(count)

    })
});

QA.addEventListener("click", () => {
    QA.classList.add("rotate")
    setTimeout(() => {
        QA.style.display = "none"
        QAcont.style.display = "flex"
        QAcont.classList.add("appear")
        QAcont.classList.remove("remove")
        QA.classList.remove("pop-show")
    }, 700)

})
    removeBtn.addEventListener("click", () => {
      if(count == 0) {
        QAcont.classList.add("remove")
    
           setTimeout(() => {
            QA.style.display = "block"
            QAcont.style.display = "none"
            QA.classList.remove("rotate")
            QA.classList.add("pop-show")
        }, 1000)

      } else {
        QAbuttons.style.display = "flex"
        container.style.display = "none"
        text.innerHTML = " "
        title.textContent = "Perguntas frequentes"
        title.style.fontSize = ""
        count = 0

      }
    })


QaForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = QaForm.elements["name"].value.trim();
    const email = QaForm.elements["email"].value.trim();
    const mensagem = QaForm.elements["message"].value.trim();

    if(!nome || !email || !mensagem) {
        swal("Erro ao enviar", "Preencha todos os campos", "warning")
    }  else {

         emailjs.sendForm('service_uoorby5', 'template_icve0yw', event.target)
           .then(function() {
               swal("Mensagem enviada",`Iremos responder o mais rápido possível\nClique em "fale conosco" para uma resposta mais rapida`, "success")
              event.target.reset();
           }, function(error) {
               swal("Erro ao enviar", "Tente novamente. \nSe o erro persistir, reinicie a página", "warning");
               console.log(error);
           });
        
    }
         
});

ponteiro.addEventListener("click", () => {
    ponteiro.classList.toggle('jump');
    card.classList.toggle('pop-show')
})

x.addEventListener("click", () => {
        card.classList.remove('pop-show');
        ponteiro.classList.add('jump');
} )


