export class CabeceraPagina {
    constructor(
        private titulo: string,
        private color: string,
        private fuente: string
    ) {}

    obtenerPropiedades(): string {
        return `Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`;
    }

    mostrarAlineacion(alineacion: string): string {
        return `El título está alineado a: ${alineacion}`;
    }

    imprimirPropiedades(): void {
        console.log(this.obtenerPropiedades());
    }
}
