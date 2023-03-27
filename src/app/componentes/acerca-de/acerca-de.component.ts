import { Component, OnInit, Input } from '@angular/core';
import { EncabezadoServiceService } from 'src/app/servicios/encabezado/encabezado-service.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  informacionPersonal:any;

  // habilitar/ocultar edicion
  mostrar: Boolean = false;
  @Input() sePuedeEditar: Boolean = false;

  constructor(private datosPortfolio:EncabezadoServiceService) { }

  ngOnInit(): void {
    this.datosPortfolio.ObtenerPersona().subscribe(data => {
      //console.log(data);
      this.informacionPersonal = data;
    });
  }

}
