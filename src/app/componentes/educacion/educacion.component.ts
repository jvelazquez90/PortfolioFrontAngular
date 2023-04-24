import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion/educacion.service';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: any;
  nuevaEducacion: any;

  // habilitar/ocultar edicion
  mostrar: Boolean = false;
  @Input() sePuedeEditar: Boolean = false;

  logueadoOn: boolean = false;

  constructor( private datosEducacion:EducacionService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.datosEducacion.ObtenerEducacion().subscribe(data => {
      //console.log(data);
      this.educacion = data;
    });

    this.loginService.logueado.subscribe(
      {
      next:(logueadoOn) => {
        this.logueadoOn = logueadoOn;
      }
    })
  }

  /*--------------------------------------------------------------------------------------*/
  ObtenerEducacion(){
    this.datosEducacion.ObtenerEducacion().subscribe(data => {
      //console.log(data);
      this.educacion = data;
    });
  }

  /*--------------------------------------------------------------------------------------*/
  agregarEducacion():void{
    this.datosEducacion.editarEducacion(this.nuevaEducacion).subscribe(data => {
      this.datosEducacion = data;
    });
  }

  /*--------------------------------------------------------------------------------------*/
  editarEducacion(edu:any):void{
  }

  /*--------------------------------------------------------------------------------------*/
  eliminarEducacion(edu:any):void{
    if(confirm('Seguro que desea Eliminar este elemento?')){
      this.datosEducacion.eliminarEducacion(edu.id).subscribe((data) => {
        this.ObtenerEducacion();
      }), (error:any) => {console.log(error)};
    }
  }
}
