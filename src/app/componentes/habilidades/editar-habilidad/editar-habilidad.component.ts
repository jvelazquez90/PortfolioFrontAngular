import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades/habilidades.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {

  habilidad: any = new Habilidades('',0);

  constructor(private datosHabilidad:HabilidadesService,
              private router:Router,
              private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.datosHabilidad.obtenerHabilidadesIdS(id).subscribe(data => {
      this.habilidad = data;
    }, error => {
        alert("Error al modificar");
        this.router.navigate(['portfolio']);
    })
  }

  editarHabilidad():void {
    this.datosHabilidad.editarHabilidadesS(this.habilidad).subscribe(data => {
      this.router.navigate(['portfolio']);
      alert('Se modificó la habilidad');
    },(error)=>{
      alert('Error al guardar cambios');
    })
  }

}
