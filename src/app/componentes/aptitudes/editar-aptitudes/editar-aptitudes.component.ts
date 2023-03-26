import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aptitudes } from 'src/app/model/aptitudes';
import { AptitudesService } from 'src/app/servicios/aptitudes/aptitudes.service';

@Component({
  selector: 'app-editar-aptitudes',
  templateUrl: './editar-aptitudes.component.html',
  styleUrls: ['./editar-aptitudes.component.css']
})
export class EditarAptitudesComponent implements OnInit {

  aptitud: any = new Aptitudes('','');

  constructor(private aptitudesService:AptitudesService,
              private router:Router, 
              private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.aptitudesService.obtenerAptitudesIdS(id).subscribe(data => {
    this.aptitud = data;
    }, error => {
        alert("Error al modificar");
        this.router.navigate(['portfolio']);
    })
  }

  editarAptitud():void {
    this.aptitudesService.editarAptitudesS(this.aptitud).subscribe(data => {
      this.router.navigate(['portfolio']);
      alert('Se modificó educación');
    },(error)=>{
      alert('Error al guardar cambios');
    })
  }

}
