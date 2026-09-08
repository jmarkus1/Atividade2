const usuario = {
  nome: "Jefferson Markus",
  endereco: {
    rua: "Av. Brasil",
    cidade: "João Pessoa",
    estado: "PB",
  },
};

// Extrai "cidade" e "estado" de dentro do objeto interno "endereco" em uma única linha
const { endereco: { cidade, estado } } = usuario;

// Exibe o resultado no console
console.log(cidade); // Saída: João Pessoa
console.log(estado); // Saída: PB
