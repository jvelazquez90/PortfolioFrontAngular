export class Educacion {
    id?: number;
    nombreInstitucion: string
    fechaIngreso: Date
    fechaEgreso: Date
    lugar: string

    
    constructor(nombreInstitucion:string, fechaIngreso:Date, fechaEgreso:Date,lugar:string){
        this.nombreInstitucion = nombreInstitucion;
        this.fechaIngreso = fechaIngreso;
        this.fechaEgreso = fechaEgreso;
        this.lugar = lugar;
    }
    
}
