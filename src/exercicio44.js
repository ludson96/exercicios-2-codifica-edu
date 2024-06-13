/* Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número. */

function contarPropriedadesString(obj) {
  let contador = 0;
  for (let chave in obj) {
      if (typeof obj[chave] === 'string') {
          contador++;
      }
  }
  return contador;
}

// Exemplo de uso
const exemploObj = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
  email: "joao@example.com",
  ativo: true,
  númerosFavoritos: [3, 7, 11]
};

const numeroDeStrings = contarPropriedadesString(exemploObj);
console.log("Número de propriedades do tipo string:", numeroDeStrings);
