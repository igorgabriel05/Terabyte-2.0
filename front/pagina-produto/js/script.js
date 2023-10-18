document.addEventListener('DOMContentLoaded', function () {
    const strigURL = window.location.search;
    const urlParams = new URLSearchParams(strigURL);
    const id = urlParams.get('id');
    getProduto(id);
})

function getProduto(id) {
    fetch("http://localhost:8080/pagina-produto/" + id)
        .then(resposta => resposta.json())
        .then(produto => inserirProduto(produto))
        .catch(erro => console.log("Erro ao buscar produto do Banco: " + erro));
}

function inserirProduto(produto) {
    var img = document.createElement("img");
    img.src = 'data:image/jpg;base64,' + produto.img;
    img.alt = produto.descricao;
    img.classList.add("zoomImg");

    var textDesc = document.createElement("h1");
    textDesc.classList.add("descricao-prod");
    textDesc.innerText = produto.descricao;

    var spanVend = document.createElement("span");
    spanVend.classList.add("span-vendidos");
    if (produto.tipo === 1) {
        spanVend.innerText = 'MAIS VENDIDO';
    } else if (produto.tipo === 2) {
        spanVend.innerText = 'LANÇAMENTO';
    }

    var valorAntigo = document.createElement("p");
    valorAntigo.classList.add("preco-antigo");
    valorAntigo.innerHTML = 'De: <s>' + valorFormatado(produto.preco) + '</s> por:';

    var valorAvista = document.createElement("p");
    valorAvista.classList.add("preco-avista");
    valorAvista.innerText = valorFormatado((produto.preco) * 0.50);

    var pixBoleto = document.createElement("p");
    pixBoleto.classList.add("preco-desconto");
    pixBoleto.innerText = "à vista com 15% de desconto no boleto ou no pix";

    var parceladoProd = document.createElement("p");
    parceladoProd.classList.add("preco-parcelado");
    var pparcelado = produto.preco * 0.70;
    parceladoProd.innerText = valorFormatado(pparcelado);

    var parceladoDiv = document.createElement("p");
    parceladoDiv.classList.add("sem-juros");
    parceladoDiv.innerHTML = '<span>12x</span> de <span>' + valorFormatado((pparcelado) / 12) + '</span> sem juros no cartão';

    var freteGratis = document.createElement("p");
    freteGratis.classList.add("frete-gratis");
    freteGratis.innerHTML = 'ou em 6x sem juros + <span>Frete Grátis</span>';

    console.log(produto.descricao);
    console.log(produto.preco);

    document.getElementById("divImg").appendChild(img);
    document.getElementById("atribute").appendChild(textDesc);
    document.getElementById("lan-mais").appendChild(spanVend);
    document.getElementById("precoProd").appendChild(valorAntigo);
    document.getElementById("precoProd").appendChild(valorAvista);
    document.getElementById("precoProd").appendChild(pixBoleto);
    document.getElementById("precoParc").appendChild(parceladoProd);
    document.getElementById("precoParc").appendChild(parceladoDiv);
    document.getElementById("precoParc").appendChild(freteGratis);
}

function valorFormatado(valor) {
    return (valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "brl"
    }))
}