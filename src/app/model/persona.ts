export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    fechaNamiento: string;
    nacionalidad: string;
    sexo: number;
    lugarResidencia: string;
    telefono: string;
    foto: string;
    acercaDe: string;

    constructor(    nombre: string,
                    apellido: string,
                    fechaNacimiento:string,
                    nacionalidad:string,
                    sexo:number,
                    lugarResidencia:string,
                    telefono:string,
                    foto:string,
                    acercaDe:string) {
                        this.nombre = nombre;
                        this.apellido = apellido;
                        this.fechaNamiento = fechaNacimiento;
                        this.nacionalidad = nacionalidad;
                        this.sexo = sexo;
                        this.lugarResidencia = lugarResidencia;
                        this.telefono = telefono;
                        this.foto = foto;
                        this.acercaDe = acercaDe;
                    }
}
