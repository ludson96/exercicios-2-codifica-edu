/* Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os resultados. */

function transformarObjeto(obj, fn) {
  const novoObj = {};

  for (let chave in obj) {
      if (obj.hasOwnProperty(chave)) {
          novoObj[chave] = fn(obj[chave]);
      }
  }

  return novoObj;
}

// Exemplo de uso
const exemploObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

const quadrado = (x) => x * x;

const novoObj = transformarObjeto(exemploObj, quadrado);
console.log(novoObj);
