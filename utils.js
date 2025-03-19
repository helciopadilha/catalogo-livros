// Função para exibir erros no console
const exibirErro = mensagem => {
    console.error(`⚠️ ERRO: ${mensagem}`);
};

// Função para validar texto (Título e Autor)
const validarTexto = texto => {
    return typeof texto === "string" && texto.trim().length > 0;
};

// Função para validar o ano de publicação
const validarAno = ano => {
    return typeof ano === "number" && ano > 0;
};

module.exports = { exibirErro, validarTexto, validarAno };
