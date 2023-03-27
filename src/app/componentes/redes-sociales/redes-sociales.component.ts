import { Component, OnInit, Input } from '@angular/core';
import { RedesSocialesService } from 'src/app/servicios/redes_sociales/redes-sociales.service';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {

  redesSociales: any;
  nuevaRedSocial: any;

  // habilitar/ocultar edicion
  mostrar: Boolean = false;
  @Input() sePuedeEditar: Boolean = false;

  constructor( private respuesta:RedesSocialesService) { }

  ngOnInit(): void {
    this.respuesta.ObtenerRedesSocialesS().subscribe(data => {
      //console.log(data);
      this.redesSociales = data;
    });
  }

  /*--------------------------------------------------------------------------------------*/
  ObtenerRedSocial(){
    this.respuesta.ObtenerRedesSocialesS().subscribe(data => {
      //console.log(data);
      this.redesSociales = data;
    });
  }

  /*--------------------------------------------------------------------------------------*/
  
  eliminarRedSocial(red:any):void{
    if(confirm('Seguro que desea Eliminar este elemento?')){
      this.respuesta.eliminarRedesSocialesS(red.id).subscribe((data) => {
        this.ObtenerRedSocial();
      }), (error:any) => {console.log(error)};
    }
  }
  
  
  
}
