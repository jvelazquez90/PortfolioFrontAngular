import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
/*
  api = "http://localhost:8080/api"; // la url que correspode a cada caso

  token; // no me lo toma

  constructor(private http: HttpClient, private router: Router) {
    this.http.post(this.uri + '/authenticate', {email: email, password: password}).subscribe((resp:any) => {
      // redireccionamos al usuario a su perfil
      this.router.navigate(['profile']);
      
      // guardamos el token en localStorage
      localStorage.setItem('auth_token', resp.token);
    })
  };
}

// para cerrar sesion eliminamos el token del localStorage

logout(){
  localStorage.removeItem('token');
}

// un servicio para verificar si existe la sesion
public get logIn(): boolean {
  return (localStorage.getItem('token') !== null);
}
*/
}