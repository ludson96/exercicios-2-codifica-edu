const readline = require('readline');

function calcularCustoAluguel(tipoCarro, dias, km) {
  let custoDiario;
  let custoKm;

  if (tipoCarro === 'popular') {
    custoDiario = 90.00;
    if (km <= 100) {
      custoKm = km * 0.20;
    } else {
      custoKm = 100 * 0.20 + (km - 100) * 0.10;
    }
  } else if (tipoCarro === 'luxo') {
    custoDiario = 150.00;
    if (km <= 200) {
      custoKm = km * 0.30;
    } else {
      custoKm = 200 * 0.30 + (km - 200) * 0.25;
    }
  } else {
    return null;
  }

  return custoDiario * dias + custoKm;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Qual é o tipo de carro alugado (popular ou luxo)? ', (tipoCarro) => {
    rl.question('Quantos dias de aluguel? ', (dias) => {
      rl.question('Quantos Km foram percorridos? ', (km) => {
        tipoCarro = tipoCarro.toLowerCase();
        dias = parseInt(dias, 10);
        km = parseFloat(km);

        if (!['popular', 'luxo'].includes(tipoCarro)) {
          console.log('Tipo de carro inválido. Por favor, escolha "popular" ou "luxo".');
        } else if (isNaN(dias) || isNaN(km)) {
          console.log('Por favor, insira números válidos para dias e Km.');
        } else {
          const custo = calcularCustoAluguel(tipoCarro, dias, km);
          if (custo !== null) {
            console.log(`O preço total a ser pago é R$ ${custo.toFixed(2)}.`);
          } else {
            console.log('Erro ao calcular o custo do aluguel.');
          }
        }

        rl.close();
      });
    });
  });
}

main();
