pagine = document.querySelector(".pagine")
hamburger = document.querySelector(".hamburger")
ham1 = document.querySelector("#ham1")
ham2 = document.querySelector("#ham2")
ham3 = document.querySelector("#ham3")

messaggio = document.querySelector(".messaggio")


function liste(){
    if(hamburger.classList.contains("hamburgerChiuso")){
        hamburger.addEventListener("click", ()=>{
            if(pagine.classList.toggle("pagineAperte"), hamburger.classList.toggle("hamburgerAperto")){
                return 0
            }
         })
    }
}
liste()