/* Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5]. */

function multiplicarMatrizes(A, B) {
  if (A.length !== B.length || A[0].length !== B[0].length) {
      throw new Error('As matrizes A e B devem ter as mesmas dimensões.');
  }

  let linhas = A.length;
  let colunas = A[0].length;
  let P = [];

  for (let i = 0; i < linhas; i++) {
      P[i] = [];
      for (let j = 0; j < colunas; j++) {
          P[i][j] = A[i][j] * B[i][j];
      }
  }

  return P;
}

const A = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
];

const B = [
  [0.5, 1.5, 2.5, 3.5, 4.5],
  [5.5, 6.5, 7.5, 8.5, 9.5],
  [10.5, 11.5, 12.5, 13.5, 14.5]
];

const P = multiplicarMatrizes(A, B);

console.log("Matriz Produto P:");
for (let i = 0; i < P.length; i++) {
  console.log(P[i].join(' '));
}
