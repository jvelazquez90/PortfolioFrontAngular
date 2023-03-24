import { Component, OnInit } from '@angular/core';
import { Aptitudes } from 'src/app/model/aptitudes';
import { AptitudesService } from 'src/app/servicios/aptitudes/aptitudes.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {

  aptitudes: any;


  nombre:string = '';
  clasificacion:string = '';

  aptitudess: Aptitudes = new Aptitudes(this.nombre, this.clasificacion);

  relacion: Map<string, string> = new Map<string, string>();
  clasificaciones: Array<string> = [];

  constructor( private aptitudService: AptitudesService) { }

  ngOnInit(): void {
    this.cargarDatos();
    console.log(this.aptitudes);
  }

  cargarDatos(): void {
    const aptitudess: Aptitudes = new Aptitudes(this.nombre,this.clasificacion);
    this.aptitudService.ObtenerAptitudes().subscribe(data => {
      this.aptitudes = data;
    });
  }

  obtenerInformacion( aptitudes:any ): void {
    for( var i=0; i< aptitudes.length; i++){
        if( aptitudes.clasificacion.includes(aptitudes[i].clasificacion) ) {
            this.relacion.set(aptitudes[i].nombre, aptitudes[i].clasificacion);
        }
        else{
          this.clasificaciones.push(aptitudes[i].clasificacion);
        }
    }
  }

}
