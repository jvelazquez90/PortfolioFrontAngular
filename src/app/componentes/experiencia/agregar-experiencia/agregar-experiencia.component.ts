import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia/experiencia.service';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  nombreEmpresa: string = '';
  cargo: string = '';
  fechaIngreso: Date = new Date();
  fechaEgreso: Date = new Date();
  imagen: string = '';
  esTrabajoActual: boolean = false;
  experienciaCol: string = '';
  descripcion: string = '';

  constructor(private experienciaService: ExperienciaService, private router:Router) {
   }

  ngOnInit(): void {
  }

  agregarExperiencia(): void {
    const experiencia = new Experiencia(this.nombreEmpresa, this.cargo, this.fechaIngreso,
      this.fechaEgreso, this.imagen, this.esTrabajoActual, this.experienciaCol, this.descripcion);
    this.experienciaService.crearExperienciaS(experiencia).subscribe(data => {
      this.router.navigate(['portfolio']);
      alert('Experiencia guardada');
    },(error)=>{
      alert('Error al guardar');
    })
  }

}
