/* Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados. */

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 100);
}

function main() {
  let vetor = [];

  for (let i = 0; i < 20; i++) {
    vetor.push(gerarNumeroAleatorio());
  }

  console.log('Números gerados:');
  console.log(vetor.join(', '));

  vetor.sort((a, b) => a - b);

  console.log('Números ordenados em ordem crescente:');
  console.log(vetor.join(', '));
}

main();
