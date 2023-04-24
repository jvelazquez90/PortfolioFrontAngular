import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  experiencia: any = new Experiencia('','',new Date(),new Date(), '', false,'','' );


  constructor(private datosExperiencia:ExperienciaService,
              private router:Router,
              private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.datosExperiencia.obtenerExperienciaIdS(id).subscribe(data => {
      this.experiencia = data;
      console.log(data);
    }, error => {
      alert("Error al modificar");
      this.router.navigate(['portfolio']);
    })
  }

  editarExperiencia():void {
    this.datosExperiencia.editarExperienciaS(this.experiencia).subscribe(data => {
      this.router.navigate(['portfolio']);
      alert('Se modificó experiencia');
    },(error)=>{
      alert('Error al guardar cambios');
    })
  }

}
