import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos/proyectos.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  proyecto: any = new Proyectos('','','','');

  constructor(private proyectosService:ProyectosService,
              private router:Router,
              private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
   this.proyectosService.obtenerProyectoId(id).subscribe(data => {
    this.proyecto = data;
   }, error => {
      alert("Error al modificar");
      this.router.navigate(['portfolio']);
   })
  }

  editarProyecto():void {
    this.proyectosService.editarProyecto(this.proyecto).subscribe(data => {
      this.router.navigate(['portfolio']);
      alert('Se modificó proyecto');
    },(error)=>{
      alert('Error al guardar cambios');
    })
  }

}
