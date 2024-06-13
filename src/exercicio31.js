/* Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros. Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lerNumero(callback) {
    rl.question("Digite um número inteiro A: ", function (aInput) {
        const a = parseInt(aInput);
        callback(a);
    });
}

function lerMatriz(callback) {
    let matriz = [];
    let elementosLidos = 0;

    console.log("Digite os elementos da matriz V(30,30):");

    function lerElemento(i, j) {
        rl.question(`Digite o elemento V[${i + 1}][${j + 1}]: `, function (elemento) {
            if (!matriz[i]) {
                matriz[i] = [];
            }
            matriz[i][j] = parseInt(elemento);
            elementosLidos++;

            if (elementosLidos < 900) { // 30*30 = 900
                let proximoI = Math.floor(elementosLidos / 30);
                let proximoJ = elementosLidos % 30;
                lerElemento(proximoI, proximoJ);
            } else {
                callback(matriz);
            }
        });
    }

    lerElemento(0, 0);
}

function contarEFiltrarMatriz(matriz, a) {
    let count = 0;
    let matrizX = [];

    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            if (matriz[i][j] === a) {
                count++;
            } else {
                matrizX.push(matriz[i][j]);
            }
        }
    }

    return { count, matrizX };
}

function imprimirMatriz(matriz) {
    console.log("Matriz V:");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

function imprimirArray(array, nome) {
    console.log(`${nome}: ${array.join(' ')}`);
}

lerNumero(function (a) {
    lerMatriz(function (matrizV) {
        const { count, matrizX } = contarEFiltrarMatriz(matrizV, a);

        imprimirMatriz(matrizV);
        console.log(`Número de elementos iguais a A (${a}):`, count);
        imprimirArray(matrizX, "Matriz X (elementos diferentes de A)");

        rl.close();
    });
});
