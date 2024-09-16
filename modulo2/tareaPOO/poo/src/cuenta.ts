export class Cuenta {
    constructor(
        private nombre: string,
        private cantidad: number,
        private tipoCuenta: string,
        private numeroCuenta: string
    ) {}

    depositar(): void {
        if (this.cantidad < 5) {
            console.log('El valor a depositar debe ser mayor a $5.00');
        } else {
            console.log(`Se ha depositado correctamente ${this.cantidad}`);
        }
    }

    retirar(valor: number): void {
        if (valor < 5 || valor > this.cantidad) {
            console.log('No hay suficiente saldo o el retiro es menor a $5.00');
        } else {
            this.cantidad -= valor;
            console.log(`Has retirado ${valor}, tu saldo restante es ${this.cantidad}`);
        }
    }

    mostrarDatos(): string {
        return `Nombre: ${this.nombre}, Tipo de cuenta: ${this.tipoCuenta}, Número de cuenta: ${this.numeroCuenta}`;
    }
}
