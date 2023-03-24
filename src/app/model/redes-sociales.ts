export class RedesSociales {
    id?: number;
    nombre: string;
    link: string;
    imagen: string;

    constructor(nombre: string, link: string, imagen: string) {
        this.nombre = nombre;
        this.link = link;
        this.imagen = imagen;
    }
}
