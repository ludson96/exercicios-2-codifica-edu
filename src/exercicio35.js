/* Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let valores = [];
let pares = [];
let impares = [];

console.log("Digite 30 valores");

function processarValor(valor) {
    valor = parseInt(valor);
    if (valor % 2 === 0) {
        pares.push(valor);
        if (pares.length === 5) {
            console.log("Vetor de Pares cheio:", pares);
            pares = [];
        }
    } else {
        impares.push(valor);
        if (impares.length === 5) {
            console.log("Vetor de Ímpares cheio:", impares);
            impares = [];
        }
    }
}

function lerValores(i) {
    if (i < 30) {
        rl.question(`Digite o valor ${i + 1}: `, function (valor) {
            processarValor(valor);
            lerValores(i + 1);
        });
    } else {
        if (pares.length > 0) {
            console.log("Vetor de Pares final:", pares);
        }
        if (impares.length > 0) {
            console.log("Vetor de Ímpares final:", impares);
        }
        rl.close();
    }
}

lerValores(0);
