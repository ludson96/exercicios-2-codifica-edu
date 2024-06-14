/* Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor. */

function sumarizarVendas(vendas) {
  const totalVendasPorVendedor = {};

  for (let venda of vendas) {
      const { vendedor, valor } = venda;
      if (totalVendasPorVendedor[vendedor]) {
          totalVendasPorVendedor[vendedor] += valor;
      } else {
          totalVendasPorVendedor[vendedor] = valor;
      }
  }

  return totalVendasPorVendedor;
}

// Exemplo de uso
const vendas = [
  { vendedor: 'João', valor: 100 },
  { vendedor: 'Maria', valor: 200 },
  { vendedor: 'João', valor: 150 },
  { vendedor: 'Ana', valor: 300 },
  { vendedor: 'Maria', valor: 250 },
  { vendedor: 'João', valor: 50 },
  { vendedor: 'Ana', valor: 100 }
];

const resumoVendas = sumarizarVendas(vendas);
console.log(resumoVendas);
