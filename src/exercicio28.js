/* Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:

  a) a soma dos elementos acima da diagonal principal;
  b) a soma dos elementos abaixo da diagonal principal; */


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lerMatriz(callback) {
    let matriz = [];
    let elementosLidos = 0;

    console.log("Digite os elementos da matriz M(10,10):");

    function lerElemento(i, j) {
        rl.question(`Digite o elemento M[${i + 1}][${j + 1}]: `, function (elemento) {
            if (!matriz[i]) {
                matriz[i] = [];
            }
            matriz[i][j] = parseFloat(elemento);
            elementosLidos++;

            if (elementosLidos < 100) {
                let proximoI = Math.floor(elementosLidos / 10);
                let proximoJ = elementosLidos % 10;
                lerElemento(proximoI, proximoJ);
            } else {
                callback(matriz);
            }
        });
    }

    lerElemento(0, 0);
}

function somaAcimaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = i + 1; j < 10; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

function somaAbaixoDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 1; i < 10; i++) {
        for (let j = 0; j < i; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

lerMatriz(function (matrizM) {
    const somaAcima = somaAcimaDiagonalPrincipal(matrizM);
    console.log("Soma dos elementos acima da diagonal principal:", somaAcima);

    const somaAbaixo = somaAbaixoDiagonalPrincipal(matrizM);
    console.log("Soma dos elementos abaixo da diagonal principal:", somaAbaixo);

    rl.close();
});
