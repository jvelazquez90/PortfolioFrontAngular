import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:any;
  nuevoProyecto:any;

  constructor( private proyectosService:ProyectosService ) { }

  ngOnInit(): void {
    this.proyectosService.obtenerProyectos().subscribe(data => {
      //console.log(data);
      this.proyectos = data;
    });
  }

  /*--------------------------------------------------------------------------------------*/
  obtenerProyectos(){
    this.proyectosService.obtenerProyectos().subscribe(data => {
      //console.log(data);
      this.proyectos = data;
    });
  }

  /*--------------------------------------------------------------------------------------*/
  agregarProyecto():void{
    this.proyectosService.editarProyecto(this.nuevoProyecto).subscribe(data => {
      this.nuevoProyecto = data;
    });
  }

  /*--------------------------------------------------------------------------------------*/
  eliminarProyecto(proyecto:any):void{
    if(confirm('Seguro que desea Eliminar este elemento?')){
      this.proyectosService.eliminarProyecto(proyecto.id).subscribe((data) => {
        this.obtenerProyectos();
      }), (error:any) => {console.log(error)};
    }
  }

}
