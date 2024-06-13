/* Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em um vetor V(36). Escrever o vetor V no final. */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lerMatriz(callback) {
    let matriz = [];
    let elementosLidos = 0;

    console.log("Digite os elementos da matriz M(6,6)");

    function lerElemento(i, j) {
        rl.question(`Digite o elemento M[${i + 1}][${j + 1}]: `, function (elemento) {
            if (!matriz[i]) {
                matriz[i] = [];
            }
            matriz[i][j] = parseFloat(elemento);
            elementosLidos++;

            if (elementosLidos < 36) {
                let proximoI = Math.floor(elementosLidos / 6);
                let proximoJ = elementosLidos % 6;
                lerElemento(proximoI, proximoJ);
            } else {
                callback(matriz);
            }
        });
    }

    lerElemento(0, 0);
}

function multiplicarMatrizPorA(matriz, valorA) {
    let vetorV = [];

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            vetorV.push(matriz[i][j] * valorA);
        }
    }

    return vetorV;
}

function imprimirVetor(vetor) {
    console.log("Vetor V (elementos da matriz M multiplicados por A):");
    console.log(vetor.join(' '));
}

lerMatriz(function (matrizM) {
    rl.question("Digite o valor de A: ", function (aInput) {
        const valorA = parseFloat(aInput);

        const vetorV = multiplicarMatrizPorA(matrizM, valorA);

        imprimirVetor(vetorV);

        rl.close();
    });
});
