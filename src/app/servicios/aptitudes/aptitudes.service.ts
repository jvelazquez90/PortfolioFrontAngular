import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // agregado
import { BehaviorSubject, Observable } from 'rxjs'; // se agrega para que la aplicacion no quede en la espera del servicio
import { map } from 'rxjs/operators';
import { Aptitudes } from 'src/app/model/aptitudes';

@Injectable({
  providedIn: 'root'
})
export class AptitudesService {

  url = "http://localhost:8080/aptitudes";

  constructor( private httpClient:HttpClient ) { }

  //----------------------------------------------------------------------------------------

  ObtenerAptitudes():Observable<any>{
    return this.httpClient.get(this.url + "/get");
  }
 
  crearAptitudes(aptitud: any): Observable<any>{
    return this.httpClient.post(this.url + '/crear/',aptitud);
  }

  obtenerAptitudesId(id: number): Observable<any>{
    return this.httpClient.get(this.url + '/obtener/' + id);
  }

  editarAptitudes(aptitud: Aptitudes): Observable<any>{
    return this.httpClient.put(this.url + '/editar/' + aptitud.id, aptitud);
  }

  eliminarAptitudes(id: number): Observable<any>{
    return this.httpClient.delete(this.url + '/borrar/' + id);
  }
}
