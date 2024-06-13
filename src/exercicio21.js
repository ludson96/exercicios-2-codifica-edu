/* Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */

function calcularPesoIdeal(altura, sexo) {
  let pesoIdeal;

  if (sexo.toLowerCase() === 'masculino' || sexo.toLowerCase() === 'm') {
    pesoIdeal = 72.7 * altura - 58;
  } else if (sexo.toLowerCase() === 'feminino' || sexo.toLowerCase() === 'f') {
    pesoIdeal = 62.1 * altura - 44.7;
  } else {
    throw new Error('Sexo inválido. Use "masculino" ou "feminino".');
  }

  return pesoIdeal;
}

// Exemplo
const altura1 = 1.75;
const sexo1 = 'masculino';
console.log(`Peso ideal para ${sexo1} com altura ${altura1}m: ${calcularPesoIdeal(altura1, sexo1).toFixed(2)} kg`);

const altura2 = 1.65;
const sexo2 = 'feminino';
console.log(`Peso ideal para ${sexo2} com altura ${altura2}m: ${calcularPesoIdeal(altura2, sexo2).toFixed(2)} kg`);
