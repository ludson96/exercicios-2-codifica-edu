/* Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final escreva o conteúdo do registro. */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let funcionario = {
    nome: "",
    cargo: "",
    salario: 0
};

function lerDadosFuncionario() {
    rl.question('Digite o nome do funcionário: ', function(nome) {
        funcionario.nome = nome;
        rl.question('Digite o cargo do funcionário: ', function(cargo) {
            funcionario.cargo = cargo;
            rl.question('Digite o salário do funcionário: ', function(salario) {
                funcionario.salario = parseFloat(salario);
                exibirDadosFuncionario();
                rl.close();
            });
        });
    });
}

function exibirDadosFuncionario() {
    console.log("\nDados do Funcionário:");
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Cargo: ${funcionario.cargo}`);
    console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);
}

lerDadosFuncionario();
