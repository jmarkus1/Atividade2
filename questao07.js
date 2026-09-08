// Assinatura reescrita desestruturando titulo e preco diretamente nos parâmetros:
function CardProduto({ titulo, preco }) {
  return `
    <div>
      <h3>${titulo}</h3>
      <p>R$ ${preco}</p>
      <button> Comprar</button>
    </div>
  `;
}

// Teste da função passando o objeto de propriedades (props)
console.log(CardProduto({ titulo: "Mouse Gamer", preco: 120 }));
// Saída:
//     <div>
//       <h3>Mouse Gamer</h3>
//       <p>R$ 120</p>
//       <button> Comprar</button>
//     </div>

// Desestruturar as props diretamente na assinatura do componente é considerado uma boa prática porque:
// 1. Torna explícito quais propriedades o componente espera receber, servindo como documentação direta.
// 2. Elimina a necessidade de repetir o prefixo 'props.' ao longo de todo o código.
// 3. Facilita a atribuição de valores padrão diretamente nos parâmetros da função.
