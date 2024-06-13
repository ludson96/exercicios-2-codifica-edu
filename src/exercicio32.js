/* Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a matriz lida e a modificada.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lerMatriz(callback) {
    let matriz = [];
    let elementosLidos = 0;

    console.log("Digite os elementos da matriz M(12,13):");

    function lerElemento(i, j) {
        rl.question(`Digite o elemento M[${i + 1}][${j + 1}]: `, function (elemento) {
            if (!matriz[i]) {
                matriz[i] = [];
            }
            matriz[i][j] = parseFloat(elemento);
            elementosLidos++;

            if (elementosLidos < 156) { // 12*13 = 156
                let proximoI = Math.floor(elementosLidos / 13);
                let proximoJ = elementosLidos % 13;
                lerElemento(proximoI, proximoJ);
            } else {
                callback(matriz);
            }
        });
    }

    lerElemento(0, 0);
}

function encontrarMaiorElementoModulo(linha) {
    let maior = 0;
    for (let j = 0; j < linha.length; j++) {
        if (Math.abs(linha[j]) > Math.abs(maior)) {
            maior = linha[j];
        }
    }
    return maior;
}

function dividirLinhaPorMaiorElemento(linha, maiorElemento) {
    return linha.map(elemento => elemento / maiorElemento);
}

function modificarMatriz(matriz) {
    let matrizModificada = [];
    for (let i = 0; i < matriz.length; i++) {
        let maiorElemento = encontrarMaiorElementoModulo(matriz[i]);
        matrizModificada[i] = dividirLinhaPorMaiorElemento(matriz[i], maiorElemento);
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
    const matrizModificada = modificarMatriz(matrizM);

    imprimirMatriz(matrizM, "Matriz Original:");
    imprimirMatriz(matrizModificada, "Matriz Modificada:");

    rl.close();
});
