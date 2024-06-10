/* Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados. */

const readline = require('readline');

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let numeros = [];
  let contador = 0;

  function perguntarNumero() {
    if (contador < 10) {
      rl.question(`Digite o número inteiro ${contador + 1}: `, (numero) => {
        numero = parseInt(numero, 10);
        if (isNaN(numero)) {
          console.log('Por favor, insira um número inteiro válido.');
        } else {
          numeros.push(numero);
          contador++;
        }
        perguntarNumero();
      });
    } else {
      console.log('Os números pares digitados e suas posições são:');
      for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
          console.log(`Número ${numeros[i]} na posição ${i}`);
        }
      }
      rl.close();
    }
  }

  perguntarNumero();
}

main();
