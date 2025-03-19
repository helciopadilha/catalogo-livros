const { adicionarLivro, listarLivros, buscarLivro } = require("./livros");
const { exibirErro } = require("./utils");

// Adicionando livros ao catálogo
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
adicionarLivro("1984", "George Orwell", 1949);
adicionarLivro("Dom Casmurro", "Machado de Assis", "ano inválido");

// Listando livros cadastrados
listarLivros();

// Buscando um livro pelo título
console.log(buscarLivro("1984"));

// Testando erro genérico
exibirErro("Erro de exemplo");
