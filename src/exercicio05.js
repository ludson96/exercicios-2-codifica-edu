const readline = require('readline');

function escolhaComputador() {
  const escolhas = ['pedra', 'papel', 'tesoura'];
  const escolhaAleatoria = Math.floor(Math.random() * 3);
  return escolhas[escolhaAleatoria];
}

function determinarVencedor(escolhaUsuario, escolhaComputador) {
  if (escolhaUsuario === escolhaComputador) {
    return 'Empate!';
  } else if (
    (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
    (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
    (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
  ) {
    return 'Você venceu!';
  } else {
    return 'Você perdeu!';
  }
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Escolha pedra, papel ou tesoura: ', (escolhaUsuario) => {
    escolhaUsuario = escolhaUsuario.toLowerCase();

    if (!['pedra', 'papel', 'tesoura'].includes(escolhaUsuario)) {
      console.log('Escolha inválida. Por favor, escolha pedra, papel ou tesoura.');
    } else {
      const escolhaComp = escolhaComputador();
      console.log(`Você escolheu: ${escolhaUsuario}`);
      console.log(`O computador escolheu: ${escolhaComp}`);
      const resultado = determinarVencedor(escolhaUsuario, escolhaComp);
      console.log(resultado);
    }

    rl.close();
  });
}

main();
