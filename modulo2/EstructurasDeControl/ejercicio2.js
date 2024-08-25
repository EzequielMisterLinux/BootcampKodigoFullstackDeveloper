import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const RecursiveQuestion = () => {


    rl.question("Por favor, ingrese el nombre del alumno: ", (nombre) => {
        rl.question("Ingrese el carnet del alumno: ", (carnet) => {
            rl.question("Por favor, ingrese la nota del examen (0-100): ", (examen) => {
                rl.question("Ingrese cuántas notas de tareas va a evaluar: ", (cantidadTareas) => {

                    const numTareas = parseInt(cantidadTareas);
                    let tareasTotal = 0;
                    let contador = 0;

                    const preguntarNotasTareas = () => {
                        if (contador < numTareas) {
                            rl.question(`Ingrese la nota de la tarea ${contador + 1} (0-100): `, (notaTarea) => {
                                tareasTotal += parseFloat(notaTarea);
                                contador++;
                                preguntarNotasTareas();  
                            });
                        } else {
                            const promedioTareas = tareasTotal / numTareas;

                            rl.question("Por favor, ingrese la nota de asistencia (0-100): ", (asistencia) => {
                                rl.question("Por favor, ingrese la nota de investigación (0-100): ", (investigacion) => {

                                    const notaFinal = (parseFloat(examen) * 0.2) +
                                                      (promedioTareas * 0.4) +
                                                      (parseFloat(asistencia) * 0.1) +
                                                      (parseFloat(investigacion) * 0.3);


                                    console.log(`\nDatos del alumno:\nNombre: ${nombre}\nCarnet: ${carnet}`);
                                    console.log(`Nota Final: ${notaFinal.toFixed(2)}\n`);

                                    rl.close();  
                                });
                            });
                        }
                    };

                    preguntarNotasTareas();
                });
            });
        });
    });
};

RecursiveQuestion();
