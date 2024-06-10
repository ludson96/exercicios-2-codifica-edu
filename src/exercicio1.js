const readline = require('readline');

function calcularPerdaDeVida(cigarrosPorDia, anosFumando) {
  const minutosPerdidosPorCigarro = 10;
  const totalCigarrosFumados = cigarrosPorDia * 365 * anosFumando;
  const totalMinutosPerdidos = totalCigarrosFumados * minutosPerdidosPorCigarro;
  const diasPerdidos = totalMinutosPerdidos / 1440;
  return diasPerdidos;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Quantos cigarros você fuma por dia? ', (cigarrosPorDia) => {
    rl.question('Quantos anos você já fumou? ', (anosFumando) => {
      cigarrosPorDia = parseInt(cigarrosPorDia, 10);
      anosFumando = parseInt(anosFumando, 10);

      if (isNaN(cigarrosPorDia) || isNaN(anosFumando)) {
        console.log('Por favor, insira números válidos.');
      } else {
        const diasPerdidos = calcularPerdaDeVida(cigarrosPorDia, anosFumando);
        console.log(`Você perdeu aproximadamente ${diasPerdidos.toFixed(2)} dias de vida fumando.`);
      }

      rl.close();
    });
  });
}

main();
