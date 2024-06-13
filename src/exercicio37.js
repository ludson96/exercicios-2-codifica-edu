/* Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12; e mostre uma mensagem de “REPROVADO”, caso contrário.  */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let gabarito = [];
let alunos = [];
const numAlunos = 50;
const numQuestoes = 20;

function lerGabarito(callback) {
    console.log("Digite os 20 elementos do gabarito (caracteres):");

    function lerElemento(i) {
        rl.question(`Gabarito[${i + 1}]: `, function (elemento) {
            gabarito[i] = elemento.toUpperCase();
            if (i < numQuestoes - 1) {
                lerElemento(i + 1);
            } else {
                callback();
            }
        });
    }

    lerElemento(0);
}

function lerAlunos(callback) {
    let numAtual = 0;

    function lerAluno() {
        if (numAtual < numAlunos) {
            let respostas = [];
            console.log(`Digite as respostas do aluno ${numAtual + 1}:`);
            function lerResposta(i) {
                rl.question(`Resposta[${i + 1}]: `, function (resposta) {
                    respostas[i] = resposta.toUpperCase();
                    if (i < numQuestoes - 1) {
                        lerResposta(i + 1);
                    } else {
                        alunos.push(respostas);
                        numAtual++;
                        lerAluno();
                    }
                });
            }
            lerResposta(0);
        } else {
            callback();
        }
    }

    lerAluno();
}

function verificarAcertos() {
    alunos.forEach((respostas, index) => {
        let acertos = 0;
        for (let i = 0; i < numQuestoes; i++) {
            if (respostas[i] === gabarito[i]) {
                acertos++;
            }
        }
        console.log(`Aluno ${index + 1} teve ${acertos} acertos.`);
        if (acertos >= 12) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    });
}

lerGabarito(() => {
    lerAlunos(() => {
        verificarAcertos();
        rl.close();
    });
});
