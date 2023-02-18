import { Component, OnInit } from '@angular/core';
import { EncabezadoServiceService } from 'src/app/servicios/encabezado/encabezado-service.service';
import { EmailServiceService } from 'src/app/servicios/email/email-service.service';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css']
})
export class InformacionPersonalComponent implements OnInit {

  informacionPersonal:any;
  email:any;

  constructor(private datosPortfolio:EncabezadoServiceService,
              private emailPortfolio:EmailServiceService) { }

  ngOnInit(): void {
    this.datosPortfolio.ObtenerPersona().subscribe(data => {
      //console.log(data);
      this.informacionPersonal = data;
    });

    this.emailPortfolio.ObtenerEmail().subscribe(data => {
      this.email = data;
    });
    // me suscribo al servicio
  }

}
