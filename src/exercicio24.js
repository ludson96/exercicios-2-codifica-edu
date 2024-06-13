/* Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M. */

function contarElementosNegativosPorLinha(matriz) {
  let vetorC = [];
  
  for (let i = 0; i < matriz.length; i++) {
      let contagemNegativos = 0;
      for (let j = 0; j < matriz[i].length; j++) {
          if (matriz[i][j] < 0) {
              contagemNegativos++;
          }
      }
      vetorC.push(contagemNegativos);
  }

  return vetorC;
}

function imprimirVetor(vetor) {
  console.log("Vetor C (quantidade de elementos negativos por linha):");
  console.log(vetor.join(' '));
}

// Exemplo de uma matriz M[6][8]
const matrizM = [
  [1, -2, 3, -4, 5, -6, 7, -8],
  [-1, 2, -3, 4, -5, 6, -7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [-1, -2, -3, -4, -5, -6, -7, -8],
  [1, -1, 1, -1, 1, -1, 1, -1],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

// Calcular e imprimir o vetor C
const vetorC = contarElementosNegativosPorLinha(matrizM);
imprimirVetor(vetorC);
