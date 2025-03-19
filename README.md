Catálogo de Livros 📖
Um sistema simples para cadastrar, listar e buscar livros utilizando JavaScript.

📌 Funcionalidades
✅ Cadastrar um livro com título, autor e ano de publicação.
✅ Listar todos os livros cadastrados.
✅ Buscar um livro pelo título.
✅ Validação de dados (evitar cadastro de livros com título ou autor inválidos e anos incorretos).
✅ Exibição de erros no console para entradas inválidas.

🛠 Tecnologias Utilizadas
Node.js (execução do JavaScript no servidor)
JavaScript (lógica do sistema)

📂 Estrutura do Projeto
catalogo-livros/
│── README.md       # Documentação do projeto
│── index.js        # Arquivo principal do sistema
│── livros.js       # Manipulação dos livros (cadastrar, listar, buscar)
│── utils.js        # Funções auxiliares (validações e erros)

🚀 Como Executar o Projeto?
1️⃣ Baixe ou clone o repositório:
git clone https://github.com/seu-usuario/catalogo-livros.git
cd catalogo-livros

2️⃣ Abra o terminal na pasta do projeto e execute:
node index.js

3️⃣ Verifique a saída no console, onde serão exibidos:

Mensagens de sucesso ao cadastrar livros.
Erros para entradas inválidas.
Listagem dos livros cadastrados.
Resultado da busca de um livro pelo título.

📋 Exemplo de Saída Esperada no Terminal
Livro "O Senhor dos Anéis" cadastrado com sucesso!
Livro "1984" cadastrado com sucesso!
⚠️ ERRO: Ano inválido para o livro: "Dom Casmurro"
Lista de livros cadastrados:
[
  { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', ano: 1954 },
  { titulo: '1984', autor: 'George Orwell', ano: 1949 }
]
{ titulo: '1984', autor: 'George Orwell', ano: 1949 }
⚠️ ERRO: Erro de exemplo

📢 Contribuição
Sinta-se à vontade para sugerir melhorias e compartilhar feedbacks! Caso encontre algum bug ou tenha sugestões, abra uma issue no repositório.

👨‍💻 Autor: Professor Helcio Padilha
Desenvolvido como material de estudo para ensino de JavaScript no Back-End.

🎯 Objetivo: Ensinar os conceitos de funções, modularização, manipulação de arrays, tratamento de erros e boas práticas em código JavaScript.

📌 Inspirado no projeto "Gerenciador de Usuários" para oferecer mais exemplos aos estudantes. 🚀