/* Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays. */

const dados = {
  nome: "João",
  idade: 30,
  hobbies: ["futebol", "xadrez", "leitura"],
  notas: [8, 9, 7, 10],
  endereço: {
      rua: "Rua das Flores",
      número: 123
  },
  ativo: true,
  númerosFavoritos: [3, 7, 11]
};

function filtrarPropriedadesArray(obj) {
  const resultado = {};
  for (let chave in obj) {
      if (Array.isArray(obj[chave])) {
          resultado[chave] = obj[chave];
      }
  }
  return resultado;
}

const arraysApenas = filtrarPropriedadesArray(dados);
console.log(arraysApenas);
