import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // agregado
import { BehaviorSubject, Observable } from 'rxjs'; // se agrega para que la aplicacion no quede en la espera del servicio
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RedesSocialesService {

  url = "http://localhost:8080/redesSociales/get";

  constructor( private httpClient:HttpClient ) { }

  ObtenerRedesSociales():Observable<any>{
    return this.httpClient.get(this.url);
  }
}
