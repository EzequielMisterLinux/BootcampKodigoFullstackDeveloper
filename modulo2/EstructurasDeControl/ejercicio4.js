import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const determinarMayor = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "Ambos números son iguales.";
  }
};

rl.question("Ingrese el primer número: ", (numero1) => {
  rl.question("Ingrese el segundo número: ", (numero2) => {
    const num1 = parseInt(numero1);
    const num2 = parseInt(numero2);

    const resultado = determinarMayor(num1, num2);

    console.log(`El número mayor es: ${resultado}`);
    rl.close();
  });
});
