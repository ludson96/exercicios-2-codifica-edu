const readline = require('readline');

function calcularPontos(horas) {
  let pontos = 0;

  if (horas <= 10) {
    pontos = horas * 2;
  } else if (horas <= 20) {
    pontos = (10 * 2) + ((horas - 10) * 5);
  } else {
    pontos = (10 * 2) + (10 * 5) + ((horas - 20) * 10);
  }

  return pontos;
}

function calcularDinheiro(pontos) {
  return pontos * 0.05;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Quantas horas de atividade física você teve no mês? ', (horas) => {
    horas = parseFloat(horas);

    if (isNaN(horas) || horas < 0) {
      console.log('Por favor, insira um número válido de horas.');
    } else {
      const pontos = calcularPontos(horas);
      const dinheiro = calcularDinheiro(pontos);
      console.log(`Você ganhou ${pontos} pontos.`);
      console.log(`Você faturou R$ ${dinheiro.toFixed(2)}.`);
    }

    rl.close();
  });
}

main();
