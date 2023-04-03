p1 = document.querySelector("#p1");
p2 = document.querySelector("#p2");
p3 = document.querySelector("#p3");
p4 = document.querySelector("#p4");
p5 = document.querySelector("#p5");
p6 = document.querySelector("#p6");
p7 = document.querySelector("#p7");
p8 = document.querySelector("#p8");
p9 = document.querySelector("#p9");
p10 = document.querySelector("#p10");

pa1 = document.querySelector("#pa1");
pa2 = document.querySelector("#pa2");
pa3 = document.querySelector("#pa3");
pa4 = document.querySelector("#pa4");
pa5 = document.querySelector("#pa5");
pa6 = document.querySelector("#pa6");
pa7 = document.querySelector("#pa7");
pa8 = document.querySelector("#pa8");
pa9 = document.querySelector("#pa9");
pa10 = document.querySelector("#pa10");


/* function profiloApprofondito1Aprire(){
    if(pa1.classList.contains("profiloChiuso")){
        p1.addEventListener("click", ()=>{
            pa1.classList.add("profiloAperto")
            pa1.classList.remove("profiloChiuso")
        })
    } else {
        return 0;
    }
}

function profiloApprofondito1Chiusdere(){
    if(pa1.classList.contains("profiloAperto")){
        pa1.addEventListener("click", ()=>{
            pa1.classList.remove("profiloAperto")
            pa1.classList.add("profiloChiuso")
        })
    } else {
        return 0;
    }
}

profiloApprofondito1Aprire() */
if(pa1.classList.contains("profiloChiuso")){
    p1.addEventListener("click", ()=>{
        pa1.classList.add("profiloAperto")
        pa1.classList.remove("profiloChiuso")
    })
} else if (pa1.classList.contains("profiloAperto")){
    p1.addEventListener("click", ()=>{
        pa1.classList.add("profiloAperto")
        pa1.classList.remove("profiloChiuso")
    })
}
