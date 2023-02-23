import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:any;

  constructor( private proyectosService:ProyectosService ) { }

  ngOnInit(): void {
    this.proyectosService.ObtenerProyectos().subscribe(data => {
      //console.log(data);
      this.proyectos = data;
    });
  }

}
