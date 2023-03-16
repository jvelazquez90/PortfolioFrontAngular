import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion/educacion.service';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {

  // creo mi grupo formulario con los datos recibidos y validados
  /*
  formEducacion = new FormGroup({
    'nombreInstitucion': new FormControl('', Validators.required),
    'fechaIngreso': new FormControl('', Validators.required),
    'fechaEgreso': new FormControl('', Validators.required),
    'lugar': new FormControl('', Validators.required)
  });
  */

  formEducacion = this.formBuilder.group({
    'nombreInstitucion': ['', Validators.required],
    'fechaIngreso': ['', Validators.required],
    'fechaEgreso': ['', Validators.required],
    'lugar': ['', Validators.required]
 });

  constructor(private educacionService:EducacionService, private router:Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
 
  crear():void{
    this.educacionService.crearEducacion(this.formEducacion.value).subscribe(data => {
      this.router.navigate(['portfolio']);
      alert('Educación guardada');
    },(error)=>{
      alert('Error al guardar');
    }
    )
  }

  procesar(){
    console.log(this.formEducacion.value);
  }

}
