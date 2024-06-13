/* Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade. */

let pessoa = {
  nome: "João",
  idade: 30
};

console.log("Idade:", pessoa.idade);

pessoa.email = "joao@example.com";

console.log("Objeto pessoa atualizado:", pessoa);
