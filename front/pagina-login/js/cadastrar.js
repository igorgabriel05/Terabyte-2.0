btnInserir.addEventListener("click", function () {
    if(inputUsuario.value === "" || inputPass.value === ""){
        alert("Usuario ou senha invalidos!!");
    }else{
        cadastro();
        alert("Usuario cadastrado com sucesso!!");
    }
})

function cadastro(){
    fetch("http://localhost:8080/pagina-login/", {
        headers:{
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            'user': inputUsuario.value,
            'senha': inputPass.value
        })
    })
    /* alert("Cadastrou"); */
}