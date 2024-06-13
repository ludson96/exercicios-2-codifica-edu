/* Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR" */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let gabarito = [];
let apostadores = [];

function lerGabarito(callback) {
    console.log("Digite os 13 elementos do gabarito:");

    function lerElemento(i) {
        rl.question(`Gabarito[${i + 1}]: `, function (elemento) {
            gabarito[i] = parseInt(elemento);
            if (i < 12) {
                lerElemento(i + 1);
            } else {
                callback();
            }
        });
    }

    lerElemento(0);
}

function lerApostadores(callback) {
    let numApostador = 0;

    function lerApostador() {
        if (numApostador < 100) {
            let apostador = { numero: null, respostas: [] };
            rl.question(`Número do cartão do apostador ${numApostador + 1}: `, function (numero) {
                apostador.numero = numero;
                console.log(`Digite as 13 respostas do apostador ${numero}:`);
                function lerResposta(i) {
                    rl.question(`Resposta[${i + 1}]: `, function (resposta) {
                        apostador.respostas[i] = parseInt(resposta);
                        if (i < 12) {
                            lerResposta(i + 1);
                        } else {
                            apostadores.push(apostador);
                            numApostador++;
                            lerApostador();
                        }
                    });
                }
                lerResposta(0);
            });
        } else {
            callback();
        }
    }

    lerApostador();
}

function verificarAcertos() {
    apostadores.forEach(apostador => {
        let acertos = 0;
        for (let i = 0; i < 13; i++) {
            if (apostador.respostas[i] === gabarito[i]) {
                acertos++;
            }
        }
        console.log(`Apostador ${apostador.numero} teve ${acertos} acertos.`);
        if (acertos === 13) {
            console.log("Parabéns, tu foi o GANHADOR");
        }
    });
}

lerGabarito(() => {
    lerApostadores(() => {
        verificarAcertos();
        rl.close();
    });
});
