import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/servicios/login/login.service';
import { Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  //form:FormGroup; // vamos a enlazar con nuestro template

  user: User = new User();
  errors: string = "El usuario o la contraseña son inválidos";

  constructor(private loginService: LoginService, private router:Router) {
    
  }

  ngOnInit(): void {
  }
  /*
  userLogin() {
    this.loginService.loginUser(this.user).subscribe(data=>{
      window.location.href = "/portfolio"
    }, error => alert("El usuario o la contraseña son inválidos"));
  }
  */
 
  userLogin() {
    this.loginService.loginUser(this.user).subscribe(data=>{
      this.router.navigate(['/portfolio'])
    },
    error => alert("El usuario o la contraseña son inválidos"))
  }
  
}
