import { Component, OnInit } from '@angular/core';
//import { PortfolioService } from 'src/app/servicios/portfolio.service'; // se agrega mi servicio
import { EncabezadoServiceService } from 'src/app/servicios/encabezado/encabezado-service.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  miPortfolio:any;
  titulo = "Técnico GIS";

  // empieza modal
  modalSwitch: boolean = false;

  constructor(private datosPortfolio:EncabezadoServiceService, private modalSS:EncabezadoServiceService) { }

  ngOnInit(): void {
    this.datosPortfolio.ObtenerPersona().subscribe(data => {
      this.miPortfolio = data;

      this.modalSS.$modal.subscribe((valor)=>(this.modalSwitch = valor))
    });
    // me suscribo al servicio
  }

  convertirFecha(){
    
  }

    /*
  openModal() {
    this.modalSwitch = true;
  }
  */
}
