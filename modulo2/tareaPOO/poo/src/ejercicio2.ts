export class Calculadora {
    sumar(a: number, b: number): number {
        return a + b;
    }

    restar(a: number, b: number): number {
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number {
        if (b === 0) throw new Error('No se puede dividir entre 0');
        return a / b;
    }

    potencia(a: number, b: number): number {
        return Math.pow(a, b);
    }

    factorial(n: number): number {
        if (n < 0) return -1;
        if (n === 0) return 1;
        return n * this.factorial(n - 1);
    }
}
