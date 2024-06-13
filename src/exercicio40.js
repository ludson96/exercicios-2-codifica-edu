/* Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros cada), representando as apostas feitas. Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos e quadras, apenas por quinas.) */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let resultadoOficial = [];
let apostas = [];

function lerResultadoOficial(callback) {
    console.log("Digite os 5 elementos do resultado oficial da Loto:");

    function lerElemento(i) {
        rl.question(`Elemento[${i + 1}]: `, function (elemento) {
            resultadoOficial[i] = parseInt(elemento);
            if (i < 4) {
                lerElemento(i + 1);
            } else {
                callback();
            }
        });
    }

    lerElemento(0);
}

function lerApostas(callback) {
    let numAtual = 0;

    function lerAposta() {
        if (numAtual < 50) {
            let aposta = [];
            console.log(`Digite os 5 números da aposta ${numAtual + 1}:`);
            function lerNumeroAposta(i) {
                rl.question(`Número[${i + 1}]: `, function (numero) {
                    aposta[i] = parseInt(numero);
                    if (i < 4) {
                        lerNumeroAposta(i + 1);
                    } else {
                        apostas.push(aposta);
                        numAtual++;
                        lerAposta();
                    }
                });
            }
            lerNumeroAposta(0);
        } else {
            callback();
        }
    }

    lerAposta();
}

function verificarApostas() {
    apostas.forEach((aposta, index) => {
        const ehGanhador = aposta.every((num, idx) => num === resultadoOficial[idx]);
        if (ehGanhador) {
            console.log(`Aposta ${index + 1}: Ganhador`);
        }
    });
}

lerResultadoOficial(() => {
    lerApostas(() => {
        verificarApostas();
        rl.close();
    });
});
