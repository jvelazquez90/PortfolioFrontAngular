import { Component, OnInit } from '@angular/core';
import { EncabezadoServiceService } from 'src/app/servicios/encabezado/encabezado-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {

  persona: any = new Persona('','','','',1,'','','','');

  constructor(private datosEncabezado: EncabezadoServiceService,
              private router:Router, 
              private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.datosEncabezado.obtenerPersonaIdS(id).subscribe(data => {
    this.persona = data;
    }, error => {
        alert("Error al modificar");
        this.router.navigate(['portfolio']);
    })
  }

  editarAcercaDe():void {
    this.datosEncabezado.editarPersonaS(this.persona).subscribe(data => {
      this.router.navigate(['portfolio']);
      alert('Se modificó el dato');
    },(error)=>{
      alert('Error al guardar cambios');
    })
  }

}
