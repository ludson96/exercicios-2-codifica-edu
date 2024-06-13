/* Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as multiplicações. */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lerMatriz(callback) {
    let matriz = [];
    let elementosLidos = 0;

    console.log("Digite os elementos da matriz M(50,50):");

    function lerElemento(i, j) {
        rl.question(`Digite o elemento M[${i + 1}][${j + 1}]: `, function (elemento) {
            if (!matriz[i]) {
                matriz[i] = [];
            }
            matriz[i][j] = parseFloat(elemento);
            elementosLidos++;

            if (elementosLidos < 2500) { 
                let proximoI = Math.floor(elementosLidos / 50);
                let proximoJ = elementosLidos % 50;
                lerElemento(proximoI, proximoJ);
            } else {
                callback(matriz);
            }
        });
    }

    lerElemento(0, 0);
}

function multiplicarLinhasPelaDiagonal(matriz) {
    for (let i = 0; i < 50; i++) {
        let fator = matriz[i][i]; 
        for (let j = 0; j < 50; j++) {
            matriz[i][j] *= fator;
        }
    }
    return matriz;
}

function imprimirMatriz(matriz, titulo) {
    console.log(titulo);
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

lerMatriz(function (matrizM) {
    const matrizModificada = multiplicarLinhasPelaDiagonal(matrizM);

    imprimirMatriz(matrizModificada, "Matriz Modificada:");

    rl.close();
});
