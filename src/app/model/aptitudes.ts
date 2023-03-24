export class Aptitudes {
    id?:number;
    nombre:string = '';
    clasificacion:string = '';

    constructor(nombre:string, clasificacion:string){
        this.nombre = nombre;
        this.clasificacion = clasificacion;
    }
}
