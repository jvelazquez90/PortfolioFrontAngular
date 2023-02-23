import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion:any;

  constructor( private datosEducacion:EducacionService ) { }

  ngOnInit(): void {
    this.datosEducacion.ObtenerEducacion().subscribe(data => {
      //console.log(data);
      this.educacion = data;
    });
  }

}
