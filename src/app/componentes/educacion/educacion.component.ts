import { Component, OnInit, OnDestroy } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion:any;
  nuevaEducacion:any;

  constructor( private datosEducacion:EducacionService) { }

  ngOnInit(): void {
    this.datosEducacion.ObtenerEducacion().subscribe(data => {
      //console.log(data);
      this.educacion = data;
    });
  }

  create():void{
    this.datosEducacion.create(this.nuevaEducacion).subscribe(data => {
      this.datosEducacion = data;
    });
  }

    editarEducacion(edu:any):void{
      //console.log(edu);
      this.datosEducacion.update(edu.id).subscribe(data => this.datosEducacion = data);
    }

    eliminarEducacion(edu:any):void{
      if(confirm('Seguro que desea Eliminar este elemento?')){
        this.datosEducacion.delete(edu.id).subscribe((data) => {
          this.datosEducacion.ObtenerEducacion();
        }), (error:any) => {console.log(error)};
      }
    }

    ngOnDestroy() {
      this.educacion.unsubscribe();
    }

}
