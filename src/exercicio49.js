/* Você recebe um array de objetos representando transações financeiras. Cada transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria. Adicionalmente, inclua um subtotal de valores por categoria. */

function organizarTransacoes(transacoes) {
  const resultado = {};

  for (let transacao of transacoes) {
      const { id, valor, data, categoria } = transacao;

      if (!resultado[categoria]) {
          resultado[categoria] = {
              transacoes: [],
              subtotal: 0
          };
      }

      resultado[categoria].transacoes.push({ id, valor, data });

      resultado[categoria].subtotal += valor;
  }

  return resultado;
}

// Exemplo de uso
const transacoes = [
  { id: 1, valor: 100, data: '2023-01-01', categoria: 'Alimentação' },
  { id: 2, valor: 50, data: '2023-01-02', categoria: 'Transporte' },
  { id: 3, valor: 200, data: '2023-01-03', categoria: 'Alimentação' },
  { id: 4, valor: 150, data: '2023-01-04', categoria: 'Educação' },
  { id: 5, valor: 70, data: '2023-01-05', categoria: 'Transporte' },
  { id: 6, valor: 30, data: '2023-01-06', categoria: 'Lazer' }
];

const transacoesOrganizadas = organizarTransacoes(transacoes);
console.log(transacoesOrganizadas);
