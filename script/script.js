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

//WE
 const weIcon = document.getElementById("We-icon")
 const weMain = document.getElementById("We-main")
 const weImg = document.getElementById("We-figure")
 const weContainer = document.getElementById("We-container")
const showWe = document.getElementById("showWe")
//WE

let respostas = [
    "-check-in: 14h \n\n-check-out: 11h\n\nO horário de check-in na pousada tem início às 14h, permitindo que a equipe prepare cuidadosamente os quartos para a chegada dos hóspedes. Já o check-out deve ser realizado até às 11h, garantindo tempo adequado para a limpeza e organização dos espaços antes da próxima hospedagem.", 
    "Sim! 🐾 Aceitamos pets com muito carinho. \n\nSabemos como eles são parte da família, por isso, sua companhia é bem-vinda em nossa pousada.",
    "Atualmente, contamos com 3 quartos confortáveis, todos com capacidade para até 3 pessoas.\n\nCada quarto é equipado, Wi-Fi, banheiro privativo e ambiente acolhedor para garantir o seu conforto.",
    "Sim! Nosso café da manhã está incluso na hospedagem e é servido com muito carinho para começar bem o seu dia.\n\nOferecemos uma seleção simples e caseira com bolos variados, pães, manteiga, café, leite, achocolatado e iogurte. Tudo é preparado com aquele jeitinho acolhedor de interior"

]

let countQA = 0;
let countWe = 0;


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
        
        countQA = 1
        console.log(countQA)

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
      if(countQA == 0) {
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
        countQA = 0

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

weIcon.addEventListener("click", () => {
    weIconClick()

})

function showInfo(json){
    let figure
    let date = new Date().getDay()
    let day

    switch(date){
        case 1:
            day = "Domingo"
            break
        case 2:
            day = "Segunda-feira"
            break
        case 3:
            day = "Terça-feira"
            break
        case 4:
            day = "Quarta-feira"
            break
        case 5:
            day = "Quinta-feira"
            break
        case 6:
            day = "Sexta-feira"
            break
        case 7:
            day = "Sabado"
            break
    }

    if(json.weather === "Clear"){figure = `<img id="We-figure" src="./assets/images/sol.png" alt="Sol">`} else 

    if(json.weather === "Rain"){figure = `<img id="We-figure" src="./assets/images/chuva.png" alt="chuva">`} else 
    
    if(json.weather === "Clouds"){figure = `<img id="We-figure" src="./assets/images/nublado.png" alt="nublado">`} else {

        figure =  `<img id="We-figure" src="./assets/images/nublado.png" alt="nublado">`
    }

    
    weMain.innerHTML = `<p id="We-desc">Camanducaia<br><strong>${json.descricao}</strong></p>
                            ${figure}
                        <p id="We-temp"><strong>${json.temp}°C</strong></p>
                        <p id="day"> ${day}</p>`  

    
                        weIcon.style.display = "none"
                        weContainer.classList.add("resize")
                        weContainer.classList.remove("unsize")
                        weMain.style.display = "block"
                        weMain.classList.add("grow-content");
                       
                            
                                 
}

async function weIconClick(){
    const apiKey = "8a60b2de14f7a17c7a11706b2cfcd87c"
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=-22.760926479772152&lon=-46.16399932208938&appid=8a60b2de14f7a17c7a11706b2cfcd87c&units=metric&lang=pt_br`

    const response = await fetch(api)
    const json = await response.json()

    if(json.cod === 200){
        showInfo({
            weather: json.weather[0].main,
            descricao: json.weather[0].description,
            temp: json.main.temp

        })
    } else {swal("Erro na requisição da Api", `Erro: cod${json.cod}\n${json.message}`, "warning")}



}


weMain.addEventListener("click", () => {
    weMain.style.display = "none"
    weContainer.classList.add("unsize")
    weContainer.classList.remove("resize")
    weMain.classList.remove("grow-content")
    weIcon.style.display = "flex"              
})

ponteiro.addEventListener("click", () => {
    ponteiro.classList.toggle('jump');
    card.classList.toggle('pop-show')
})

x.addEventListener("click", () => {
        card.classList.remove('pop-show');
        ponteiro.classList.add('jump');
} )


