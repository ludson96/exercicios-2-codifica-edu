const readline = require('readline');

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let somatorio = 0;
  let menorValor = null;
  let totalValores = 0;
  let totalPares = 0;

  function perguntarNumero() {
    rl.question('Digite um número: ', (numero) => {
      numero = parseFloat(numero);

      if (isNaN(numero)) {
        console.log('Por favor, insira um número válido.');
      } else {
        somatorio += numero;
        totalValores++;

        if (menorValor === null || numero < menorValor) {
          menorValor = numero;
        }

        if (numero % 2 === 0) {
          totalPares++;
        }
      }

      rl.question('Deseja continuar? (S/N): ', (resposta) => {
        resposta = resposta.toUpperCase();

        if (resposta === 'S') {
          perguntarNumero();
        } else {
          const media = somatorio / totalValores;
          console.log(`Somatório de todos os valores: ${somatorio}`);
          console.log(`Menor valor digitado: ${menorValor}`);
          console.log(`Média entre todos os valores: ${media.toFixed(2)}`);
          console.log(`Quantidade de valores pares: ${totalPares}`);
          rl.close();
        }
      });
    });
  }

  perguntarNumero();
}

main();
