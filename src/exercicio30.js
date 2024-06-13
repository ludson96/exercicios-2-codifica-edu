/* Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz e os vetores criados.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lerMatriz(callback) {
    let matriz = [];
    let elementosLidos = 0;

    console.log("Digite os elementos da matriz M(5,5):");

    function lerElemento(i, j) {
        rl.question(`Digite o elemento M[${i + 1}][${j + 1}]: `, function (elemento) {
            if (!matriz[i]) {
                matriz[i] = [];
            }
            matriz[i][j] = parseFloat(elemento);
            elementosLidos++;

            if (elementosLidos < 25) {
                let proximoI = Math.floor(elementosLidos / 5);
                let proximoJ = elementosLidos % 5;
                lerElemento(proximoI, proximoJ);
            } else {
                callback(matriz);
            }
        });
    }

    lerElemento(0, 0);
}

function calcularSomasLinhas(matriz) {
    let somaLinhas = Array(5).fill(0);
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            somaLinhas[i] += matriz[i][j];
        }
    }
    return somaLinhas;
}

function calcularSomasColunas(matriz) {
    let somaColunas = Array(5).fill(0);
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 5; i++) {
            somaColunas[j] += matriz[i][j];
        }
    }
    return somaColunas;
}

function imprimirMatriz(matriz) {
    console.log("Matriz M:");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

function imprimirVetor(vetor, nome) {
    console.log(`${nome}: ${vetor.join(' ')}`);
}

lerMatriz(function (matrizM) {
    const somaLinhas = calcularSomasLinhas(matrizM);
    const somaColunas = calcularSomasColunas(matrizM);

    imprimirMatriz(matrizM);
    imprimirVetor(somaLinhas, "SL");
    imprimirVetor(somaColunas, "SC");

    rl.close();
});
