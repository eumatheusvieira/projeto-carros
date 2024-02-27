let listaCarros = [
    {
        "nome": "Eclipse",
        "img" : "img/eclipse.webp",
        "descricao": "Carro Teste."
    },
    {
        "nome": "R34",
        "img" : "img/r34.jpg",
        "descricao": "Carro Teste."
    },
    {
        "nome": "Supra",
        "img" : "img/supra.jpg",
        "descricao": "Carro Teste."
    },
    {
        "nome": "R35",
        "img" : "img/r35.webp",
        "descricao": "Carro Teste."
    },
    {
        "nome": "Lancer Evo",
        "img" : "img/evo.webp",
        "descricao": "Carro Teste."
    },
    {
        "nome": "Subaru WRX",
        "img" : "img/subaru.avif",
        "descricao": "Carro Teste."
    },
]

listaCarros.map((carro, posicao)=> {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
    <div class="col-md-4">
        <div class="card m-4">
            <img src="${carro.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${carro.nome}</h5>
            <a href="#" class="btn btn-secondary" onclick = "zoomImg(${posicao})"><i class="bi bi-zoom-in"></i></a>
            </div>
        </div>
    </div>
    `
})

function zoomImg(posicao){
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();
}

function alterarTemaSite() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if (tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`;
    }else {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill""></i>`;
    }
}
