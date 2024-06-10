const readline = require('readline');

function calcularPrecoPassagem(distancia) {
  const tarifaCurtaDistancia = 0.50;
  const tarifaLongaDistancia = 0.45;

  if (distancia <= 200) {
    return distancia * tarifaCurtaDistancia;
  } else {
    return distancia * tarifaLongaDistancia;
  }
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Qual a distância que você deseja percorrer em Km? ', (distancia) => {
    distancia = parseFloat(distancia);

    if (isNaN(distancia)) {
      console.log('Por favor, insira um número válido.');
    } else {
      const precoPassagem = calcularPrecoPassagem(distancia);
      console.log(`O preço da passagem é R$ ${precoPassagem.toFixed(2)}.`);
    }

    rl.close();
  });
}

main();
