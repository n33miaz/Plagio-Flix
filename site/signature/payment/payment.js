const redirecionamentoVoltarAssinatura = document.getElementById("botao-voltar");

redirecionamentoVoltarAssinatura.addEventListener("click", function() {
    window.location.href = "../signature.html";
});

const redirecionamentoConclusao = document.getElementById("botao-assinar");

redirecionamentoConclusao.addEventListener("click", function() {
    window.location.href = "./conclusion/conclusion.html";
});