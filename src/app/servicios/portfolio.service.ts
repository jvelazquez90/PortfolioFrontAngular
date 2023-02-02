import { HttpClient } from '@angular/common/http'; // se agrego
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // se agrega para que la aplicacion no quede en la espera del servicio

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any> {
    return this.http.get('./assets/data/data.json')
  }
}
