import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // agregado
import { BehaviorSubject, Observable } from 'rxjs'; // se agrega para que la aplicacion no quede en la espera del servicio
import { map } from 'rxjs/operators';
import { RedesSociales } from 'src/app/model/redes-sociales';

@Injectable({
  providedIn: 'root'
})
export class RedesSocialesService {

  //url = "http://localhost:8080/redesSociales";
  url = "https://portfolioweb-44z6.onrender.com/redesSociales";

  constructor( private httpClient:HttpClient ) { }

  //----------------------------------------------------------------------------------------

  ObtenerRedesSocialesS():Observable<any>{
    return this.httpClient.get(this.url + "/get");
  }
 
  crearRedesSocialesS(redSocial: any): Observable<any>{
    return this.httpClient.post(this.url + '/crear/',redSocial);
  }

  obtenerRedesSocialesIdS(id: number): Observable<any>{
    return this.httpClient.get(this.url + '/obtener/' + id);
  }

  editarRedesSocialesS(redSocial: RedesSociales): Observable<any>{
    return this.httpClient.put(this.url + '/editar/' + redSocial.id, redSocial);
  }

  eliminarRedesSocialesS(id: number): Observable<any>{
    return this.httpClient.delete(this.url + '/borrar/' + id);
  }
}
