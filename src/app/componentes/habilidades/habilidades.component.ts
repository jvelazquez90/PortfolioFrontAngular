import { Component, OnInit, Input } from '@angular/core';
import { HabilidadesService } from 'src/app/servicios/habilidades/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades:any;
  nuevaHabilidad:any;

  // habilitar/ocultar edicion
  mostrar: Boolean = false;
  @Input() sePuedeEditar: Boolean = false;

  constructor( private datosHabilidades:HabilidadesService ) { }

  ngOnInit(): void {
    this.datosHabilidades.ObtenerHabilidades().subscribe(data => {
      this.habilidades = data;
    });
  }

  /*--------------------------------------------------------------------------------------*/
  ObtenerHabilidad(){
    this.datosHabilidades.ObtenerHabilidadesS().subscribe(data => {
      //console.log(data);
      this.habilidades = data;
    });
  }

  /*--------------------------------------------------------------------------------------*/
  agregarHabilidad():void{
    this.datosHabilidades.editarHabilidadesS(this.nuevaHabilidad).subscribe(data => {
      this.datosHabilidades = data;
    });
  }

  /*--------------------------------------------------------------------------------------*/
  eliminarHabilidad(hab:any):void{
    if(confirm('Seguro que desea Eliminar este elemento?')){
      this.datosHabilidades.eliminarHabilidadesS(hab.id).subscribe((data) => {
        this.ObtenerHabilidad();
      }), (error:any) => {console.log(error)};
    }
  }
}
