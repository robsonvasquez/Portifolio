let form = document.querySelector("form");

async function email(){

    event.preventDefault();

    const url = "https://api-envia-email.herokuapp.com/send-email";

    let data = {
        nome: form.nome.value,
        email: form.email.value,
        assunto: form.assunto.value,
        mensagem: form.mensagem.value
    }
    
    let request = new Request (url, { 
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    });

    let response = await fetch(request);

    if(response.ok){
        alert("Email enviado com sucesso!")
        form.reset();
    }else{
        alert("Erro ao tentar enviar o email, tente novamente.")
    }

}

document.addEventListener("DOMContentLoaded",function(){
    form.addEventListener('submit', email);
});