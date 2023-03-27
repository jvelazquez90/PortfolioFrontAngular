import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { PortfolioService } from 'src/app/servicios/portfolio.service'; // se agrega mi servicio
import { EncabezadoServiceService } from 'src/app/servicios/encabezado/encabezado-service.service';
import { EditableService } from 'src/app/servicios/editable/editable.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  miPortfolio:any;
  titulo = "Técnico GIS";

  @Input() sePuedeEditar: Boolean = false;


  // empieza modal
  modalSwitch: boolean = false;

  constructor(private datosPortfolio:EncabezadoServiceService, private modalSS:EncabezadoServiceService,
            private datosEditable:EditableService) { }

  ngOnInit(): void {
    this.datosPortfolio.ObtenerPersona().subscribe(data => {
      this.miPortfolio = data;

      this.modalSS.$modal.subscribe((valor)=>(this.modalSwitch = valor))
    });
    // me suscribo al servicio
  }

    /*
  openModal() {
    this.modalSwitch = true;
  }
  */
}
