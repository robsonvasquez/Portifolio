let tags = document.querySelectorAll(".escreve_efeito");
//const array_palavra = ["Olá,", "Meu nome é", "Robson Vasquez", "Desenvolvedor Web..."];
const array_palavra = ["Ooooo", "Mmmm", "Rrrrr", "Ddddd"];
let index_array = 0;
let i = 0;
let j = 0;

function escrita_efeito(){

    if(index_array < array_palavra.length && i < array_palavra[index_array].length){

        console.log(array_palavra.length, array_palavra[index_array], i, index_array);
        
        tags[index_array].textContent += array_palavra[index_array].charAt(i);
        i++;
        j++;

        if(i == array_palavra[index_array].length && index_array < array_palavra.length){
            index_array++;
            i = 0;
        }

        setTimeout(escrita_efeito, 200);
    }else{

        if(j > 0){

            console.log("j", j, index_array);
            
            console.log(tags[index_array-1].textContent = array_palavra[index_array-1].substring(0, array_palavra[index_array-1] - 1));
            j--;
            setTimeout(escrita_efeito, 200);

        }
        
    }
}

escrita_efeito();
