import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia:any;

  constructor( private datosExperiencia:ExperienciaService) { }

  ngOnInit(): void {
    this.datosExperiencia.ObtenerExperiencia().subscribe(data => {
      //console.log(data);
      this.experiencia = data.reverse(); // invierte el orden, quedando el actual arriba de todo
    });
  }

}
