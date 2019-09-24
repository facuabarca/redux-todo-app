export class Todo {
    id: number;
    texto: string;
    completado: boolean;

    constructor(texto: string) {
        this.id = Math.random() / 2;
        this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        this.completado = false;
    }

}
