let form = document.querySelector("form");

async function email(){ 
    event.preventDefault();

    console.log("aqui")
    const url = "https://jsonplaceholder.typicode.com/posts";

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
    console.log(response)
    console.log(response.status)
    let dat  = await response.json();
    console.log(dat)

    if(response.ok){
        alert("Email enviado com sucesso!")
        form.reset();
    }else{
        alert("Erro ao tentar enviar o email, tente novamente.")
    }

}

form.addEventListener('submit', email);