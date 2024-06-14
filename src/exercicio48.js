/* Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse item em estoque. Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades. */

function combinarInventarios(inventarioLojaA, inventarioLojaB) {
  const inventarioCombinado = {};

  for (let item in inventarioLojaA) {
      if (inventarioLojaA.hasOwnProperty(item)) {
          inventarioCombinado[item] = inventarioLojaA[item];
      }
  }

  for (let item in inventarioLojaB) {
      if (inventarioLojaB.hasOwnProperty(item)) {
          if (inventarioCombinado.hasOwnProperty(item)) {
              inventarioCombinado[item] += inventarioLojaB[item];
          } else {
              inventarioCombinado[item] = inventarioLojaB[item];
          }
      }
  }

  return inventarioCombinado;
}

// Exemplo de uso
const inventarioLojaA = {
  maçã: 30,
  banana: 20,
  laranja: 15,
  pera: 5
};

const inventarioLojaB = {
  banana: 25,
  laranja: 10,
  uva: 50,
  maçã: 10
};

const inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log(inventarioCombinado);
