var btnHome = document.querySelector("#headerbtn");
var menu = document.querySelector(".mobile-menu")
var nav = document.querySelector(".link-container")

btnHome.addEventListener("click", function (){
    location.reload();
})

menu.addEventListener("click", () => {
    if(nav.classList.contains("on")){
        nav.style.animation = "out 1s ease 1 forwards"

        setTimeout(() => {
            nav.classList.remove("on");
               nav.style.animation = "none"
        }, 1000)
    } else {
        nav.classList.add("on")
        nav.style.animation = "fadeIn 1s ease 1 forwards";
    }

  
})