let inputUsuario = document.getElementById("input-cad");
let inputPass = document.getElementById("input-pass");
let inputUser = document.getElementById("input-user");
let inputSenha = document.getElementById("input-senha");

let h1Login = document.getElementById("h1-login");
let h1Cad = document.getElementById("h1-cad");

let btnEntrar = document.getElementById("btn-entrar")
let btnCad = document.getElementById("btn-cad");
let btnInserir = document.getElementById("btn-inserir");
let btnCancelar = document.getElementById("btn-cancelar");

let sectionLogin = document.getElementById("login");
let mostrar = true;

function mostrarBtn(){
    if(mostrar){
        inputUsuario.classList.toggle("visually-hidden");
        inputPass.classList.toggle("visually-hidden");
        inputUser.classList.toggle("visually-hidden");
        inputSenha.classList.toggle("visually-hidden");
        h1Cad.classList.toggle("visually-hidden");
        h1Login.classList.toggle("visually-hidden");
        btnEntrar.classList.toggle("visually-hidden");
        btnCad.classList.toggle("visually-hidden");
        btnInserir.classList.toggle("visually-hidden");
        btnCancelar.classList.toggle("visually-hidden");
        sectionLogin.classList.toggle("color-red");
    }
}

function limparCampos(){
    inputUser.value = "";
    inputUsuario.value = "";
    inputSenha.value = "";
    inputPass.value = "";
}

btnCancelar.addEventListener("click", function(){
    mostrar = true;
    mostrarBtn();
})

btnCad.addEventListener("click", function(){
    mostrar = true;
    mostrarBtn();
})