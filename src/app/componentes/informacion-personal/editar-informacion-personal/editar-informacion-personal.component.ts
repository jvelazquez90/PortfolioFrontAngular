import { Component, OnInit } from '@angular/core';
import { EncabezadoServiceService } from 'src/app/servicios/encabezado/encabezado-service.service';
import { EmailServiceService } from 'src/app/servicios/email/email-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { Email } from 'src/app/model/email';

@Component({
  selector: 'app-editar-informacion-personal',
  templateUrl: './editar-informacion-personal.component.html',
  styleUrls: ['./editar-informacion-personal.component.css']
})
export class EditarInformacionPersonalComponent implements OnInit {

  persona: any = new Persona('','','','',1,'','','','');
  email: any = new Email('');

  constructor(private datosEncabezado: EncabezadoServiceService,
              private datosEmail: EmailServiceService,
              private router:Router,
              private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerInformacionPersonal();
    this.obtenerEmail();
  }

  obtenerInformacionPersonal(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.datosEncabezado.obtenerPersonaIdS(id).subscribe(data => {
    this.persona = data;
    }, error => {
        alert("Error al modificar");
        this.router.navigate(['portfolio']);
    })
  }

  obtenerEmail(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.datosEmail.obtenerEmailIdS(id).subscribe(data => {
    this.email = data;
    }, error => {
        alert("Error al modificar");
        this.router.navigate(['portfolio']);
    })
  }

  editarInformacionPersonal():void {
    this.datosEncabezado.editarPersonaS(this.persona).subscribe(data => {
      this.router.navigate(['portfolio']);
      alert('Se modificaron los datos');
    },(error)=>{
      alert('Error al guardar cambios');
    })
  }

  editarEmail():void {
    this.datosEmail.editarEmailS(this.email).subscribe(data => {
      this.router.navigate(['portfolio']);
    },(error)=>{
      alert('Error al guardar el email');
    })
  }

  editarDatos(): void {
    this.editarInformacionPersonal();
    this.editarEmail();
  }

}
