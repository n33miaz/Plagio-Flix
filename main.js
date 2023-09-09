const catalogo = [
    {
        id: 1,
        nome: "Oppenheimer",
        avaliacao: "8,6/10 IMDb",
        nota: "93% Tomates",
        imagem: "produto-1.jpg",
        trailer: "https://www.youtube.com/watch?v=bpoE3gK46nc",
    },
    {
        id: 2,
        nome: "Cavaleiro das Trevas",
        avaliacao: "9/10 IMDb",
        nota: "94% Tomates",
        imagem: "produto-2.jpg",
        trailer: "https://www.youtube.com/watch?v=8sB1HTghkg4",
    },
    {
        id: 3,
        nome: "Besouro Azul",
        avaliacao: "3,6/5 IMDb",
        nota: "78% Tomates",
        imagem: "produto-3.jpg",
        trailer: "https://www.youtube.com/watch?v=IZw2slPIoGs",
    },
    {
        id: 4,
        nome: "Pássaro Branco",
        avaliacao: "6,8/10 IMDb",
        nota: "60% Tomates",
        imagem: "produto-4.jpg",
        trailer: "https://www.youtube.com/watch?v=gmG2Ah2EgUk",
    },
    {
        id: 5,
        nome: "Drácula",
        avaliacao: "6,2/10 IMDb",
        nota: "72% Tomates",
        imagem: "produto-5.jpg",
        trailer: "https://www.youtube.com/watch?v=06X8J4aFfoQ",
    },
    {
        id: 6,
        nome: "Golda",
        avaliacao: "8,3/10 IMDb",
        nota: "64% Tomates",
        imagem: "produto-6.jpg",
        trailer: "https://www.youtube.com/watch?v=ajq2iXdgbWc",
    },
    {
        id: 7,
        nome: "Mistério em Veneza",
        avaliacao: "7,6/10 IMDb",
        nota: "87% Tomates",
        imagem: "produto-7.jpg",
        trailer: "https://www.youtube.com/watch?v=SbcvRLlbbcw",
    },
    {
        id: 8,
        nome: "Os Fabelmans",
        avaliacao: "8,9/10 IMDb",
        nota: "40% Tomates",
        imagem: "produto-8.jpg",
        trailer: "https://www.youtube.com/watch?v=zyvA0vn63Jw",
    },
    {
        id: 9,
        nome: "Guardiões da Galáxia",
        avaliacao: "7,1/10 IMDb",
        nota: "95% Tomates",
        imagem: "produto-9.jpg",
        trailer: "https://www.youtube.com/watch?v=d1yNc9skssk",
    },
    {
        id: 10,
        nome: "Wonka",
        avaliacao: "8,6/10 IMDb",
        nota: "89% Tomates",
        imagem: "produto-10.jpg",
        trailer: "https://www.youtube.com/watch?v=-6hA1BxpdRk",
    },
];

for (const produtoCatalogo of catalogo) 
{
    const cartaoProduto = 
        `<div class="borda-produto", class="invisivel" id="card-produto-${produtoCatalogo.id}">
            <a href="${produtoCatalogo.trailer}" target="_blank">
                <img class="imagem" src="./assets/img/${produtoCatalogo.imagem}
                "alt="Filme ${produtoCatalogo.id}: ${produtoCatalogo.nome}"style="height: 250px;">
                <p class="nome">${produtoCatalogo.nome}</p>
                <div class="texto-produto">
                    <p class="avaliacao">${produtoCatalogo.avaliacao}</p>
                    <p class="nota">${produtoCatalogo.nota}</p>
                </div>
            </a>
        </div>`;
        
    document.getElementById("secao-produtos").innerHTML += cartaoProduto;
};

document.addEventListener("DOMContentLoaded", function() {
    for (const produtoCatalogo of catalogo) {
        const cardId = `card-produto-${produtoCatalogo.id}`;
        const botaoProduto = document.querySelector(`#${cardId} .botao-produto`);
        const trailerLink = produtoCatalogo.trailer;

        botaoProduto.addEventListener("click", function() {
            window.open(trailerLink, "_blank");
        });
    }
});

const redirecionamentoPesquisa = document.getElementById("botao-pesquisa");

redirecionamentoPesquisa.addEventListener("click", function() 
{
    window.location.href = "./search-btn/search.html";
});

const redirecionamentoConta = document.getElementById("botao-conta");

redirecionamentoConta.addEventListener("click", function() 
{
    window.location.href = "./account-btn/account.html";
});

const redirecionamentoAssinaturaPropaganda = document.getElementById("botao-propaganda");

redirecionamentoAssinaturaPropaganda.addEventListener("click", function() 
{
    window.location.href = "./signature/signature.html";
});

function abrirSobreMim()
{
    document.getElementById("sobre-mim-id").classList.remove("sobre-mim");
    document.getElementById("sobre-mim-id").classList.add("aberto");
}

function fecharSobreMim()
{
    document.getElementById("sobre-mim-id").classList.remove("aberto");
    document.getElementById("sobre-mim-id").classList.add("sobre-mim");
}

function inicializarSobreMim()
{
    const botaoFecharSobreMim = document.getElementById("botao-logo-fechar");
    const botaoAbrirSobreMim = document.getElementById("botao-logo");

    botaoFecharSobreMim.addEventListener("click", fecharSobreMim);
    botaoAbrirSobreMim.addEventListener("click", abrirSobreMim);
}

inicializarSobreMim();
fecharSobreMim()
