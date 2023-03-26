import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades/habilidades.service';

@Component({
  selector: 'app-agregar-habilidad',
  templateUrl: './agregar-habilidad.component.html',
  styleUrls: ['./agregar-habilidad.component.css']
})
export class AgregarHabilidadComponent implements OnInit {

  nombre: string = '';
  porcentaje:number = 0;

  constructor(private datosHabilidades:HabilidadesService,
              private router:Router) { }

  ngOnInit(): void {
  }

  crearHabilidad(): void {
    const habilidad = new Habilidades(this.nombre,this.porcentaje);
    this.datosHabilidades.crearHabilidadesS(habilidad).subscribe(data => {
      this.router.navigate(['portfolio']);
      alert('Habilidad guardada');
    },(error)=>{
      alert('Error al guardar');
    })
  }

}
