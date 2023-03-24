import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos/proyectos.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {

  nombreProyecto: string = '';
  duracion: string = '';
  participantes: string = '';
  proyectoCol: string = '';

  constructor(private proyectosService: ProyectosService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  crearProyecto(): void {
    const proyecto = new Proyectos(this.nombreProyecto,this.duracion,this.participantes,this.proyectoCol);
    this.proyectosService.crearProyecto(proyecto).subscribe(data => {
      this.router.navigate(['portfolio']);
      alert('Proyecto guardada');
    },(error)=>{
      alert('Error al guardar');
    })
  }

}
