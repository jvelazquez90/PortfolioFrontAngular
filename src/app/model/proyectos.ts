export class Proyectos {
    id?: number;
    nombreProyecto: string;
    duracion: string;
    participantes: string;
    proyectoCol: string;

    constructor(nombreProyecto: string, duracion: string, participantes: string, proyectoCol: string) {
        this.nombreProyecto = nombreProyecto;
        this.duracion = duracion;
        this.participantes = participantes;
        this.proyectoCol = proyectoCol;
    }
}
