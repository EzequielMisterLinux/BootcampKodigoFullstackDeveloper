import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];
let index = 0;

let negativos = 0;
let positivos = 0;
let multiplosDe15 = 0;
let sumaPares = 0;

const analizarNumeros = (numero) => {
  const num = parseInt(numero);


  if (num < 0) negativos++;
  if (num > 0) positivos++;
  if (num % 15 === 0) multiplosDe15++;
  if (num % 2 === 0) sumaPares += num;

  index++;

  if (index < 10) {
    rl.question(`Ingrese el número ${index + 1}: `, analizarNumeros);
  } else {
    console.log(`\nResultados:`);
    console.log(`Cantidad de valores negativos: ${negativos}`);
    console.log(`Cantidad de valores positivos: ${positivos}`);
    console.log(`Cantidad de múltiplos de 15: ${multiplosDe15}`);
    console.log(`Suma de valores pares: ${sumaPares}`);
    rl.close();
  }
};

rl.question("Ingrese el número 1: ", analizarNumeros);
