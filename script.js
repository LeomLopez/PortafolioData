// Seleção dos elementos
const form = document.getElementById("form-contato");
const mensagemRetorno = document.getElementById("mensagem-retorno");

// Evento de envio do formulário
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio real

    // Captura dos valores
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Validação dos campos vazios
    if (!nome || !email || !mensagem) {
        mostrarMensagem("Por favor, preencha todos os campos.", "erro");
        return;
    }

    // Validação simples de email
    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!padraoEmail.test(email)) {
        mostrarMensagem("Informe um e-mail válido.", "erro");
        return;
    }

    // Simulação de envio e reset
    form.reset();
    mostrarMensagem("Mensagem enviada com sucesso!", "sucesso");
});

// Função para exibir mensagem ao usuário
function mostrarMensagem(texto, tipo) {
    mensagemRetorno.textContent = texto;

    if (tipo === "sucesso") {
        mensagemRetorno.style.color = "#4ade80"; // verde
    } else {
        mensagemRetorno.style.color = "#f87171"; // vermelho
    }

    mensagemRetorno.style.fontWeight = "600";
}
