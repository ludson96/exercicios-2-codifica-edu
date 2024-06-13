/* Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:

- Matrícula;
- Nome;
- Salário bruto;
- Dedução INSS; e
- Salário líquido.

(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS). */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const funcionarios = [];
const totalFuncionarios = 2;
const inssPercentual = 0.12;

function lerDadosFuncionario(index) {
    if (index < totalFuncionarios) {
        rl.question(`Digite a matrícula do funcionário ${index + 1}: `, function(matricula) {
            rl.question(`Digite o nome do funcionário ${index + 1}: `, function(nome) {
                rl.question(`Digite o salário bruto do funcionário ${index + 1}: `, function(salarioBruto) {
                    salarioBruto = parseFloat(salarioBruto);
                    if (isNaN(salarioBruto)) {
                        console.log('Salário bruto inválido. Tente novamente.');
                        lerDadosFuncionario(index);
                    } else {
                        funcionarios.push({ matricula, nome, salarioBruto });
                        lerDadosFuncionario(index + 1);
                    }
                });
            });
        });
    } else {
        exibirContracheques();
        rl.close();
    }
}

function calcularDeducaoINSS(salarioBruto) {
    return salarioBruto * inssPercentual;
}

function exibirContracheques() {
    console.log("\nContracheques dos Funcionários:");
    funcionarios.forEach(funcionario => {
        const deducaoINSS = calcularDeducaoINSS(funcionario.salarioBruto);
        const salarioLiquido = funcionario.salarioBruto - deducaoINSS;
        console.log(`\nMatrícula: ${funcionario.matricula}`);
        console.log(`Nome: ${funcionario.nome}`);
        console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
        console.log(`Dedução INSS: R$ ${deducaoINSS.toFixed(2)}`);
        console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
    });
}

lerDadosFuncionario(0);
