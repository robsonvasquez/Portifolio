/*let tag = document.querySelector(".escrita_efeito");
let txt = tag.innerText;
console.log(txt);
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
        setTimeout(escrita_efeito, speed - i * 2.5);
    }
}

escrita_efeito();*/

let tag = document.querySelectorAll(".p");
console.log(tag)

function escrita_efeito(){

    for (var i = 0; i < tag.length; ++i) {
        txt = tag[i].outerHTML;
        console.log(tag[i].outerHTML);

        if(i <= txt.length){
            document.querySelector(".e").innerText = txt.slice(0, i + 1);
        }
    }


}

escrita_efeito();