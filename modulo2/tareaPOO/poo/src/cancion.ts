export class Cancion {
    private autor: string = '';

    constructor(
        public titulo: string,
        public genero: string
    ) {}

    setAutor(autor: string): void {
        this.autor = autor;
    }

    getAutor(): string {
        return this.autor;
    }

    mostrarDatos(): string {
        return `Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.getAutor()}`;
    }
}
