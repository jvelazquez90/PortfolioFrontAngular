import { Component, OnInit, Input } from '@angular/core';
import { Aptitudes } from 'src/app/model/aptitudes';
import { AptitudesService } from 'src/app/servicios/aptitudes/aptitudes.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {

  aptitudes: any;
  nuevaAptitud: any;

  nombre:string = '';
  clasificacion:string = '';

  herramientas: Array<any> = [];
  lenguajes: Array<any> = [];
  sistemaOperativo: Array<any> = [];

  // habilitar/ocultar edicion
  mostrar: Boolean = false;
  @Input() sePuedeEditar: Boolean = false;

  constructor( private aptitudService: AptitudesService) { }

  ngOnInit(): void {
    this.aptitudService.ObtenerAptitudesS().subscribe(data => {
      this.aptitudes = data;
      for(let i = 0; i < this.aptitudes.length; i++) {
        if(this.aptitudes[i].clasificacion === 'HERRAMIENTAS'){
          this.herramientas.push(this.aptitudes[i]);
        }
        else if(this.aptitudes[i].clasificacion === 'LENGUAJES'){
          this.lenguajes.push(this.aptitudes[i]);
        }
        else if(this.aptitudes[i].clasificacion === 'SISTEMAS OPERATIVOS'){
          this.sistemaOperativo.push(this.aptitudes[i]);
        }
      }
    });
  }

  /*--------------------------------------------------------------------------------------*/
  clasificarAptitudes(){
    this.aptitudService.ObtenerAptitudesS().subscribe(data => {
      this.aptitudes = data;
      for(let i = 0; i < this.aptitudes.length; i++) {
        if(this.aptitudes[i].clasificacion === 'HERRAMIENTAS'){
          this.herramientas.push(this.aptitudes[i]);
        }
        else if(this.aptitudes[i].clasificacion === 'LENGUAJES'){
          this.lenguajes.push(this.aptitudes[i]);
        }
        else if(this.aptitudes[i].clasificacion === 'SISTEMAS OPERATIVOS'){
          this.sistemaOperativo.push(this.aptitudes[i]);
        }
      }
    });
  }

  obtenerAptitudes(){
    this.aptitudes.ObtenerAptitudesS().subscribe(data => {
      //console.log(data);
      this.aptitudes = data;
    });
  }

  /*--------------------------------------------------------------------------------------*/
  agregarAptitud():void{
    this.aptitudService.editarAptitudesS(this.nuevaAptitud).subscribe(data => {
      this.nuevaAptitud = data;
    });
  }

  /*--------------------------------------------------------------------------------------*/
  eliminarAptitud(aptitud:any):void{
    if(confirm('Seguro que desea Eliminar este elemento?')){
      this.aptitudService.eliminarAptitudesS(aptitud.id).subscribe((data) => {
        this.clasificarAptitudes();
      }), (error:any) => {console.log(error)};
    }
  }
}
