export class Experiencia {
    id?: number;
    nombreEmpresa: string;
    cargo: string;
    fechaIngreso: Date;
    fechaEgreso: Date;
    imagen: string;
    esTrabajoActual: boolean;
    experienciaCol: string;
    descripcion: string;

    constructor(nombreEmpresa: string, cargo: string, fechaIngreso: Date, fechaEgreso: Date, imagen: string,
                esTrabajoActual: boolean, experienciaCol: string, descripcion: string) {
                    this.nombreEmpresa = nombreEmpresa;
                    this.cargo = cargo;
                    this.fechaIngreso = fechaIngreso;
                    this.fechaEgreso = fechaEgreso;
                    this.imagen = imagen;
                    this.esTrabajoActual = esTrabajoActual;
                    this.experienciaCol = experienciaCol;
                    this.descripcion = descripcion;
    }
}
