/* Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array. */

function contarFrequencia(strings) {
  const frequencia = {};

  for (let str of strings) {
      if (frequencia[str]) {
          frequencia[str]++;
      } else {
          frequencia[str] = 1;
      }
  }

  return frequencia;
}

// Exemplo de uso
const arrayDeStrings = ["maçã", "banana", "maçã", "laranja", "banana", "maçã", "uva", "laranja"];
const frequenciaStrings = contarFrequencia(arrayDeStrings);

console.log(frequenciaStrings);
