import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el nombre del empleado: ", (nombre) => {
  rl.question("Ingrese el salario actual del empleado: ", (salario) => {
    rl.question("Ingrese la categoría del empleado (A, B, C, D): ", (categoria) => {

      const salarioNumerico = parseFloat(salario);
      let aumento = 0;

      switch (categoria.toUpperCase()) {
        case 'A':
          aumento = 0.15; 
          break;
        case 'B':
          aumento = 0.30; 
          break;
        case 'C':
          aumento = 0.10; 
          break;
        case 'D':
          aumento = 0.20; 
          break;
        default:
          console.log("Categoría no válida.");
          rl.close();
          return;
      }

      const aumentoSalario = salarioNumerico * aumento;
      const nuevoSalario = salarioNumerico + aumentoSalario;

      console.log(`\nDatos del empleado:\nNombre: ${nombre}\nSalario actual: $${salarioNumerico.toFixed(2)}\nCategoría: ${categoria.toUpperCase()}`);
      console.log(`Aumento salarial: $${aumentoSalario.toFixed(2)}\nNuevo salario: $${nuevoSalario.toFixed(2)}\n`);

      rl.close();
    });
  });
});
