const alunos = [
  { nome: "Ana", curso: "TSI" },
  { nome: "João", curso: "Redes" },
  { nome: "Rhavy", curso: "Analise de dados" },
];

// Usa desestruturação { nome, curso } diretamente no parâmetro da arrow function do .map()
const listaFormatada = alunos.map(({ nome, curso }) => `${nome} - ${curso}`);

// Exibe o array de strings resultante
console.log(listaFormatada);
// Saída: [ 'Ana - TSI', 'João - Redes', 'Rhavy - Analise de dados' ]
