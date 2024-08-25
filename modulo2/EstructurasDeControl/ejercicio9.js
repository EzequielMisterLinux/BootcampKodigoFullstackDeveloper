import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const celsiusAFahrenheit = (celsius) => {
  return (celsius * 9/5) + 32;
};

const clasificarTemperatura = (fahrenheit) => {
  if (fahrenheit >= 14 && fahrenheit < 32) {
    return "Temperatura baja";
  } else if (fahrenheit >= 32 && fahrenheit < 68) {
    return "Temperatura adecuada";
  } else if (fahrenheit >= 68 && fahrenheit < 96) {
    return "Temperatura alta";
  } else {
    return "Temperatura desconocida";
  }
};

rl.question("Ingrese la temperatura en Celsius: ", (celsiusInput) => {
  const celsius = parseFloat(celsiusInput);
  const fahrenheit = celsiusAFahrenheit(celsius);
  const clasificacion = clasificarTemperatura(fahrenheit);

  console.log(`Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)}°F`);
  console.log(clasificacion);
  rl.close();
});
