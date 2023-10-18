function selecionar(btn){
    btn.addEventListener('click', function(){
        var row = this.closest("tr");
        putId.value     = row.querySelector(".col-id").innerText;
        /* putImg.value    = row.querySelector(".col-img").innerText; */
        putDesc.value   = row.querySelector(".col-desc").innerText;
        putPreco.value  = row.querySelector(".col-preco").innerText;

        if(row.querySelector(".tipo").innerText === "MAIS VENDIDOS"){
            putType1.checked = true;
        }else if(row.querySelector(".tipo").innerText === "LANÇAMENTOS"){
            putType2.checked = true;
        }

        mostrarBtn();
        mostrar = false;
    })
}