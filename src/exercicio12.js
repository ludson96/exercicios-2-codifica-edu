// Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

function gerarFibonacci(n) {
  let fibonacci = [1, 1];

  for (let i = 2; i < n; i++) {
    let novoTermo = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(novoTermo);
  }

  return fibonacci;
}

function main() {
  const n = 10; 
  const fibonacci = gerarFibonacci(n);
  console.log(`Os ${n} primeiros elementos da Sequência de Fibonacci são:`);
  console.log(fibonacci.join(', '));
}

main();
