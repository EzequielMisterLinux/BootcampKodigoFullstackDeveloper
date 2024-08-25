import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const mostrarTablaMultiplicar = (numero) => {
  const num = parseInt(numero);

  console.log(`\nTabla de multiplicar del ${num}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
  rl.close();
};

rl.question("Ingrese un número para mostrar su tabla de multiplicar: ", mostrarTablaMultiplicar);
