//Efeito apresentação

let tags = document.querySelectorAll(".escreve_efeito");
const array_palavra = ["Olá,", "Meu nome é", "Robson Vasquez", "Desenvolvedor Web..."];
let index_array = 0;
let i = 0;
let j = 1;
let speed = 190;

tags.forEach(e => {
    e.textContent = ""
});

function escrita_efeito_apresentacao(){

    if(index_array < array_palavra.length && i < array_palavra[index_array].length){
        
        tags[index_array].textContent += array_palavra[index_array].charAt(i);
        i++;

        if(i == array_palavra[index_array].length && index_array < array_palavra.length){

            if(index_array != array_palavra.length - 1){
                tags[index_array].classList.remove("cursor");
            }
            
            index_array++;
            i = 0;

            if(index_array < array_palavra.length && !tags[index_array].classList.contains("cursor")){
                tags[index_array].classList.add("cursor");
            }
        }

        setTimeout(escrita_efeito_apresentacao, speed);
    }else{  
            i = 999999;
            j++;

            tags[index_array-1].textContent = array_palavra[index_array-1].substring(0, array_palavra[index_array-1].length - j)
            
            if(j == array_palavra[index_array-1].length){

                tags[index_array-1].classList.remove("cursor");
                index_array--;   
                j = 0;
                
                if(index_array>0){
                    tags[index_array-1].classList.add("cursor");
                }

                if(index_array == 0){
                    i=0;
                }
            }

            setTimeout(escrita_efeito_apresentacao, speed);    
    }
}

//Fim apresentação

//Click botão menu hamburger

let btn = document.querySelector(".bar");
let links = document.querySelector(".links");

function toggle_menu(){

    let nav = document.querySelector("nav");
    nav.classList.toggle("active");

    let active = nav.classList.contains("active");
    active ? btn.ariaLabel = "Fechar menu" : btn.ariaLabel = "Abrir menu";
    btn.ariaExpanded = active;
}

//fim menu hamburger

document.addEventListener("DOMContentLoaded",function(){

    escrita_efeito_apresentacao();
    btn.addEventListener("click", toggle_menu);
    links.addEventListener("click", toggle_menu);
});