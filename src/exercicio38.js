/* Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora que calcule a operação conforme a informação contida nesta variável:

  1 - soma dos elementos;
  2 - produto dos elementos;
  3 - média dos elementos;
  4- ordene os elementos em ordem crescente;
  5 - mostre o vetor. */

  const readline = require('readline');

  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });
  
  let vetor = [];
  
  function lerVetor(callback) {
      console.log("Digite os 6 elementos do vetor:");
  
      function lerElemento(i) {
          rl.question(`Elemento[${i + 1}]: `, function (elemento) {
              vetor[i] = parseFloat(elemento);
              if (i < 5) {
                  lerElemento(i + 1);
              } else {
                  callback();
              }
          });
      }
  
      lerElemento(0);
  }
  
  function escolherOperacao(callback) {
      console.log("\nEscolha uma operação:");
      console.log("1 - Soma dos elementos");
      console.log("2 - Produto dos elementos");
      console.log("3 - Média dos elementos");
      console.log("4 - Ordenar os elementos em ordem crescente");
      console.log("5 - Mostrar o vetor");
  
      rl.question("Operação: ", function (operacao) {
          callback(parseInt(operacao));
      });
  }
  
  function realizarOperacao(operacao) {
      switch (operacao) {
          case 1:
              const soma = vetor.reduce((acc, val) => acc + val, 0);
              console.log(`Soma dos elementos: ${soma}`);
              break;
          case 2:
              const produto = vetor.reduce((acc, val) => acc * val, 1);
              console.log(`Produto dos elementos: ${produto}`);
              break;
          case 3:
              const media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
              console.log(`Média dos elementos: ${media}`);
              break;
          case 4:
              const ordenado = [...vetor].sort((a, b) => a - b);
              console.log(`Elementos ordenados em ordem crescente: ${ordenado}`);
              break;
          case 5:
              console.log(`Vetor: ${vetor}`);
              break;
          default:
              console.log("Operação inválida!");
      }
      rl.close();
  }
  
  lerVetor(() => {
      escolherOperacao((operacao) => {
          realizarOperacao(operacao);
      });
  });
  