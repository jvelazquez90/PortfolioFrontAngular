import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {
  
  educacion: any = new Educacion('',new Date(),new Date(), '');

  constructor(private educacionService:EducacionService, 
              private router:Router, 
              private activateRouter:ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   const id = this.activateRouter.snapshot.params['id'];
   this.educacionService.obtenerEducacionId(id).subscribe(data => {
    this.educacion = data;
   }, error => {
      alert("Error al modificar");
      this.router.navigate(['portfolio']);
   })
  }
  /*
  cargar(): void {
    this.activateRouter.params.subscribe(e=>{
      let id = e['id'];
      if(id){
        this.educacionService.obtenerEducacionId(id).subscribe((data)=> {
          this.educacion = data});
      }
     });
  }
  */
  
  /*
  editar(): void {
    this.educacionService.editarEducacion(this.educaciones).subscribe(data => {
      console.log(data);
      this.router.navigate(['portfolio']);
      alert('Educación guardada');
    },(error)=>{
      alert('Error al guardar');
    })
  }
  */
 /*
 editar():void {
  console.log(this.educacion);
  this.educacionService.editarEducacion(this.educacion).subscribe(
    e=>this.router.navigate(['portfolio'])
  )
 }
 */

  
  editar():void {
    this.educacionService.editarEducacion(this.educacion).subscribe(data => {
      this.router.navigate(['portfolio']);
      alert('Se modificó educación');
    },(error)=>{
      alert('Error al guardar cambios');
    })
  }
  
}
