import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const RecursiveQuestion = () => {

    rl.question("porfavor ingrese su edad: ",(edad) => {
        let num = parseInt(edad)
        
        console.log(num >=18 ? "eres mayor de edad" : "no eres mayor de edad" );
        RecursiveQuestion()

    })



}

RecursiveQuestion()