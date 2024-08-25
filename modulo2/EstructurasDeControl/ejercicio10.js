import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const obtenerPromedio = (edades) => {
  const suma = edades.reduce((acc, edad) => acc + edad, 0);
  return suma / edades.length;
};

const leerEdades = (numEstudiantes, turno, callback) => {
  const edades = [];
  const leerEdad = (i) => {
    if (i < numEstudiantes) {
      rl.question(`Ingrese la edad del estudiante ${i + 1} del turno ${turno}: `, (edad) => {
        edades.push(parseInt(edad));
        leerEdad(i + 1);
      });
    } else {
      callback(edades);
    }
  };
  leerEdad(0);
};

const turnos = ['mañana', 'tarde', 'noche'];
const numEstudiantes = [5, 6, 11];
const promedios = [];

const leerTurno = (index) => {
  if (index < turnos.length) {
    leerEdades(numEstudiantes[index], turnos[index], (edades) => {
      const promedio = obtenerPromedio(edades);
      promedios.push(promedio);
      console.log(`Promedio de edades del turno ${turnos[index]}: ${promedio.toFixed(2)}`);
      leerTurno(index + 1);
    });
  } else {
    const maxPromedio = Math.max(...promedios);
    const turnoConMayorPromedio = turnos[promedios.indexOf(maxPromedio)];
    console.log(`El turno con el promedio de edades más alto es el turno ${turnoConMayorPromedio}.`);
    rl.close();
  }
};

leerTurno(0);
