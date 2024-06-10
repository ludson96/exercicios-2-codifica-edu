const readline = require('readline');

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let totalSalarioHomens = 0;
  let totalSalarioMulheres = 0;

  function perguntarDados() {
    rl.question('Digite o salário do funcionário: ', (salario) => {
      rl.question('Digite o sexo do funcionário (M/F): ', (sexo) => {
        salario = parseFloat(salario);
        sexo = sexo.toUpperCase();

        if (isNaN(salario) || (sexo !== 'M' && sexo !== 'F')) {
          console.log('Dados inválidos. Por favor, insira um salário válido e sexo como M ou F.');
        } else {
          if (sexo === 'M') {
            totalSalarioHomens += salario;
          } else if (sexo === 'F') {
            totalSalarioMulheres += salario;
          }
        }

        rl.question('Deseja continuar? (S/N): ', (resposta) => {
          resposta = resposta.toUpperCase();

          if (resposta === 'S') {
            perguntarDados();
          } else {
            console.log(`Total de salário pago aos homens: R$ ${totalSalarioHomens.toFixed(2)}`);
            console.log(`Total de salário pago às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);
            rl.close();
          }
        });
      });
    });
  }

  perguntarDados();
}

main();
