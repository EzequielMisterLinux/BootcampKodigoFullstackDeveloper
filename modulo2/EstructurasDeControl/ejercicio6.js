import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calcularDescuento = (origen, destino) => {
  let descuento = 0;
  let destinoNombre = '';

  if (origen.toLowerCase() === 'palma') {
    switch (destino) {
      case '1':
        descuento = 5;  
        destinoNombre = 'La costa del Sol';
        break;
      case '2':
        descuento = 10; 
        destinoNombre = 'Panchimalco';
        break;
      case '3':
        descuento = 15; 
        destinoNombre = 'Puerto el Triunfo';
        break;
      default:
        console.log("Destino no válido.");
        rl.close();
        return;
    }
    console.log(`El viaje desde ${origen} hacia ${destinoNombre} tiene un descuento del ${descuento}%.`);
  } else {
    console.log("No hay descuentos para el origen indicado.");
  }
  rl.close();
};


console.log("Seleccione el origen del viaje:");
console.log("1. Palma");


rl.question("Ingrese el número correspondiente al origen: ", (origenSeleccionado) => {
  if (origenSeleccionado === '1') {

    console.log("Seleccione el destino del viaje:");
    console.log("1. La costa del Sol");
    console.log("2. Panchimalco");
    console.log("3. Puerto el Triunfo");

    rl.question("Ingrese el número correspondiente al destino: ", (destinoSeleccionado) => {
      calcularDescuento("Palma", destinoSeleccionado);
    });
  } else {
    console.log("Origen no válido.");
    rl.close();
  }
});
