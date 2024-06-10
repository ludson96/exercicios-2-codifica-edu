const readline = require('readline');

function sortearNumero() {
  return Math.floor(Math.random() * 5) + 1;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const numeroSorteado = sortearNumero();

  rl.question('Tente adivinhar o número que o computador sorteou (entre 1 e 5): ', (palpite) => {
    const palpiteNumero = parseInt(palpite, 10);

    if (isNaN(palpiteNumero) || palpiteNumero < 1 || palpiteNumero > 5) {
      console.log('Por favor, insira um número válido entre 1 e 5.');
    } else {
      if (palpiteNumero === numeroSorteado) {
        console.log('Parabéns! Você acertou.');
      } else {
        console.log(`Que pena! O número sorteado foi ${numeroSorteado}.`);
      }
    }

    rl.close();
  });
}

main();
