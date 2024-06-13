/* Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente. */

function calcularSomasColunas(matriz) {
  let somasColunas = [];

  for (let j = 0; j < matriz[0].length; j++) {
      somasColunas[j] = 0;
  }

  for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
          somasColunas[j] += matriz[i][j];
      }
  }

  return somasColunas;
}

function imprimirSomasColunas(somasColunas) {
  console.log("Somas de cada coluna:");
  for (let j = 0; j < somasColunas.length; j++) {
      console.log(`Coluna ${j + 1}: ${somasColunas[j]}`);
  }
}

const matriz = [];
for (let i = 0; i < 15; i++) {
  matriz[i] = [];
  for (let j = 0; j < 20; j++) {
      matriz[i][j] = Math.random() * 10;
  }
}

const somasColunas = calcularSomasColunas(matriz);
imprimirSomasColunas(somasColunas);
