import { Component, OnInit, Input } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia:any;
  nuevaExperiencia: any;

  // habilitar/ocultar edicion
  mostrar: Boolean = false;
  @Input() sePuedeEditar: Boolean = false;

  constructor( private datosExperiencia:ExperienciaService) { }

  ngOnInit(): void {
    this.datosExperiencia.ObtenerExperienciaS().subscribe(data => {
      //console.log(data);
      this.experiencia = data.reverse(); // invierte el orden, quedando el actual arriba de todo
    });
  }

  /*--------------------------------------------------------------------------------------*/
  obtenerExperiencia(){
    this.datosExperiencia.ObtenerExperienciaS().subscribe(data => {
      this.experiencia = data.reverse();
    })
  }

  /*--------------------------------------------------------------------------------------*/
  agregarExperiencia():void{
    this.datosExperiencia.editarExperienciaS(this.nuevaExperiencia).subscribe(data => {
      this.experiencia = data;
    });
  }

  /*--------------------------------------------------------------------------------------*/
  eliminarExperiencia(exp:any):void{
    if(confirm('Seguro que desea Eliminar este elemento?')){
      this.datosExperiencia.eliminarExperienciaS(exp.id).subscribe((data) => {
        this.obtenerExperiencia();
      }), (error:any) => {console.log(error)};
    }
  }
}
