/* Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade. */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nomes = [];
let idades = [];
let count = 0;

function lerDados() {
    if (count < 9) {
        rl.question(`Digite o nome da pessoa ${count + 1}: `, function(nome) {
            rl.question(`Digite a idade da pessoa ${count + 1}: `, function(idade) {
                nomes.push(nome);
                idades.push(parseInt(idade));
                count++;
                lerDados();
            });
        });
    } else {
        mostrarMenoresDeIdade();
        rl.close();
    }
}

function mostrarMenoresDeIdade() {
    console.log("Listagem de pessoas menores de idade:");
    for (let i = 0; i < nomes.length; i++) {
        if (idades[i] < 18) {
            console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
        }
    }
}

lerDados();
