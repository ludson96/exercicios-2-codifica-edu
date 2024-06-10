/* Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci. */

function gerarFibonacci(n) {
  let fibonacci = [1, 1]; 

  for (let i = 2; i < n; i++) {
    let novoTermo = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(novoTermo);
  }

  return fibonacci;
}

function main() {
  const n = 15; 
  const fibonacci = gerarFibonacci(n);
  console.log(`Os primeiros ${n} elementos da Sequência de Fibonacci são:`);
  console.log(fibonacci.join(', '));
}

main();
