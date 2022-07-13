function q(){

    let tag = document.querySelector(".escrita_efeito");
    let txt = tag.textContent;
    let i = 13; 
    let speed = 180;
    console.log("-------------------------------------------")

    escrita_efeito(txt, i, speed)
}

function escrita_efeito(txt, i, speed){
    console.log("i",i)
    console.log("t",txt.slice(13,i))
    if(i <= 113){
        document.querySelector(".escrita_efeito").innerText = txt.slice(13, i);
        console.log("if",i, speed, txt.slice(13, i))
        i++
        let a= "hhh"
        setTimeout(escrita_efeito(txt.slice(0, a.length - 1), i, speed), 180);
    }
}

q();