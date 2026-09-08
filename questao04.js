const produto = { nomeProduto: "Teclado", preco: 150 };

// Renomeia "nomeProduto" para "nome" e extrai "estoque" para "quantidade" com valor padrão 0
const { nomeProduto: nome, estoque: quantidade = 0 } = produto;

// Exibe o resultado da extração
console.log(nome);       // Saída: Teclado
console.log(quantidade); // Saída: 0 (valor padrão aplicado, pois "estoque" não existe no objeto)
