import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // agregado
import { BehaviorSubject, Observable } from 'rxjs'; // se agrega para que la aplicacion no quede en la espera del servicio
import { map } from 'rxjs/operators';
import { Aptitudes } from 'src/app/model/aptitudes';

@Injectable({
  providedIn: 'root'
})
export class AptitudesService {

  //url = "http://localhost:8080/aptitudes";
  url = "https://portfolioweb-44z6.onrender.com/aptitudes";

  constructor( private httpClient:HttpClient ) { }

  //----------------------------------------------------------------------------------------

  ObtenerAptitudesS():Observable<any>{
    return this.httpClient.get(this.url + "/get");
  }
 
  crearAptitudesS(aptitud: any): Observable<any>{
    return this.httpClient.post(this.url + '/crear/',aptitud);
  }

  obtenerAptitudesIdS(id: number): Observable<any>{
    return this.httpClient.get(this.url + '/obtener/' + id);
  }

  editarAptitudesS(aptitud: Aptitudes): Observable<any>{
    return this.httpClient.put(this.url + '/editar/' + aptitud.id, aptitud);
  }

  eliminarAptitudesS(id: number): Observable<any>{
    return this.httpClient.delete(this.url + '/borrar/' + id);
  }
}
