import { CabeceraPagina } from './ejercicio1';
import { Calculadora } from './ejercicio2';
import { Cancion } from './cancion';
import { Cuenta } from './cuenta';
import { Empleado } from './personaYempleado';
import './style.css';


const resultados = document.getElementById('resultados');

function appendResult(text: string): void {
  const p = document.createElement('p');
  p.textContent = text;
  resultados?.appendChild(p); 
}

// Ejercicio 1: CabeceraPagina
const cabecera = new CabeceraPagina('Mi Página', 'Azul', 'Arial');
appendResult(cabecera.obtenerPropiedades());
appendResult(cabecera.mostrarAlineacion('centrado'));
appendResult(cabecera.mostrarAlineacion('Para probar los ejericicios puede modificar el Main.ts'));
cabecera.imprimirPropiedades(); 

// Ejercicio 2: Calculadora
const calculadora = new Calculadora();
appendResult("Suma: " + calculadora.sumar(5, 3));
appendResult("Resta: " + calculadora.restar(10, 5));
appendResult("Multiplicación: " + calculadora.multiplicar(4, 2));
appendResult("División: " + calculadora.dividir(20, 4));
appendResult("Potencia: " + calculadora.potencia(2, 3));
appendResult("Factorial: " + calculadora.factorial(5));

// Ejercicio 3: Cancion
const cancion = new Cancion('Imagine', 'Rock');
cancion.setAutor('John Lennon');
appendResult(cancion.mostrarDatos());

// Ejercicio 4: Cuenta
const cuenta = new Cuenta('Paola', 100, 'Ahorro', '7543573857');
cuenta.depositar();
cuenta.retirar(20);
appendResult(cuenta.mostrarDatos());

// Ejercicio 5: Persona y Empleado
const empleado = new Empleado('Carla', 'García', '123 Calle insana', '555-1234', 25, 1500);
appendResult(empleado.mostrarDatosPersonales());
appendResult(empleado.imprimirSueldo());
