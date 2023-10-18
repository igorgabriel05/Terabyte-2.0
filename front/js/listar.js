function getListar(){
    fetch("http://localhost:8080/")
    .then(resposta => resposta.json())
    .then(produtos => listar(produtos))
    .catch(erro => console.log("Ocorreu um erro ao listar: " + erro))
}


function listar(produtos) {
    produtos.forEach(p => {
        if(p.tipo === 1){
            document.getElementById("mais-vendidos").appendChild(inserir(p));
        }else if(p.tipo === 2){
            document.getElementById("lancamentos").appendChild(inserir(p));
        }
    });
}


function inserir(p) {
    var divProd = document.createElement("div");
    divProd.classList.add("div-produto");

    var flexbox = document.createElement("div");
    flexbox.classList.add("flexbox");
    divProd.appendChild(flexbox);

    var desconto = document.createElement("div");
    desconto.classList.add("desconto");
    desconto.innerHTML = "<span>50%</span> OFF";
    flexbox.appendChild(desconto);
    
    var semana = document.createElement("div");
    semana.classList.add("semana");
    semana.innerText = "Semana do Clutch";
    flexbox.appendChild(semana);

    var img = document.createElement("img");
    img.src = 'data:image/jpg;base64,' + p.img;
    img.alt = p.descricao;
    img.classList.add("div-img-produto");
    var link = document.createElement("a");
    link.setAttribute("href", "./pagina-produto/?id=" + p.id);
    link.setAttribute("target", "_blank" );
    link.appendChild(img);
    divProd.appendChild(link);

    var descProd = document.createElement("p");
    descProd.classList.add("p-descri-produto");
    descProd.innerText = p.descricao;
    divProd.appendChild(descProd);

    var valorProd = document.createElement("p");
    valorProd.classList.add("p-valor");
    valorProd.innerHTML = '<s>De: ' + valorFormatado(p.preco) + '</s> por';
    divProd.appendChild(valorProd);

    var avistaProd = document.createElement("p");
    avistaProd.classList.add("p-a-vista");
    avistaProd.innerHTML = valorFormatado((p.preco) * 0.50) + '<span class="span-a-vista"> à vista</span>';
    divProd.appendChild(avistaProd);

    var pparcelado = p.preco * 0.70;
    var parceladoProd = document.createElement("p");
    parceladoProd.classList.add("p-parcelado");
    parceladoProd.innerText = '12x de ' + valorFormatado((pparcelado) / 12) + ' sem juros';
    divProd.appendChild(parceladoProd);

    return divProd;
}

getListar();

function valorFormatado(valor){
    return (valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "brl"
    }))
}