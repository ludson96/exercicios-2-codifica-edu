const readline = require('readline');

function podeFormarTriangulo(a, b, c) {
  return (a < b + c) && (b < a + c) && (c < a + b);
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Digite o comprimento do primeiro segmento de reta: ', (segmento1) => {
    rl.question('Digite o comprimento do segundo segmento de reta: ', (segmento2) => {
      rl.question('Digite o comprimento do terceiro segmento de reta: ', (segmento3) => {
        const a = parseFloat(segmento1);
        const b = parseFloat(segmento2);
        const c = parseFloat(segmento3);

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
          console.log('Por favor, insira números válidos.');
        } else {
          if (podeFormarTriangulo(a, b, c)) {
            console.log('Os segmentos podem formar um triângulo.');
          } else {
            console.log('Os segmentos não podem formar um triângulo.');
          }
        }

        rl.close();
      });
    });
  });
}

main();
