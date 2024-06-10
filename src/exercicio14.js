/* Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados. */

const readline = require('readline');

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let nomes = [];
  let contador = 0;

  function perguntarNome() {
    if (contador < 7) {
      rl.question(`Digite o nome da pessoa ${contador + 1}: `, (nome) => {
        nomes.push(nome);
        contador++;
        perguntarNome();
      });
    } else {
      console.log('Os nomes informados, na ordem inversa, são:');
      for (let i = nomes.length - 1; i >= 0; i--) {
        console.log(nomes[i]);
      }
      rl.close();
    }
  }

  perguntarNome();
}

main();
