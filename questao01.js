// Questão 1 - Conceito de Desestruturação em JavaScript:

// A desestruturação é uma sintaxe que permite extrair valores de arrays ou propriedades de objetos e atribuí-los diretamente a variáveis individuais.
// Problema que resolve:
// Na forma tradicional, era necessário acessar cada propriedade ou índice manualmente repetindo  o nome da variável principal (ex: const nome = usuario.nome; const idade = usuario.idade;).
// Com a desestruturação, o código fica mais limpo, menos verboso e reduz a repetição de código.

// Exemplo em Objeto:
const usuario = { nome: 'Lucas', idade: 25 };
const { nome, idade } = usuario; // Extrai diretamente em variáveis
console.log(nome, idade); // Saída: Lucas 25 

// Exemplo em Array:
const cores = ['Vermelho', 'Azul'];
const [primeiraCor] = cores; // Extrai o primeiro elemento
console.log(primeiraCor); // Saída: Vermelho
