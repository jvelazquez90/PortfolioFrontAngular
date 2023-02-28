import { Component, OnInit } from '@angular/core';
import { RedesSocialesService } from 'src/app/servicios/redes_sociales/redes-sociales.service';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {

  redesSociales: any;

  constructor( private respuesta:RedesSocialesService) { }

  ngOnInit(): void {
    this.respuesta.ObtenerRedesSociales().subscribe(data => {
      //console.log(data);
      this.redesSociales = data;
    });
  }

}
