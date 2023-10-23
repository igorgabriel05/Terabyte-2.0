btnEntrar.addEventListener("click", function () {
    if(inputUser.value === "" || inputSenha.value === ""){
        alert("Campo de usuario ou senha vazio!!");
    }else{
        fetch("http://localhost:8080/pagina-login/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: inputUser.value,
                senha: inputSenha.value
            })
        })
        .then(response => response.json())
        .then(result => cadastrar(result))
        .catch(error => {
            console.error("Erro na solicitação" + error);
        });
        
    }
});

function cadastrar(us){
    if(us != null){
        alert("Seja bem-vindo " + inputUser.value);
        limparCampos();
        window.open("http://127.0.0.1:5500/front/cadastrar.html", "_blank");
        /* window.location.href = "http://127.0.0.1:5500/front/cadastrar.html"; */
    }else{
        alert("Falha no login");
    }
}