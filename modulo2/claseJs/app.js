import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

console.log("¡bienvenido al numerito magico!");
console.log("Estoy pensando en un numero del 1 al 100.");

const verificarRespuesta = (numeroUsuario) => {
  if (numeroUsuario < numeroAleatorio) {
    console.log("El número es mayor. pruebe denuevo");
    pedirNumero();
  } else if (numeroUsuario > numeroAleatorio) {
    console.log("el número es menor pruebe denuevo");
    pedirNumero();
  } else {
    console.log("ganaste!! Adivinaste el número .");
    rl.close();
  }
};

const pedirNumero = () => {
  rl.question("ingrese un numero: ", (respuesta) => {
    const numeroUsuario = parseInt(respuesta, 10);
    if (isNaN(numeroUsuario)) {
      console.log("Por favor ingresa un nmero valido.");
      pedirNumero();
      
    } else if(numeroUsuario >= 101){
      console.log("porfavor ingrese un numero del 1 al 100");
      pedirNumero()
    }else{
        verificarRespuesta(numeroUsuario);
    }
  });
};

const Menu = () => {
    rl.question("ingrese 1 para volver a jugar o ingrese 2 para salir del juego", (op) => {
        const res = parseInt(op)
        if (res == 1) {
            pedirNumero()
        }else{
            rl.close()
        }
    })
}

Menu()