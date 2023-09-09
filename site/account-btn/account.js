const sessao = 
`<section id="cadastro-e-iniciar-sessao">
    <div id="titulo-iniciar-sessao">Iniciar Sessão</div>
    <div id="entrada-iniciar-sessao">
        <input type="email" class="entrada" placeholder="Email">
        <input type="password" class="entrada" placeholder="Senha">
    </div>
    <div>
        <button id="botao-ir">CONCLUIR</button>
    </div>
    <button id="troca-inversa">cadastrar-se ao invés de iniciar sessão</button>
</section>`

const cadastro =
`<section id="cadastro-e-iniciar-sessao">
    <div id="titulo-cadastro">Cadastro</div>
    <div id="entrada-cadastro">
        <input type="text" class="entrada" placeholder="Nome">
        <input type="email" class="entrada" placeholder="Email">
        <input type="text" class="entrada" placeholder="Endereço, ex: CEP - Rua e Número">
        <input type="password" class="entrada" placeholder="Senha">
    </div>
    <div>
        <button id="botao-ir">CONCLUIR</button>
    </div>
    <button id="troca">entrar ao invés de cadastrar-se</button>
</section>`

function iniciarSessao()
{
    const trocaUm = document.getElementById("principal");
    trocaUm.innerHTML = sessao;
}

function fazerCadastro()
{
    const trocaDois = document.getElementById("principal");
    trocaDois.innerHTML = cadastro;
}

function trocarRegistro()
{
    const botaoTrocaSessao = document.getElementById("troca-inversa");
    const botaoTrocaCadastro = document.getElementById("troca");

    botaoTrocaCadastro.addEventListener("click", iniciarSessao);
    botaoTrocaSessao.addEventListener("click", fazerCadastro);
}

const redirecionamentoAssinatura = document.getElementById("botao-ir");

redirecionamentoAssinatura.addEventListener("click", function() 
{
    window.location.href = "../signature/signature.html";
});

const redirecionamentoVoltarInicio = document.getElementById("botao-voltar");

redirecionamentoVoltarInicio.addEventListener("click", function() 
{
    window.location.href = "../index.html";
});
 
trocarRegistro();
inicializarMain();
  
