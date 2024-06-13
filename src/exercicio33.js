/* Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lerMatriz(callback) {
    let matriz = [];
    let elementosLidos = 0;

    console.log("Digite os elementos da matriz M(3,3):");

    function lerElemento(i, j) {
        rl.question(`Digite o elemento M[${i + 1}][${j + 1}]: `, function (elemento) {
            if (!matriz[i]) {
                matriz[i] = [];
            }
            matriz[i][j] = parseFloat(elemento);
            elementosLidos++;

            if (elementosLidos < 9) { // 3*3 = 9
                let proximoI = Math.floor(elementosLidos / 3);
                let proximoJ = elementosLidos % 3;
                lerElemento(proximoI, proximoJ);
            } else {
                callback(matriz);
            }
        });
    }

    lerElemento(0, 0);
}

function calcularMediaDiagonalSecundaria(matriz) {
    let soma = 0;
    for (let i = 0; i < 3; i++) {
        soma += matriz[i][2 - i];
    }
    return soma / 3;
}

function modificarMatriz(matriz, media) {
    let matrizModificada = JSON.parse(JSON.stringify(matriz));
    for (let i = 0; i < 3; i++) {
        matrizModificada[i][i] *= media;
    }
    return matrizModificada;
}

function imprimirMatriz(matriz, titulo) {
    console.log(titulo);
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

lerMatriz(function (matrizM) {
    const mediaDiagonalSecundaria = calcularMediaDiagonalSecundaria(matrizM);

    const matrizModificada = modificarMatriz(matrizM, mediaDiagonalSecundaria);

    imprimirMatriz(matrizM, "Matriz Original:");
    imprimirMatriz(matrizModificada, "Matriz Modificada:");

    rl.close();
});
