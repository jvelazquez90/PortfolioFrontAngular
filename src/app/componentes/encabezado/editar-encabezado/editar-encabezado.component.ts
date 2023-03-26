import { Component, OnInit } from '@angular/core';
import { EncabezadoServiceService } from 'src/app/servicios/encabezado/encabezado-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-editar-encabezado',
  templateUrl: './editar-encabezado.component.html',
  styleUrls: ['./editar-encabezado.component.css']
})
export class EditarEncabezadoComponent implements OnInit {

  persona: any = new Persona('','','','',1,'','','','');

  // empieza modal
  modalSwitch: boolean = false;

  constructor(  private modalSS:EncabezadoServiceService,
                private datosEncabezado: EncabezadoServiceService,
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

    this.modalSwitch = true;
  }

  editarEncabezado():void {
    this.datosEncabezado.editarPersonaS(this.persona).subscribe(data => {
      this.router.navigate(['portfolio']);
      alert('Se modificaron los datos');
    },(error)=>{
      alert('Error al guardar cambios');
    })
  }

  // PARA EL MODAL
  closeModal() {
    this.modalSS.$modal.emit(false);
  }
}
