import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RedesSociales } from 'src/app/model/redes-sociales';
import { RedesSocialesService } from 'src/app/servicios/redes_sociales/redes-sociales.service';

@Component({
  selector: 'app-editar-redes-sociales',
  templateUrl: './editar-redes-sociales.component.html',
  styleUrls: ['./editar-redes-sociales.component.css']
})
export class EditarRedesSocialesComponent implements OnInit {

  redSoocial: any = new RedesSociales('','');

  constructor(private datosRedesSociales:RedesSocialesService, private router:Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.datosRedesSociales.obtenerRedesSocialesIdS(id).subscribe(data => {
      this.redSoocial = data;
      console.log(this.redSoocial);
    }, error => {
      alert("Error al modificar");
      this.router.navigate(['portfolio']);
    })
  }

  editarRedSocial():void {
    this.datosRedesSociales.editarRedesSocialesS(this.redSoocial).subscribe(data => {
      this.router.navigate(['portfolio']);
      alert('Se modificó red de comunicación');
    },(error)=>{
      alert('Error al guardar cambios');
    })
  }

}
