const { exibirErro, validarTexto, validarAno } = require("./utils");

let livros = []; // Array para armazenar os livros

// Função para adicionar um livro ao catálogo
const adicionarLivro = (titulo, autor, ano) => {
    if (!validarTexto(titulo) || !validarTexto(autor)) {
        exibirErro(`Título ou autor inválido para o livro: "${titulo}"`);
        return;
    }

    if (!validarAno(ano)) {
        exibirErro(`Ano inválido para o livro: "${titulo}"`);
        return;
    }

    const livro = { titulo, autor, ano };
    livros.push(livro);
    console.log(`Livro "${titulo}" cadastrado com sucesso!`);
};

// Função para listar todos os livros
const listarLivros = () => {
    console.log("Lista de livros cadastrados:");
    console.log(livros);
};

// Função para buscar um livro pelo título
const buscarLivro = titulo => {
    return livros.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase()) || "Livro não encontrado.";
};

module.exports = { adicionarLivro, listarLivros, buscarLivro };
