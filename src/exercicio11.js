const readline = require('readline');

function calcularPA(primeiroTermo, razao) {
  let termos = [];
  let soma = 0;

  for (let i = 0; i < 10; i++) {
    let termo = primeiroTermo + i * razao;
    termos.push(termo);
    soma += termo;
  }

  return { termos, soma };
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Digite o primeiro termo da PA: ', (primeiroTermo) => {
    rl.question('Digite a razão da PA: ', (razao) => {
      primeiroTermo = parseFloat(primeiroTermo);
      razao = parseFloat(razao);

      if (isNaN(primeiroTermo) || isNaN(razao)) {
        console.log('Por favor, insira números válidos.');
      } else {
        const { termos, soma } = calcularPA(primeiroTermo, razao);
        console.log('Os 10 primeiros elementos da PA são:', termos.join(', '));
        console.log(`A soma de todos os valores da sequência é: ${soma}`);
      }

      rl.close();
    });
  });
}

main();
