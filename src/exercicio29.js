/* Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:

  a) da linha 4 de M;
  b) da coluna 2 de M;
  c) da diagonal principal;
  d) todos os elementos da matriz M.

Escrever essas somas e a matriz. */

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

function somaLinha(matriz, linha) {
    let soma = 0;
    for (let j = 0; j < 5; j++) {
        soma += matriz[linha][j];
    }
    return soma;
}

function somaColuna(matriz, coluna) {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        soma += matriz[i][coluna];
    }
    return soma;
}

function somaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        soma += matriz[i][i];
    }
    return soma;
}

function somaTodosElementos(matriz) {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

function imprimirMatriz(matriz) {
    console.log("Matriz M:");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

lerMatriz(function (matrizM) {
    const somaLinha4 = somaLinha(matrizM, 3);
    const somaColuna2 = somaColuna(matrizM, 1);
    const somaDiagPrincipal = somaDiagonalPrincipal(matrizM);
    const somaTodos = somaTodosElementos(matrizM);

    imprimirMatriz(matrizM);
    console.log("Soma da linha 4:", somaLinha4);
    console.log("Soma da coluna 2:", somaColuna2);
    console.log("Soma da diagonal principal:", somaDiagPrincipal);
    console.log("Soma de todos os elementos:", somaTodos);

    rl.close();
});
