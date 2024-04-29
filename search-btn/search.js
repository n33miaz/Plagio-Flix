const listaDeFilmes = [
    {
        id: 1,
        nome: "Oppenheimer",
        avaliacao: "8,6/10 IMDb",
        nota: "93% Tomates",
        imagem: "produto-1.jpg",
        categorias: ["Ficcão Científica, Drama"],
        trailer: "https://www.youtube.com/watch?v=bpoE3gK46nc",
    },
    {
        id: 2,
        nome: "Cavaleiro das Trevas",
        avaliacao: "9/10 IMDb",
        nota: "94% Tomates",
        imagem: "produto-2.jpg",
        categorias: ["Ação, Suspense"],
        trailer: "https://www.youtube.com/watch?v=8sB1HTghkg4",
    },
    {
        id: 3,
        nome: "Besouro Azul",
        avaliacao: "3,6/5 IMDb",
        nota: "78% Tomates",
        imagem: "produto-3.jpg",
        categorias: ["Ação, Aventura, Ficção científica"],
        trailer: "https://www.youtube.com/watch?v=IZw2slPIoGs",
    },
    {
        id: 4,
        nome: "Passaro Branco",
        avaliacao: "6,8/10 IMDb",
        nota: "60% Tomates",
        imagem: "produto-4.jpg",
        categorias: ["Drama, Família"],
        trailer: "https://www.youtube.com/watch?v=gmG2Ah2EgUk",
    },
    {
        id: 5,
        nome: "Drácula",
        avaliacao: "6,2/10 IMDb",
        nota: "72% Tomates",
        imagem: "produto-5.jpg",
        categorias: ["Terror"],
        trailer: "https://www.youtube.com/watch?v=06X8J4aFfoQ",
    },
    {
        id: 6,
        nome: "Golda",
        avaliacao: "8,3/10 IMDb",
        nota: "64% Tomates",
        imagem: "produto-6.jpg",
        categorias: ["Drama"],
        trailer: "https://www.youtube.com/watch?v=ajq2iXdgbWc",
    },
    {
        id: 7,
        nome: "Mistério em Veneza",
        avaliacao: "7,6/10 IMDb",
        nota: "87% Tomates",
        imagem: "produto-7.jpg",
        categorias: ["Terror"],
        trailer: "https://www.youtube.com/watch?v=SbcvRLlbbcw",
    },
    {
        id: 8,
        nome: "Os Fabelmans",
        avaliacao: "8,9/10 IMDb",
        nota: "40% Tomates",
        imagem: "produto-8.jpg",
        categorias: ["Drama"],
        trailer: "https://www.youtube.com/watch?v=zyvA0vn63Jw",
    },
    {
        id: 9,
        nome: "Guardiões da Galáxia",
        avaliacao: "7,1/10 IMDb",
        nota: "95% Tomates",
        imagem: "produto-9.jpg",
        categorias: ["Comédia, Ação"],
        trailer: "https://www.youtube.com/watch?v=d1yNc9skssk",
    },
    {
        id: 10,
        nome: "Wonka",
        avaliacao: "8,6/10 IMDb",
        nota: "89% Tomates",
        imagem: "produto-10.jpg",
        categorias: ["Aventura, Fantasia, Comédia, Família"],
        trailer: "https://www.youtube.com/watch?v=-6hA1BxpdRk",
    },
]; // o export/import esta dando erro tive que importar diretamente o catalogo

const redirecionamentoLogo = document.getElementById("botao-logo");

redirecionamentoLogo.addEventListener("click", function() {
    window.location.href = "../index.html";
});

const redirecionamentoBotaoVoltar = document.getElementById("botao-voltar");

redirecionamentoBotaoVoltar.addEventListener("click", function() 
{
    window.location.href = "../index.html";
});

function filtrarFilmes() {
    const categoriaSelecionada = document.getElementById("categoria").value;
    const textoBusca = document.getElementById("busca").value.toLowerCase();

    const resultados = listaDeFilmes.filter(filme => {
        const categoriaValida = categoriaSelecionada === "todos" || filme.categorias.includes(categoriaSelecionada);

        const textoValido = filme.nome.toLowerCase().includes(textoBusca);

        return categoriaValida && textoValido;
    });

    exibirResultados(resultados);
}

function exibirResultados(filmes) {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; 

    if (filmes.length === 0) {
        resultadosDiv.innerHTML = "<p>Nenhum filme encontrado.</p>";
    } else {
        filmes.forEach(filme => {
            const card = document.createElement("div");
            card.innerHTML = `
                <h2>${filme.nome}</h2>
                <p>Avaliação: ${filme.avaliacao}</p>
                <p>Nota: ${filme.nota}</p>
                <img src="${filme.imagem}" alt="${filme.nome}">
            `;
            resultadosDiv.appendChild(card);
        });
    }
}


