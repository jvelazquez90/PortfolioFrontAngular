import { Component, OnInit, Input } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos/proyectos.service';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:any;
  nuevoProyecto:any;

  logueadoOn: boolean = false;

  // habilitar/ocultar edicion
  mostrar: Boolean = false;
  @Input() sePuedeEditar: Boolean = false;

  constructor( private proyectosService:ProyectosService, private loginService: LoginService ) { }

  ngOnInit(): void {
    this.proyectosService.obtenerProyectos().subscribe(data => {
      //console.log(data);
      this.proyectos = data;
    });

    this.loginService.logueado.subscribe(
      {
      next:(logueadoOn) => {
        this.logueadoOn = logueadoOn;
      }
    })
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
