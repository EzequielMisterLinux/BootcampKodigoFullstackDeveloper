import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calcularDescuento = (modelo) => {
  let descuento = 0;

  switch (modelo.toUpperCase()) {
    case 'FIESTA':
      descuento = 5; 
      break;
    case 'FOCUS':
      descuento = 10; 
      break;
    case 'ESCAPE':
      descuento = 20; 
      break;
    default:
      console.log("Modelo de coche no válido.");
      rl.close();
      return;
  }

  console.log(`El coche seleccionado es un FORD ${modelo.toUpperCase()} y el descuento aplicado es del ${descuento}%.`);
  rl.close();
};

rl.question("Ingrese el modelo del coche (FIESTA, FOCUS, ESCAPE): ", (modelo) => {
  calcularDescuento(modelo);
});
