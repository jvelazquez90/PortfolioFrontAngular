import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aptitudes } from 'src/app/model/aptitudes';
import { AptitudesService } from 'src/app/servicios/aptitudes/aptitudes.service';

@Component({
  selector: 'app-agregar-aptitudes',
  templateUrl: './agregar-aptitudes.component.html',
  styleUrls: ['./agregar-aptitudes.component.css']
})
export class AgregarAptitudesComponent implements OnInit {

  nombre: string = '';
  clasificacion: string = '';

  constructor(private datosAptitudes: AptitudesService, private router:Router) { }

  ngOnInit(): void {
  }

  crearAptitud(): void {
    const aptitud = new Aptitudes(this.nombre,this.clasificacion);
    this.datosAptitudes.crearAptitudesS(aptitud).subscribe(data => {
      this.router.navigate(['portfolio']);
      alert('Aptitud guardada');
    },(error)=>{
      alert('Error al guardar');
    })
  }

}
