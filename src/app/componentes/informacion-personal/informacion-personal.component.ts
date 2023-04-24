import { Component, OnInit, Input } from '@angular/core';
import { EncabezadoServiceService } from 'src/app/servicios/encabezado/encabezado-service.service';
import { EmailServiceService } from 'src/app/servicios/email/email-service.service';
import { LoginService } from 'src/app/servicios/login/login.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css']
})
export class InformacionPersonalComponent implements OnInit {

  informacionPersonal:any;
  email:any;

  logueadoOn: boolean = false;

  // habilitar/ocultar edicion
  mostrar: Boolean = false;
  @Input() sePuedeEditar: Boolean = false;

  constructor(private datosPortfolio:EncabezadoServiceService,
              private emailPortfolio:EmailServiceService,
              public editarPersona: FormBuilder,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.datosPortfolio.ObtenerPersona().subscribe(data => {
      //console.log(data);
      this.informacionPersonal = data;
    });

    this.emailPortfolio.obtenerEmail().subscribe(data => {
      this.email = data;
    });

    this.loginService.logueado.subscribe(
      {
      next:(logueadoOn) => {
        this.logueadoOn = logueadoOn;
      }
    })
  }
}
