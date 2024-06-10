const readline = require('readline');

function calcularMulta(velocidade) {
  const velocidadePermitida = 80;
  const valorPorKmAcima = 5;

  if (velocidade > velocidadePermitida) {
    const kmAcima = velocidade - velocidadePermitida;
    const valorMulta = kmAcima * valorPorKmAcima;
    return `Você foi multado! O valor da multa é R$ ${valorMulta.toFixed(2)}.`;
  } else {
    return 'Você está dentro do limite de velocidade.';
  }
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Qual é a velocidade do carro em km/h? ', (velocidade) => {
    velocidade = parseFloat(velocidade);

    if (isNaN(velocidade)) {
      console.log('Por favor, insira um número válido.');
    } else {
      const resultado = calcularMulta(velocidade);
      console.log(resultado);
    }

    rl.close();
  });
}

main();
