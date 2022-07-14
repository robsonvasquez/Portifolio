let tag = document.querySelector(".escrita_efeito");
let txt = tag.innerText;
let i = 0;
let c = txt.length;  
let speed = 250;

function escrita_efeito(){
    if(i <= txt.length){

        document.querySelector(".escrita_efeito").innerText = txt.slice(0, i + 1);
        i++

        if(i == txt.length){
            c = txt.length;
        }
        setTimeout(escrita_efeito, speed);
    }else{
        document.querySelector(".escrita_efeito").innerText = txt.slice(0, c - 1);
        c--

        if(c == 0){
            i = 0;
        }
        setTimeout(escrita_efeito, speed + i);
    }
}

escrita_efeito();