/* Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.  */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let vetorA = [];
let vetorB = [];

function lerVetorA(callback) {
    console.log("Digite os 100 elementos do vetor A (um por linha):");

    function lerElemento(i) {
        rl.question(`Elemento[${i + 1}]: `, function (elemento) {
            vetorA[i] = parseFloat(elemento);
            if (i < 99) {
                lerElemento(i + 1);
            } else {
                callback();
            }
        });
    }

    lerElemento(0);
}

function compactarVetor() {
    vetorB = vetorA.filter(valor => valor > 0);
}

function mostrarVetorB() {
    console.log("Vetor B (compactado):");
    console.log(vetorB);
}

lerVetorA(() => {
    compactarVetor();
    mostrarVetorB();
    rl.close();
});
