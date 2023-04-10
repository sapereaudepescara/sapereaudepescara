const imgLinks = document.querySelectorAll(".social img")
const social = document.querySelector(".social")
const links = document.querySelectorAll(".links")
const socialMedia = document.querySelector(".socialMedia")

if (window.matchMedia("(max-width: 1200px)")) {
    imgLinks[0].addEventListener("click", ()=>{
        if(imgLinks[0].classList.contains("ruotareLinks")){
            imgLinks[0].classList.remove("ruotareLinks")
            imgLinks[0].classList.add("ruotareIndietroLinks")
            /* social.style.border = "1px solid #727272"; */
            socialMedia.classList.remove("socialMediaAperto")
        } else {
            imgLinks[0].classList.add("ruotareLinks")
            imgLinks[0].classList.remove("ruotareIndietroLinks")
            /* social.style.border = "unset"; */
            socialMedia.classList.add("socialMediaAperto")
        }
    })
} else {
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
}
