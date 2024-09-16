abstract class Persona {
    constructor(
        protected nombre: string,
        protected apellido: string,
        protected direccion: string,
        protected telefono: string,
        protected edad: number
    ) {}

    esMayorDeEdad(): string {
        return this.edad >= 18 ? 'Es mayor de edad' : 'No es mayor de edad';
    }

    abstract mostrarDatosPersonales(): string;
}

export class Empleado extends Persona {
    private sueldo: number;

    constructor(
        nombre: string,
        apellido: string,
        direccion: string,
        telefono: string,
        edad: number,
        sueldo: number
    ) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    imprimirSueldo(): string {
        return `Sueldo: $${this.sueldo}`;
    }

    mostrarDatosPersonales(): string {
        return `Nombre: ${this.nombre} ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad} (${this.esMayorDeEdad()})`;
    }
}
