/* Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos. */

const obj1 = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo"
};

const obj2 = {
  idade: 35,
  email: "joao@example.com",
  país: "Brasil"
};

function combinarObjetos(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const objCombinado = combinarObjetos(obj1, obj2);
console.log(objCombinado);
