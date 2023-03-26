import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedesSociales } from 'src/app/model/redes-sociales';
import { RedesSocialesService } from 'src/app/servicios/redes_sociales/redes-sociales.service';

@Component({
  selector: 'app-agregar-redes-sociales',
  templateUrl: './agregar-redes-sociales.component.html',
  styleUrls: ['./agregar-redes-sociales.component.css']
})
export class AgregarRedesSocialesComponent implements OnInit {

  nombre: string = '';
  link: string = '';

  constructor(private datosRedesSociales:RedesSocialesService, private router: Router) { }

  ngOnInit(): void {
  }

  crearRedSocial(): void {
    const redSocial = new RedesSociales(this.nombre,this.link);
    this.datosRedesSociales.crearRedesSocialesS(redSocial).subscribe(data => {
      this.router.navigate(['portfolio']);
      alert('Red de comunicación guardada');
    },(error)=>{
      alert('Error al guardar');
    })
  }

}
