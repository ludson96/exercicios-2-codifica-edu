/* A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$ 350,00. */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let salarios = [];
let numerosDeFilhos = [];

function lerDados() {
    rl.question('Digite o salário (ou pressione Enter para terminar): ', function(salario) {
        if (salario === '') {
            calcularEstatisticas();
            rl.close();
        } else {
            salario = parseFloat(salario);
            if (isNaN(salario)) {
                console.log('Salário inválido. Tente novamente.');
                lerDados();
            } else {
                rl.question('Digite o número de filhos: ', function(numeroDeFilhos) {
                    numeroDeFilhos = parseInt(numeroDeFilhos);
                    if (isNaN(numeroDeFilhos)) {
                        console.log('Número de filhos inválido. Tente novamente.');
                    } else {
                        salarios.push(salario);
                        numerosDeFilhos.push(numeroDeFilhos);
                    }
                    lerDados();
                });
            }
        }
    });
}

function calcularEstatisticas() {
    const totalSalarios = salarios.reduce((acc, val) => acc + val, 0);
    const totalFilhos = numerosDeFilhos.reduce((acc, val) => acc + val, 0);
    const mediaSalarios = totalSalarios / salarios.length;
    const mediaFilhos = totalFilhos / numerosDeFilhos.length;
    const maiorSalario = Math.max(...salarios);
    const percentualAte350 = (salarios.filter(salario => salario <= 350).length / salarios.length) * 100;

    console.log('\nEstatísticas da pesquisa:');
    console.log(`Média de salário: R$ ${mediaSalarios.toFixed(2)}`);
    console.log(`Média do número de filhos: ${mediaFilhos.toFixed(2)}`);
    console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)}`);
    console.log(`Percentual de pessoas com salário até R$ 350,00: ${percentualAte350.toFixed(2)}%`);
}

lerDados();
