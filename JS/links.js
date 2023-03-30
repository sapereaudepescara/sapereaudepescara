const imgLinks = document.querySelectorAll(".social img")
const links = document.querySelectorAll(".links")

imgLinks[0].addEventListener("click", ()=>{
    if(imgLinks[0].classList.contains("ruotareLinks")){
        imgLinks[0].classList.remove("ruotareLinks")
        imgLinks[0].classList.add("ruotareIndietroLinks")
        for(i=0; i<links.length; i++){
            links[i].classList.remove("ciao")
        }
    } else {
        imgLinks[0].classList.add("ruotareLinks")
        for(i=0; i<links.length; i++){
            links[i].classList.add("ciao")
        }
        imgLinks[0].classList.remove("ruotareIndietroLinks")
    }
})